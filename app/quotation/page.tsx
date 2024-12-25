"use client";

import { useState, useEffect, useRef } from 'react';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { jsPDF } from 'jspdf';

export default function Quotation() {
  const [products, setProducts] = useState([]);
  const [quotationItems, setQuotationItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const pdfRef = useRef();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('/api/products', { method: 'GET' });
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const total = quotationItems.reduce((sum, item) => sum + (Number(item.price) || 0) * item.qty, 0);
    setSubtotal(total);
  }, [quotationItems]);

  const addItem = () => {
    setQuotationItems([...quotationItems, { title: '', price: 0, qty: 1 }]);
  };

  const updateItem = (index, field, value) => {
    const updatedItems = [...quotationItems];
    if (field === 'title') {
      const selectedProduct = products.find((product) => product.title === value);
      updatedItems[index].price = selectedProduct?.price || 0;
    }
    updatedItems[index][field] = value;
    setQuotationItems(updatedItems);
  };

  const exportPDF = () => {
    const doc = new jsPDF();
    const element = pdfRef.current;
    
    // Add the logo (adjust the path and size as necessary)
    doc.addImage('logo1.png', 'PNG', 10, 10, 50, 30);
    
    // Add date and title
    doc.setFontSize(12);
    doc.text('Date: ' + getFormattedDate(), 160, 20);
    doc.setFontSize(18);
    doc.text('Quotation', 14, 40);

    // Table headers
    doc.setFontSize(12);
    doc.text('Title', 14, 60);
    doc.text('Price', 70, 60);
    doc.text('Qty', 120, 60);
    doc.text('Total', 150, 60);

    // Table rows
    let y = 70;
    quotationItems.forEach(item => {
      doc.text(item.title, 14, y);
      doc.text((Number(item.price) || 0).toFixed(2), 70, y);  {/* Ensure price is a valid number */}
      doc.text(item.qty.toString(), 120, y);
      doc.text(((Number(item.price) || 0) * item.qty).toFixed(2), 150, y);  {/* Ensure price is a valid number */}
      y += 10;
    });

    // Subtotal
    doc.setFontSize(14);
    doc.text('Subtotal: ' + subtotal.toFixed(2), 160, y + 10);

    doc.save('quotation.pdf');
  };

  const exportExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(
      quotationItems.map((item) => ({
        Title: item.title,
        Price: (Number(item.price) || 0).toFixed(2),  // Ensure price is a valid number
        Qty: item.qty,
        Total: ((Number(item.price) || 0) * item.qty).toFixed(2),  // Ensure price is a valid number
      }))
    );
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Quotation');
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(data, 'quotation.xlsx');
  };

  const getFormattedDate = () => {
    const date = new Date();
    return date.toLocaleDateString();
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Create Quotation</h1>
      <button
        onClick={addItem}
        className="bg-blue-500 text-white px-4 py-2 mb-4 rounded"
      >
        Add Item
      </button>
      <div ref={pdfRef} className="border p-4">
        {/* Logo Image */}
        <div className="mb-4">
          <img
            src="logo1.png"
            alt="Logo"
            className="max-w-[200px]"
          />
        </div>

        {/* Date and Title */}
        <div className="text-right text-sm font-light mb-4">Date: {getFormattedDate()}</div>
        <h2 className="text-xl font-bold mb-4">Quotation</h2>

        {/* Table */}
        <table className="table-auto w-full border-collapse border border-gray-300 mb-4">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Title</th>
              <th className="border border-gray-300 px-4 py-2">Price</th>
              <th className="border border-gray-300 px-4 py-2">Qty</th>
              <th className="border border-gray-300 px-4 py-2">Total</th>
            </tr>
          </thead>
          <tbody>
            {quotationItems.map((item, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-4 py-2">
                  <select
                    value={item.title}
                    onChange={(e) => updateItem(index, 'title', e.target.value)}
                    className="w-full border-none p-1 outline-none"
                    style={{height: '40px'}}
                  >
                    <option value="">Select Product</option>
                    {products.map((product) => (
                      <option key={product.id} value={product.title}>
                        {product.title}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {(Number(item.price) || 0).toFixed(2)} {/* Ensure price is a valid number */}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <input
                    type="number"
                    value={item.qty}
                    onChange={(e) => updateItem(index, 'qty', parseInt(e.target.value))}
                    className="w-full border-none p-1 outline-none"
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {((Number(item.price) || 0) * item.qty).toFixed(2)} {/* Ensure price is a valid number */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="text-right font-bold">Subtotal: {subtotal.toFixed(2)}</div>
      </div>
      <div className="flex gap-4 mt-4">
        <button
          onClick={exportPDF}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Export as PDF
        </button>
        <button
          onClick={exportExcel}
          className="bg-yellow-500 text-white px-4 py-2 rounded"
        >
          Export as Excel
        </button>
      </div>
    </div>
  );
}

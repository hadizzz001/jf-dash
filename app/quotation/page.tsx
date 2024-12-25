"use client"


import { useState, useEffect, useRef } from 'react';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import html2pdf from 'html2pdf.js';

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
    const total = quotationItems.reduce((sum, item) => sum + item.price * item.qty, 0);
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
    const element = pdfRef.current;
    const options = {
      margin: 1,
      filename: 'quotation.pdf',
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'cm', format: 'a4', orientation: 'portrait' },
    };

    html2pdf().from(element).set(options).save();
  };

  const exportExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(
      quotationItems.map((item) => ({
        Title: item.title,
        Price: item.price.toFixed(2),
        Qty: item.qty,
        Total: (item.price * item.qty).toFixed(2),
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
                  {Number(item.price || 0).toFixed(2)}
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
                  {(Number(item.price || 0) * item.qty).toFixed(2)}
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


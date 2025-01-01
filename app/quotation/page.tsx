'use client';

import { useState, useEffect, useRef } from 'react';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { jsPDF } from 'jspdf';

export default function Quotation() {
  const [products, setProducts] = useState([]);
  const [quotationItems, setQuotationItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [clientName, setClientName] = useState('');
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
    setQuotationItems([...quotationItems, { type: 'existing', title: '', price: 0, qty: 1, specs: '', image: '' }]);
  };

  const updateItem = (index, field, value) => {
    const updatedItems = [...quotationItems];
    updatedItems[index][field] = value;

    if (field === 'title' && updatedItems[index].type === 'existing') {
      const selectedProduct = products.find((product) => product.title === value);
      updatedItems[index].price = selectedProduct?.price || 0;
    }

    setQuotationItems(updatedItems);
  };

  const updateType = (index, type) => {
    const updatedItems = [...quotationItems];
    updatedItems[index] = { type, title: '', price: 0, qty: 1, specs: '', image: '' };
    setQuotationItems(updatedItems);
  };

  const handleImageUpload = (index, file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const updatedItems = [...quotationItems];
      updatedItems[index].image = e.target.result; // Use base64 string
      setQuotationItems(updatedItems);
    };
    reader.readAsDataURL(file);
  };

  const exportPDF = async () => {
    const doc = new jsPDF();
    const tableStartY = 60;
  
    // Add logo at the top
    const logo = new Image();
    logo.src = 'logo1.png';
  
    await new Promise((resolve) => {
      logo.onload = () => {
        const logoWidth = 25; // Adjust the logo width as needed
        const logoHeight = logoWidth * (logo.height / logo.width); // Maintain aspect ratio
        doc.addImage(logo, 'PNG', 10, 10, logoWidth, logoHeight); // Add the logo
        resolve();
      };
    });
  
    // Adjusted Header
    const headerY = 20; // New vertical starting position for text
    doc.setFontSize(12);
    doc.text(`Client Name: ${clientName}`, 14, headerY + 20);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 150, headerY + 20);
  
    // Table header with styled background
    doc.setFillColor(50, 50, 150); // Dark blue background
    doc.rect(10, tableStartY - 10, 190, 20, 'F'); // Header background with added space below
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(255, 255, 255); // White text
    doc.text('Title', 14, tableStartY + 5);
    doc.text('Price', 50, tableStartY + 5);
    doc.text('Qty', 70, tableStartY + 5);
    doc.text('Subtotal', 90, tableStartY + 5);
    doc.text('Specs', 120, tableStartY + 5);
    doc.text('Image', 160, tableStartY + 5);
  
    let y = tableStartY + 20;
    let totalAmount = 0;
  
    // Helper function to split text into lines
    const splitTextByLength = (text, maxLength) => {
      const regex = new RegExp(`.{1,${maxLength}}`, 'g');
      return text.match(regex) || [];
    };
  
    // Helper function to ensure specs are fully loaded
    const loadSpecs = (item) => {
      return new Promise((resolve) => {
        // Use the pattern to find the specs from the products list
        const product = products.find((product) => product.title === item.title);
        if (product && product.specifications) {
          resolve(product.specifications.map(spec => spec.name).join('\n'));
        } else {
          resolve(item.specs || ''); // Fallback if not found
        }
      });
    };
  
    for (let i = 0; i < quotationItems.length; i++) {
      const item = quotationItems[i];
      const isEvenRow = i % 2 === 0;
  
      const titleLines = splitTextByLength(item.title || '', 12);
  
      // Ensure specs are fully loaded for existing items
      const specs = await loadSpecs(item);
      const specsLines = splitTextByLength(specs, 12);
  
      const rowHeight = Math.max(8, titleLines.length * 8, specsLines.length * 8);
  
      doc.setFillColor(isEvenRow ? 230 : 245, 230, 245);
      doc.rect(10, y - 10, 190, rowHeight, 'F');
  
      const subtotal = (Number(item.price) || 0) * item.qty;
      totalAmount += subtotal;
  
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(0, 0, 0);
  
      // Handle Title
      const titleX = 14;
      doc.text(titleLines, titleX, y - 5, { baseline: 'top' });
  
      // Handle Price
      doc.text((Number(item.price) || 0).toFixed(2), 50, y);
  
      // Handle Quantity
      doc.text(item.qty.toString(), 70, y);
  
      // Handle Subtotal
      doc.text(subtotal.toFixed(2), 90, y);
  
      // Handle Specs
      doc.text(specsLines, 120, y - 5, { baseline: 'top' });
  
      // Handle Image
      const imageUrl = item.type === 'existing'
        ? products.find((product) => product.title === item.title)?.img?.[0]
        : item.image;
  
      if (imageUrl) {
        const imageElement = new Image();
        imageElement.src = imageUrl;
  
        await new Promise((resolve) => {
          imageElement.onload = () => {
            const aspectRatio = imageElement.width / imageElement.height;
            const imgWidth = 20;
            const imgHeight = imgWidth / aspectRatio;
            doc.addImage(imageElement, 'PNG', 165, y - 5, imgWidth, imgHeight);
            resolve();
          };
        });
      }
  
      y += rowHeight;
    }
  
    // Add total amount
    y += 10;
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(0, 0, 0);
    doc.text('Total Amount: ' + '$' + totalAmount.toFixed(2), 14, y);
  
    // Save the PDF
    doc.save('quotation.pdf');
  };
  














  const exportExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(
      quotationItems.map((item) => ({
        Title: item.title,
        Price: (Number(item.price) || 0).toFixed(2),
        Qty: item.qty,
        Subtotal: ((Number(item.price) || 0) * item.qty).toFixed(2),
        Specs: item.specs,
      }))
    );
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Quotation');
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(data, 'quotation.xlsx');
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Create Quotation</h1>
      <div className="mb-4">
        <label className="block font-medium mb-2">Client Name:</label>
        <input
          type="text"
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
          className="w-full border p-2 rounded"
        />
      </div>
      <button
        onClick={addItem}
        className="bg-blue-500 text-white px-4 py-2 mb-4 rounded"
      >
        Add Item
      </button>
      <div className="border p-4">
        <table className="table-auto w-full border-collapse border border-gray-300 mb-4">
          <thead>
            <tr>
              <th className="border border-gray-300 px-2 py-2">Type</th>
              <th className="border border-gray-300 px-2 py-2">Title</th>
              <th className="border border-gray-300 px-2 py-2">Price</th>
              <th className="border border-gray-300 px-2 py-2">Qty</th>
              <th className="border border-gray-300 px-2 py-2">Subtotal</th>
              <th className="border border-gray-300 px-2 py-2">Specs</th>
              <th className="border border-gray-300 px-2 py-2">Image</th>
            </tr>
          </thead>
          <tbody>
            {quotationItems.map((item, index) => (
              <tr key={index}>
                {/* Type Column */}
                <td className="border border-gray-300 px-2 py-2">
                  <div className="flex gap-2">
                    <label>
                      <input
                        type="radio"
                        name={`type-${index}`}
                        value="existing"
                        checked={item.type === 'existing'}
                        onChange={() => updateType(index, 'existing')}
                      />{' '}
                      Existing
                    </label>
                    <label>
                      <input
                        type="radio"
                        name={`type-${index}`}
                        value="custom"
                        checked={item.type === 'custom'}
                        onChange={() => updateType(index, 'custom')}
                      />{' '}
                      Custom
                    </label>
                  </div>
                </td>

                {/* Title Column */}
                <td className="border border-gray-300 px-2 py-2">
                  {item.type === 'existing' ? (
                    <select
                      value={item.title}
                      onChange={(e) => updateItem(index, 'title', e.target.value)}
                      className="w-full border-none p-1 outline-none"
                    >
                      <option value="">Select Product</option>
                      {products.map((product) => (
                        <option key={product.title} value={product.title}>
                          {product.title}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type="text"
                      value={item.title}
                      onChange={(e) => updateItem(index, 'title', e.target.value)}
                      className="w-full border-none p-1 outline-none"
                      placeholder="Enter Title"
                    />
                  )}
                </td>

                {/* Price Column */}
                <td className="border border-gray-300 px-2 py-2">
                  <input
                    type="number"
                    value={item.price}
                    onChange={(e) => updateItem(index, 'price', e.target.value)}
                    className="w-full border-none p-1 outline-none"
                  />
                </td>

                {/* Quantity Column */}
                <td className="border border-gray-300 px-2 py-2">
                  <input
                    type="number"
                    value={item.qty}
                    onChange={(e) => updateItem(index, 'qty', e.target.value)}
                    className="w-full border-none p-1 outline-none"
                  />
                </td>

                {/* Subtotal Column */}
                <td className="border border-gray-300 px-2 py-2">
                  {`$${((Number(item.price) || 0) * item.qty).toFixed(2)}`}
                </td>

                {/* Specifications Column */}
                <td className="border border-gray-300 px-2 py-2">
                  {item.type === 'existing' ? (
                    <ul className="list-disc pl-4">
                      {products.find((product) => product.title === item.title)?.specifications?.map((spec, idx) =>
                        typeof spec === 'object' ? (
                          <li key={idx}>
                            {spec.name}
                          </li>
                        ) : (
                          <li key={idx}>{spec}</li>
                        )
                      ) || <span className="text-gray-500">No specifications available</span>}
                    </ul>
                  ) : (
                    <textarea
                      value={item.specs}
                      onChange={(e) => updateItem(index, 'specs', e.target.value)}
                      className="w-full border-none p-1 outline-none"
                      rows={2}
                    ></textarea>
                  )}
                </td>



                {/* Image Column */}
                <td className="border border-gray-300 px-2 py-2">
                  {item.type === 'existing' && products.find((product) => product.title === item.title)?.img?.[0] ? (
                    <img
                      src={products.find((product) => product.title === item.title).img[0]}
                      alt="Product"
                      className="mt-2 max-w-full h-16"
                    />
                  ) : (
                    <>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageUpload(index, e.target.files[0])}
                      />
                      {item.image && <img src={item.image} alt="Uploaded" className="mt-2 max-w-full h-16" />}
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>

        </table>
        <div className="flex justify-between items-center">
          <div>
            <strong>Total:</strong> {`$${subtotal.toFixed(2)}`}
          </div>
        </div>
      </div>
      <button
        onClick={exportPDF}
        className="bg-red-500 text-white px-4 py-2 rounded mr-4"
      >
        Export to PDF
      </button>
      <button
        onClick={exportExcel}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Export to Excel
      </button>
    </div>
  );
}

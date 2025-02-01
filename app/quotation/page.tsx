'use client';

import { useState, useEffect, useRef } from 'react';
import * as XLSX from 'xlsx';
import { jsPDF } from 'jspdf';
import ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';

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
    const pageHeight = doc.internal.pageSize.height; // Page height
    const tableStartY = 60;
    const padding = 5; // Padding around the content
    const rowHeightLimit = pageHeight - 20; // Limit before adding a new page
    const imageHeight = 25; // Fixed image height (adjust as needed)
    const specsCellWidth = 60; // Fixed width for the specs column

    // Add logo at the top
    const logo = new Image();
    logo.src = 'logo1.png';

    await new Promise((resolve) => {
      logo.onload = () => {
        const logoWidth = 25;
        const logoHeight = logoWidth * (logo.height / logo.width); // Maintain aspect ratio
        doc.addImage(logo, 'PNG', 10, 10, logoWidth, logoHeight); // Add logo
        resolve();
      };
    });

    // Header details
    const headerY = 20;
    doc.setFontSize(12);
    doc.text(`Client Name: ${clientName}`, 14, headerY + 20);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 150, headerY + 20);

    // Table header with background
    const addTableHeader = (startY) => {
      doc.setFillColor(50, 50, 150); // Dark blue background
      doc.rect(10, startY - 10, 190, 20, 'F'); // Header background
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(255, 255, 255); // White text
      doc.text('Title', 14, startY + 5);
      doc.text('Price', 50, startY + 5);
      doc.text('Qty', 70, startY + 5);
      doc.text('Subtotal', 90, startY + 5);
      doc.text('Specs', 120, startY + 5);
      doc.text('Image', 160, startY + 5);
    };

    addTableHeader(tableStartY);

    let y = tableStartY + 20;
    let totalAmount = 0;

    // Helper function to split long words in specs
    const splitLongWords = (text, maxWordLength) => {
      return text
        .split(/\s+/) // Split by whitespace
        .map(word => (word.length > maxWordLength ? word.match(new RegExp(`.{1,${maxWordLength}}`, 'g')).join('\n') : word))
        .join(' ');
    };

    // Helper function to ensure specs are fully loaded
    const loadSpecs = async (item) => {
      const product = products.find((product) => product.title === item.title);
      const rawSpecs = typeof product?.specifications === 'string'
          ? product.specifications
          : item.specs || '';
    
      const cleanSpecs = rawSpecs.replace(/<[^>]*>/g, ''); // Remove all HTML tags
      
      // Now apply splitLongWords to cleanSpecs
      const splitSpecs = splitLongWords(cleanSpecs, 20);
      
      return splitSpecs; // Return the cleaned and split text
    };
    
    
  


    for (let i = 0; i < quotationItems.length; i++) {
      const item = quotationItems[i];
      const isEvenRow = i % 2 === 0;

      // Get specifications dynamically
      const specifications = await loadSpecs(item);

      const titleLines = doc.splitTextToSize(item.title || '', 40);
      const specsLines = doc.splitTextToSize(specifications, specsCellWidth);

      // Calculate the height of the text content
      const titleHeight = titleLines.length * 6; // Approximate height per line
      const specsHeight = specsLines.length * 6;

      // Determine the row height dynamically
      const rowHeight = Math.max(imageHeight, titleHeight, specsHeight) + padding * 2;

      // Check if a new page is needed
      if (y + rowHeight > rowHeightLimit) {
        doc.addPage();
        y = 20; // Reset Y position
        addTableHeader(y);
        y += 20; // Move below the header
      }

      doc.setFillColor(isEvenRow ? 230 : 245, 230, 245);
      doc.rect(10, y - 10, 190, rowHeight, 'F');

      const subtotal = (Number(item.price) || 0) * item.qty;
      totalAmount += subtotal;

      doc.setFont('helvetica', 'normal');
      doc.setTextColor(0, 0, 0);

      // Title column
      doc.text(titleLines, 14, y - 5, { baseline: 'top' });

      // Price column
      doc.text((Number(item.price) || 0).toFixed(2), 50, y);

      // Quantity column
      doc.text(item.qty.toString(), 70, y);

      // Subtotal column
      doc.text(subtotal.toFixed(2), 90, y);

      // Specs column
      doc.text(specsLines, 120, y - 5, { baseline: 'top', maxWidth: specsCellWidth });

      // Image column
      const imageUrl =
        item.type === 'existing'
          ? products.find((product) => product.title === item.title)?.img?.[0]
          : item.image;

      if (imageUrl) {
        const imageElement = new Image();
        imageElement.src = imageUrl;

        await new Promise((resolve) => {
          imageElement.onload = () => {
            const aspectRatio = imageElement.width / imageElement.height;
            const imgWidth = imageHeight * aspectRatio;
            doc.addImage(imageElement, 'PNG', 165, y - 5, imgWidth, imageHeight);
            resolve();
          };
        });
      }

      y += rowHeight;
    }

    // Add total amount
    if (y + 10 > rowHeightLimit) {
      doc.addPage();
      y = 20; // Reset Y position
    }
    y += 10;
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(0, 0, 0);
    doc.text('Total Amount: ' + '$' + totalAmount.toFixed(2), 14, y);

    // Save the PDF
    doc.save('quotation.pdf');
  };


















  const exportExcel = async () => {
    // Helper function to split specs text into lines of 20 characters
    const formatSpecs = (text, maxLength = 20) => {
      let result = '';
      let currentLine = '';

      text.split(' ').forEach(word => {
        if (currentLine.length + word.length + 1 > maxLength) {
          result += currentLine + '\n'; // New line if length exceeds
          currentLine = word;
        } else {
          currentLine += (currentLine ? ' ' : '') + word;
        }
      });

      // Add the last line
      return result + currentLine;
    };

    // Helper function to load the specifications dynamically
 
    const loadSpecs = async (item) => {
      const product = products.find((product) => product.title === item.title);
      const rawSpecs = typeof product?.specifications === 'string'
          ? product.specifications
          : item.specs || '';
    
      const cleanSpecs = rawSpecs.replace(/<[^>]*>/g, ''); // Remove all HTML tags
      
      // Now apply splitLongWords to cleanSpecs
      const splitSpecs = formatSpecs(cleanSpecs, 20);
      
      return splitSpecs; // Return the cleaned and split text
    };
    
  
    
    
  


    // Create a new workbook and add a worksheet
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Quotation');

    // Add column headers
    worksheet.columns = [
      { header: 'Title', key: 'title', width: 20 },
      { header: 'Price', key: 'price', width: 10 },
      { header: 'Qty', key: 'qty', width: 5 },
      { header: 'Subtotal', key: 'subtotal', width: 10 },
      { header: 'Specs', key: 'specs', width: 30 }, // Set an initial width for Specs column
    ];

    let totalAmount = 0;

    // Populate worksheet with data
    for (const item of quotationItems) {
      const specifications = await loadSpecs(item); // Get specifications dynamically

      const subtotal = (Number(item.price) || 0) * item.qty;
      totalAmount += subtotal;

      worksheet.addRow({
        title: item.title,
        price: (Number(item.price) || 0).toFixed(2),
        qty: item.qty,
        subtotal: subtotal.toFixed(2),
        specs: specifications, // Apply the dynamically loaded specifications
      });
    }

    // Apply wrap text and alignment to the 'Specs' column
    worksheet.getColumn('specs').eachCell((cell, rowNumber) => {
      if (rowNumber > 1) { // Skip the header row
        cell.alignment = { wrapText: true };
      }
    });

    // Add the total amount row below the table
    worksheet.addRow([]); // Add a blank row
    worksheet.addRow({
      title: 'Total Amount',
      price: '',
      qty: '',
      subtotal: totalAmount.toFixed(2), // Display total amount in the subtotal column
      specs: '', // Leave the specs column empty
    });

    // Apply bold styling to the total row
    worksheet.getRow(worksheet.lastRow.number).eachCell((cell) => {
      cell.font = { bold: true };
      cell.alignment = { horizontal: 'center' };
    });

    // Generate the Excel file and save it
    const buffer = await workbook.xlsx.writeBuffer();
    const data = new Blob([buffer], { type: 'application/octet-stream' });
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
  {products.find((product) => product.title === item.title)?.specifications ? (
    <li dangerouslySetInnerHTML={{ __html: products.find((product) => product.title === item.title).specifications }} />
  ) : (
    <span className="text-gray-500">No specifications available</span>
  )}
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
                    src={`api/proxy?url=${products.find((product) => product.title === item.title).img[0]}`}

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

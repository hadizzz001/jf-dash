"use client"

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import Dropzone from '../components/Dropzone';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

export default function AddProduct() {
  const [title, setTitle] = useState('');
  const [weight, setWeight] = useState('');
  const [shipping, setShipping] = useState('');
  const [description, setDescription] = useState(''); // Rich text content
  const [specifications, setSpecifications] = useState([{ name: '', value: '' }]);
  const [sku, setSku] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [videoLink, setVideoLink] = useState('');
  const [img, setImg] = useState(['']);
  const [type, setType] = useState('products'); // Default value for the first dropdown
  const [categoryOptions, setCategoryOptions] = useState([]); // Options for the second dropdown
  const [selectedCategory, setSelectedCategory] = useState(''); // Selected value for the second dropdown

  // Fetch categories based on selected type
  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await fetch(`/api/category/${type}`);
        if (response.ok) {
          const data = await response.json();
          setCategoryOptions(data);
          setSelectedCategory(''); // Reset the selected category when type changes
        } else {
          console.error('Failed to fetch categories');
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    }
    fetchCategories();
  }, [type]);

  const handleAddRow = () => {
    setSpecifications([...specifications, { name: '', value: '' }]);
  };

  const handleInputChange = (index, field, value) => {
    const updatedSpecs = [...specifications];
    updatedSpecs[index][field] = value;
    setSpecifications(updatedSpecs);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    
if (img.length === 1 && img[0] === '') {
  alert('Please choose atleast 1 image');
}

else {
  const payload = {
    title,
    weight,
    shipping,
    description,
    specifications,
    sku,
    price,
    stock,
    videoLink,
    img,
    type,
    category: selectedCategory,
  };

  const response = await fetch('/api/products', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (response.ok) {
    alert('Product added successfully!');
    window.location.href = '/dashboard';
  } else {
    alert('Failed to add product');
  }
}
  };

  const handleImgChange = (url) => {
    if (url) {
      setImg(url);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Add New Product</h1>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border p-2 mb-4"
        required
      />
      <input
        type="number"
        step="0.01"
        placeholder="Weight"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        className="w-full border p-2 mb-4"
        required
      />
      <input
        type="text"
        placeholder="Shipping"
        value={shipping}
        onChange={(e) => setShipping(e.target.value)}
        className="w-full border p-2 mb-4"
        required
      />

      {/* Type Dropdown */}
      <label className="block text-lg font-bold mb-2">Type</label>
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="w-full border p-2 mb-4"
        required
      >
        <option value="products">Products</option>
        <option value="parts">Parts</option>
      </select>

      {/* Category Dropdown */}
      <label className="block text-lg font-bold mb-2">Category</label>
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="w-full border p-2 mb-4"
        required
      >
        <option value="" disabled>
          Select a category
        </option>
        {categoryOptions.map((category) => (
          <option key={category.id} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="SKU"
        value={sku}
        onChange={(e) => setSku(e.target.value)}
        className="w-full border p-2 mb-4"
        required
      />
      <input
        type="number"
        step="0.01"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="w-full border p-2 mb-4"
        required
      />
      <input
        type="number"
        placeholder="Stock"
        value={stock}
        onChange={(e) => setStock(e.target.value)}
        className="w-full border p-2 mb-4"
        required
      />
      <input
        type="url"
        placeholder="Video Link"
        value={videoLink}
        onChange={(e) => setVideoLink(e.target.value)}
        className="w-full border p-2 mb-4"
      />
      <label className="block text-lg font-bold mb-2">Description</label>
      <ReactQuill
        value={description}
        onChange={setDescription}
        className="mb-4"
        theme="snow"
        placeholder="Write your product description here..."
      />

<style
        dangerouslySetInnerHTML={{
          __html:
            "\n  .uploadcare--widget {\n    background:black;\n  }\n  "
        }}
      />
      <Dropzone HandleImagesChange={handleImgChange} />
      <h2 className="text-lg font-bold mb-2">Specifications</h2>
      {specifications.map((spec, index) => (
        <div key={index} className="flex gap-4 mb-2">
          <input
            type="text"
            placeholder="Value"
            value={spec.name}
            onChange={(e) => handleInputChange(index, 'name', e.target.value)}
            className="flex-1 border p-2"
            required
          /> 
        </div>
      ))}
      <button
        type="button"
        onClick={handleAddRow}
        style={{ fontSize: '20px' }}
        className="bg-blue-500 text-white px-3 py-1 mb-4 flex"
      >
        +
      </button>
      <button type="submit" className="bg-green-500 text-white px-4 py-2">
        Save Product
      </button>
    </form>
  );
}

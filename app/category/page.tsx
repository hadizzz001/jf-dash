'use client';

import { useState, useEffect } from 'react';
import Dropzone from '../components/Dropzone'
import { redirect } from 'next/navigation'; 


const AddCategory = () => {
  const [formData, setFormData] = useState({ name: '', type: 'products', img: [] });
  const [message, setMessage] = useState('');
  const [categories, setCategories] = useState([]);
  const [img, setImg] = useState([''])
 

  // Fetch all categories
  const fetchCategories = async () => {
    try {
      const res = await fetch('/api/category', {
        method: 'GET',
      });
      if (res.ok) {
        const data = await res.json();
        setCategories(data); // Assuming the API returns an array of categories
      } else {
        console.error('Failed to fetch categories');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleSubmit = async (e) => { 
    
     
    const res = await fetch('/api/category', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setMessage('Category added successfully!');
      setFormData({ name: '', type: 'products', img: [] });
      fetchCategories(); // Refresh the table after adding a category 
      redirect('/category');
    } else {
      const errorData = await res.json();
      setMessage(`Error: ${errorData.error}`);
    }
  };

  const handleDelete = async (name) => {
    if (confirm(`Are you sure you want to delete the category "${name}"?`)) {
      try {
        const res = await fetch(`/api/category?name=${encodeURIComponent(name)}`, {
          method: 'DELETE',
        });
        if (res.ok) {
          setMessage(`Category "${name}" deleted successfully!`);
          fetchCategories(); // Refresh the table after deletion
          redirect('/category');
        } else {
          const errorData = await res.json();
          setMessage(`Error: ${errorData.error}`);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };



  const handleImgChange = (url) => {
    if (url) { 
      setImg(url); 
    }
  }


  useEffect(() => { 
    if (!(img.includes(""))){ 
      setFormData((prevState) => ({ ...prevState, img: img }));
    } 
  }, [img])

  

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add Category</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Name</label>
          <input
            type="text"
            className="border p-2 w-full"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>
        <div>
          <label className="block mb-1">Type</label>
          <select
            className="border p-2 w-full"
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
          >
            <option value="products">Products</option>
            <option value="parts">Parts</option>
          </select>
        </div>

        <style
        dangerouslySetInnerHTML={{
          __html:
            "\n  .uploadcare--widget {\n    background:black;\n  }\n  "
        }}
      />
        <Dropzone HandleImagesChange={handleImgChange}  />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">
          Add Category
        </button>
      </form>
      {message && <p className="mt-4">{message}</p>}

      {/* Table of Categories */}
      <h2 className="text-xl font-bold mt-8">All Categories</h2>
      <table className="table-auto border-collapse border border-gray-300 w-full mt-4">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Type</th>
            <th className="border border-gray-300 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.length > 0 ? (
            categories.map((category) => (
              <tr key={category.name}>
                <td className="border border-gray-300 p-2">{category.name}</td>
                <td className="border border-gray-300 p-2">{category.type}</td>
                <td className="border border-gray-300 p-2 text-center">
                  <button
                    onClick={() => handleDelete(category.name)}
                    className="bg-red-500 text-white px-4 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="3"
                className="border border-gray-300 p-2 text-center"
              >
                No categories found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AddCategory;

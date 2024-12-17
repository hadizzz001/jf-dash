'use client';

import { useState, useEffect } from 'react';

export default function ProductTable() {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch products on load
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await fetch('/api/products');
    if (response.ok) {
      const data = await response.json();
      setProducts(data);
    } else {
      console.error('Failed to fetch products');
    }
  };

  const handleDelete = async (id) => {
    if (confirm('Are you sure you want to delete this product?')) {
      try {
        const response = await fetch(`/api/products/${id}`, {
          method: 'DELETE',
        });
        if (response.ok) {
          alert('Product deleted successfully');
          fetchProducts();
        } else {
          console.error('Failed to delete product');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
  };

  const handleUpdate = async (updatedProduct) => {
    try {
      const response = await fetch(`/api/products/${updatedProduct.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedProduct),
      });

      if (response.ok) {
        alert('Product updated successfully');
        setEditingProduct(null);
        fetchProducts();
      } else {
        console.error('Failed to update product');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Filter products based on the search query
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );


  console.log("prod: ",products);
  

  return (
    <div className="max-w-6xl mx-auto p-4">
      {editingProduct && (
        <EditProductForm
          product={editingProduct}
          onCancel={() => setEditingProduct(null)}
          onSave={handleUpdate}
        />
      )}
      <h1 className="text-2xl font-bold mb-4">Product List</h1>

      {/* Search input */}
      <div className="mb-4">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full border p-2"
          placeholder="Search by title..."
        />
      </div>

      <table className="table-auto w-full border-collapse border border-gray-200 mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Title</th>
            <th className="border p-2">Pic</th>
            <th className="border p-2">Price (USD)</th>
            <th className="border p-2">Stock</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product) => (
            <tr key={product.id} className="hover:bg-gray-50">
              <td className="border p-2">{product.title}</td>
              <td className="border p-2">
                <img src={product.img[0]} alt="Product Image" className="w-24 h-auto" />
              </td>
              <td className="border p-2">{product.price}</td>
              <td className="border p-2">{product.stock}</td>
              <td className="border p-2">
                <button
                  onClick={() => handleEdit(product)}
                  className="bg-yellow-500 text-white px-2 py-1 mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(product.id)}
                  className="bg-red-500 text-white px-2 py-1"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function EditProductForm({ product, onCancel, onSave }) {
  const [title, setTitle] = useState(product.title);
  const [price, setPrice] = useState(product.price);
  const [stock, setStock] = useState(product.stock);
  const [weight, setWeight] = useState(product.weight || '');
  const [shipping, setShipping] = useState(product.shipping || '');
  const [sku, setSku] = useState(product.sku || '');
  const [videoLink, setVideoLink] = useState(product.videoLink || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      ...product,
      title,
      price,
      stock,
      weight,
      shipping,
      sku,
      videoLink,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="border p-4 bg-gray-100 rounded">
      <h2 className="text-xl font-bold mb-4">Edit Product</h2>

      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border p-2"
          placeholder="Title"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
        <input
          id="price"
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full border p-2"
          placeholder="Price"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="stock" className="block text-sm font-medium text-gray-700">Stock</label>
        <input
          id="stock"
          type="text"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          className="w-full border p-2"
          placeholder="Stock"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="weight" className="block text-sm font-medium text-gray-700">Weight</label>
        <input
          id="weight"
          type="text"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="w-full border p-2"
          placeholder="Weight"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="shipping" className="block text-sm font-medium text-gray-700">Shipping Info</label>
        <input
          id="shipping"
          type="text"
          value={shipping}
          onChange={(e) => setShipping(e.target.value)}
          className="w-full border p-2"
          placeholder="Shipping Info"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="sku" className="block text-sm font-medium text-gray-700">SKU</label>
        <input
          id="sku"
          type="text"
          value={sku}
          onChange={(e) => setSku(e.target.value)}
          className="w-full border p-2"
          placeholder="SKU"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="videoLink" className="block text-sm font-medium text-gray-700">Video Link</label>
        <input
          id="videoLink"
          type="text"
          value={videoLink}
          onChange={(e) => setVideoLink(e.target.value)}
          className="w-full border p-2"
          placeholder="Video Link"
        />
      </div>

      <div className="flex gap-2">
        <button type="submit" className="bg-green-500 text-white px-4 py-2">
          Save
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-500 text-white px-4 py-2"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

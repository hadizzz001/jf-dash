"use client";

import AddPost from "./../components/AddPost";
import { fetchTemp } from "./../utils";
import { useState, useEffect } from "react";
import axios from "axios";
import Modal from "../components/Modal";
import { FaEdit, FaTrash } from "react-icons/fa";
import * as XLSX from "xlsx";
import "bootstrap/dist/css/bootstrap.min.css";

const Dashboard = () => {
  const [allTemp, setTemp] = useState([]);
  const [active, setActive] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);

  const fetchData = async () => {
    const data = await fetchTemp();
    setTemp(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    setActive(true);

    try {
      await axios.patch(`/api/posts/${selectedPost.id}`, selectedPost);
      setOpenModalEdit(false);
      fetchData(); // Refresh the data after editing
    } catch (err) {
      console.error(err);
    } finally {
      setActive(false);
    }
  };

  const handleDeletePost = async (id) => {
    try {
      await axios.delete(`/api/posts/${id}`);
      setOpenModalDelete(false);
      fetchData(); // Refresh the data after deleting
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedPost((prev) => ({
      ...prev,
      [name]: value, // Ensure all values, including stock, are treated as strings
    }));
  };

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(allTemp);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Posts");
    XLSX.writeFile(workbook, "posts_data.xlsx");
  };

  return (
    <div className="max-w-4xl mx-auto mt-4">
      <div className="my-5 flex  ">
        <h1 className="text-3xl font-bold mr-4">Admin Dashboard</h1>
        <AddPost />
        <button
          onClick={exportToExcel} 
          className="text-white p-3 cursor-pointer   ml-4"
          style={{ background: "#ab695d" }}
        >
          Export to Excel
        </button>
      </div>
      {allTemp && allTemp.length > 0 ? (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Title</th> 
              <th>Image</th>
              <th>Category</th>
              <th>Type</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {allTemp.map((item, index) => (
              <tr key={index}>
                <td>{item.title}</td> 
                <td>
                  <img
                    src={item.img?.[0] || ""}
                    alt={item.title}
                    style={{ width: "100px", height: "auto" }}
                  />
                </td>
                <td>{item.category}</td>
                <td>{item.type}</td>
                <td>{item.price}</td>
                <td>{item.stock}</td>
                <td className="flex">
                  <FaEdit
                    className="text-primary cursor-pointer"
                    onClick={() => {
                      setSelectedPost({
                        ...item,
                        stock: item.stock.toString(), // Convert stock to string when opening the edit modal
                      });
                      setOpenModalEdit(true);
                    }}
                  />
                  <FaTrash
                    className="text-danger ml-3 cursor-pointer"
                    onClick={() => {
                      setSelectedPost(item);
                      setOpenModalDelete(true);
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="home___error-container">
          <h2 className="text-black text-xl font-bold">Loading...</h2>
        </div>
      )}

      {/* Edit Modal */}
      <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
        {selectedPost && (
          <form className="w-full mt-3" onSubmit={handleEditSubmit}>
            <input
              type="text"
              name="title"
              value={selectedPost.title || ""}
              onChange={handleChange}
              className="w-full p-2"
              placeholder="Title"
              required
            />

            <textarea
              name="description"
              value={selectedPost.description || ""}
              onChange={handleChange}
              className="w-full p-2 my-3"
              placeholder="Description"
              required
            />

            <select
              name="category"
              value={selectedPost.category || ""}
              onChange={handleChange}
              className="w-full p-2"
            >
              <option value="0">--Choose Category--</option>
              <option value="Products">Products</option>
              <option value="Parts">Parts</option>
            </select>

            <input
              type="text"
              name="price"
              value={selectedPost.price || ""}
              onChange={handleChange}
              className="w-full p-2 my-3"
              placeholder="Price"
              required
            />

            <div className="mt-3">
              <label>Stock</label>
              <div className="flex items-center">
                <button
                  type="button"
                  onClick={() =>
                    setSelectedPost((prev) => ({
                      ...prev,
                      stock: (parseInt(prev.stock || "0", 10) - 1).toString(),
                    }))
                  }
                  className="px-3 py-1 bg-gray-300"
                >
                  -
                </button>
                <input
                  type="text"
                  name="stock"
                  value={selectedPost.stock || "0"} // Stock is always a string
                  onChange={handleChange}
                  className="w-16 text-center mx-2"
                />
                <button
                  type="button"
                  onClick={() =>
                    setSelectedPost((prev) => ({
                      ...prev,
                      stock: (parseInt(prev.stock || "0", 10) + 1).toString(),
                    }))
                  }
                  className="px-3 py-1 bg-gray-300"
                >
                  +
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-success mt-3"
              disabled={active}
            >
              Submit
            </button>
          </form>
        )}
      </Modal>

      {/* Delete Modal */}
      <Modal modalOpen={openModalDelete} setModalOpen={setOpenModalDelete}>
        {selectedPost && (
          <>
            <h1 className="text-2xl pb-3">
              Are you sure you want to delete this post?
            </h1>
            <button
              onClick={() => handleDeletePost(selectedPost.id)}
              className="btn btn-primary mr-3"
            >
              Yes
            </button>
            <button
              onClick={() => setOpenModalDelete(false)}
              className="btn btn-danger"
            >
              No
            </button>
          </>
        )}
      </Modal>
    </div>
  );
};

export default Dashboard;

"use client"

 
import { useState, useEffect } from "react";
import AddPost from "./../components/AddPost";
import { fetchTemp } from "./../utils";
import axios from "axios";
import Modal from "../components/Modal";
import { FaEdit, FaTrash } from "react-icons/fa";
import * as XLSX from "xlsx";
import "bootstrap/dist/css/bootstrap.min.css";

const Dashboard = () => {
  const [allTemp, setTemp] = useState([]);
  const [filteredTemp, setFilteredTemp] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [active, setActive] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);

  const fetchData = async () => {
    const data = await fetchTemp();
    setTemp(data);
    setFilteredTemp(data); // Initialize filtered data
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter posts by title
    const filtered = allTemp.filter((item) =>
      item.title.toLowerCase().includes(query)
    );
    setFilteredTemp(filtered);
  };

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

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(filteredTemp);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Posts");
    XLSX.writeFile(workbook, "posts_data.xlsx");
  };

  // Function to return category-specific types
  const getCategoryTypes = (category) => {
    switch (category) {
      case "Products":
        return [
          "--Choose Type--",
          "Shawarma Machines",
          "Shawarma Knife & Meat Slicers",
          "Pita Oven",
          "Hummus Blender",
          "Saj Machine",
          "Kebab Char Broilers & Griddles",
          "Falafel & Meat Grinder",
          "Dough Mixers & Rollers",
          "Automatic Salad Bar Chopper",
          "Gas Ranges",
          "Salad Bar Refrigeration & Food Warmers",
          "Kunafet",
          "Gelato & Middle Eastern Booza",
          "Coffee & Espresso Machines",
          "Accessories",
          "Shawarma Meat Slicer",
          "Rotisserie Chicken",
          "Fryers",
          "Automatic Kebab Encrusted",
          "Used & Refurbished",
        ];
      case "Parts":
        return [
          "--Choose Type--",
          "Shawarma Machine Parts",
          "Hummus Machine Parts",
          "Electric Shawarma Knives",
          "Pita Oven Parts",
          "Saj Machine Parts",
          "Falafel Maker Parts",
          "Mixer Parts",
          "Divider Parts",
        ];
      default:
        return ["--Choose Type--"];
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-4">
      <div className="my-5 flex items-center">
        <h1 className="text-3xl font-bold mr-4">Admin Dashboard</h1>
        <AddPost />
        <button
          onClick={exportToExcel}
          className="text-white p-3 cursor-pointer ml-4"
          style={{ background: "#ab695d" }}
        >
          Export to Excel
        </button>
      </div>

      {/* Search Input */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by title"
          value={searchQuery}
          onChange={handleSearch}
          className="form-control"
        />
      </div>

      {filteredTemp && filteredTemp.length > 0 ? (
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
            {filteredTemp.map((item, index) => (
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
          <h2 className="text-black text-xl font-bold">
            {searchQuery ? "No matching results found." : "Loading..."}
          </h2>
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
              onChange={(e) =>
                setSelectedPost({ ...selectedPost, title: e.target.value })
              }
              className="w-full p-2"
              placeholder="Title"
              required
            />
            <textarea
              name="description"
              value={selectedPost.description || ""}
              onChange={(e) =>
                setSelectedPost({ ...selectedPost, description: e.target.value })
              }
              className="w-full p-2 my-3"
              placeholder="Description"
              required
            />
            <select
              name="category"
              value={selectedPost.category || ""}
              onChange={(e) =>
                setSelectedPost({
                  ...selectedPost,
                  category: e.target.value,
                })
              }
              className="w-full p-2"
            >
              <option value="0">--Choose Category--</option>
              <option value="Products">Products</option>
              <option value="Parts">Parts</option>
            </select>
            {/* Dynamically render type options based on category */}
            <select
              name="type"
              value={selectedPost.type || ""}
              onChange={(e) =>
                setSelectedPost({ ...selectedPost, type: e.target.value })
              }
              className="w-full p-2 my-3"
            >
              {getCategoryTypes(selectedPost.category).map((type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="price"
              value={selectedPost.price || ""}
              onChange={(e) =>
                setSelectedPost({ ...selectedPost, price: e.target.value })
              }
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
                  value={selectedPost.stock || "0"}
                  onChange={(e) =>
                    setSelectedPost({ ...selectedPost, stock: e.target.value })
                  }
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
            <button type="submit" className="w-full mt-4 p-2 bg-blue-500 text-white">
              {active ? "Saving..." : "Save Changes"}
            </button>
          </form>
        )}
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal modalOpen={openModalDelete} setModalOpen={setOpenModalDelete}>
        <div className="text-center">
          <h3>Are you sure you want to delete this post?</h3>
          <div className="flex justify-center mt-4">
            <button
              onClick={() => handleDeletePost(selectedPost.id)}
              className="bg-red-500 text-white px-4 py-2"
            >
              Yes, Delete
            </button>
            <button
              onClick={() => setOpenModalDelete(false)}
              className="bg-gray-500 text-white px-4 py-2 ml-3"
            >
              No, Cancel
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Dashboard;

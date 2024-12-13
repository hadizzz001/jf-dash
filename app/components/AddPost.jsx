"use client";

import { useState, useEffect } from "react";
import Modal from "./Modal";
import axios from "axios";
import { useRouter } from 'next/navigation';
import Dropzone from './Dropzone';

const AddPost = () => {
  const router = useRouter();
  const { push } = useRouter();
  const [modalOpen, setModalOpen] = useState(false);
  const [inputs, setInputs] = useState({});
  const [active, setActive] = useState(false);
  const [firstSelectValue, setFirstSelectValue] = useState('');
  const [secondSelectValue, setSecondSelectValue] = useState('0');
  const [secondSelectOptions, setSecondSelectOptions] = useState([]);
  const [value1, setValue1] = useState('');
  const [imgs, setImgs] = useState(['']);
  const [stock, setStock] = useState('0'); // Track stock quantity as a string

  useEffect(() => {
    setInputs((prevState) => ({
      ...prevState,
      category: "" + firstSelectValue,
      type: "" + secondSelectValue,
      img: imgs,
      price: value1,  // Add price to inputs
      stock: stock     // Add stock to inputs
    }));
  }, [firstSelectValue, secondSelectValue, imgs, value1, stock]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (e.target.category.value === "0") {
      alert("Please select a category");
    } else if (secondSelectValue === "0") {
      alert("Please select a type");
    } else if (imgs.includes("")) {
      alert("Please select item image");
    } else if (value1 === "") {
      alert("Please enter a price");
    } else {
      console.log("inputs ", inputs);
      setActive(true);
      axios
        .post("/api/posts", inputs)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err.response.data);
        })
        .finally(() => {
          setInputs({});
          setModalOpen(false);
          setActive(false);
          window.location.replace("/dashboard");
        });
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "price") {
      const numericValue = e.target.value.replace(/[^0-9.]/g, '');
      const validNumericValue = numericValue.includes('.')
        ? numericValue.split('.').slice(0, 2).join('.')
        : numericValue;
      setValue1(validNumericValue);
    }

    const name = e.target.name;
    const value = e.target.value;
    setInputs((prevState) => ({ ...prevState, [name]: value, img: localStorage.getItem("sharedValue") }));
  };

  const handleFirstSelectChange = (event) => {
    const selectedValue = event.target.value;
    setFirstSelectValue(selectedValue);
    const optionsForSecondSelect = getOptionsForSecondSelect(selectedValue);
    setSecondSelectOptions(optionsForSecondSelect);
  };

  const getOptionsForSecondSelect = (firstSelectValue) => {
    switch (firstSelectValue) {
      case 'Products':
        return [
          '--Choose Type--',
          'Shawarma Machines',
          'Shawarma Knife & Meat Slicers',
          'Pita Oven',
          'Hummus Blender',
          'Saj Machine',
          'Kebab Char Broilers & Griddles',
          'Falafel & Meat Grinder',
          'Dough Mixers & Rollers',
          'Automatic Salad Bar Chopper',
          'Gas Ranges',
          'Salad Bar Refrigeration & Food Warmers',
          'Kunafet',
          'Gelato & Middle Eastern Booza',
          'Coffee & Espresso Machines',
          'Accessories',
          'Shawarma Meat Slicer',
          'Rotisserie Chicken',
          'Fryers',
          'Automatic Kebab Encrusted',
          'Used & Refurbished'
        ];
      case 'Parts':
        return [
          '--Choose Type--',
          'Shawarma Machine Parts',
          'Hummus Machine Parts',
          'Electric Shawarma Knives',
          'Pita Oven Parts',
          'Saj Machine Parts',
          'Falafel Maker Parts',
          'Mixer Parts',
          'Divider Parts'
        ];
      default:
        return [];
    }
  };

  const handleImgChange = (url) => {
    if (url) {
      setImgs(url);
    }
  };

  // Handle stock increment and decrement
  const incrementStock = () => setStock((prevStock) => String(Number(prevStock) + 1));
  const decrementStock = () => setStock((prevStock) => (Number(prevStock) > 0 ? String(Number(prevStock) - 1) : '0'));

  return (
    <div>
      <button
        onClick={() => setModalOpen(true)}
        className="text-white p-3 cursor-pointer  "
        style={{ background: "#ab695d" }}
      >
        Add New Item
      </button>

      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form className="w-full mt-3" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            name="title"
            className="w-full p-2"
            value={inputs.title || ""}
            onChange={handleChange}
            required
          />

          <textarea
            placeholder="Description"
            name="description"
            className="w-full p-2 my-3"
            value={inputs.description || ""}
            onChange={handleChange}
            required
          />

          <select name="category" value={firstSelectValue} onChange={handleFirstSelectChange} style={{ width: "100%", height: "40px" }}>
            <option value="0">--Choose Category--</option>
            <option value="Products">Products</option>
            <option value="Parts">Parts</option>
          </select>

          <br />

          <select value={secondSelectValue} onChange={(event) => setSecondSelectValue(event.target.value)} style={{ width: "100%", height: "40px" }} className="mt-3">
            {secondSelectOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>

          <Dropzone HandleImagesChange={handleImgChange} className="mt-10 border border-neutral-200 p-16" />

          <input
            type="text"
            name="price"
            placeholder="Price"
            className="w-full p-2 mt-3"
            value={value1}
            onChange={handleChange}
            required
          />

          <div className="mt-3">
            <label>Stock</label>
            <div className="flex items-center">
              <button type="button" onClick={decrementStock} className="px-3 py-1 bg-gray-300">-</button>
              <input type="text" value={stock} readOnly className="w-16 text-center mx-2" />
              <button type="button" onClick={incrementStock} className="px-3 py-1 bg-gray-300">+</button>
            </div>
          </div>

          <button type="submit" className="px-5 py-2 mt-3" style={{ background: "#ab695d" }} disabled={active}>
            Submit
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default AddPost;

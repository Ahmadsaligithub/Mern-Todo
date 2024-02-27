import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";
import { BASE_URL } from "../utils/constants";

const Todo = ({ text, id, setUpdateUI, setShowPopup, setPopupContent }) => {
  const [checkb, setCheckb] = useState(false);
  const handleDelete = () => {
    axios
      .delete(`${BASE_URL}/delete/${id}`)
      .then((res) => setUpdateUI((pre) => !pre))
      .catch((err) => console.log(err));
  };
  const handleUpdate = () => {
    setPopupContent({ text, id });
    setShowPopup(true);
  };
  const handleCheckBox = () => {
    setCheckb((prev) => !prev);
  };

  return (
    <div
      className="todo"
      style={checkb ? { textDecoration: "line-through" } : null}
    >
      <input className="check" onClick={handleCheckBox} type="checkbox" />
      {text}
      <div className="icons">
        <FaEdit className="icon" onClick={handleUpdate} />
        <AiFillDelete className="icon" onClick={handleDelete} />
      </div>
    </div>
  );
};

export default Todo;

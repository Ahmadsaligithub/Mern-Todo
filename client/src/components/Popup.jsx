import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";

import axios from "axios";
import { BASE_URL } from "../utils/constants";

const Popup = ({ setUpdateUI, setShowPopup, popupContent }) => {
  const [input, setInput] = useState(popupContent.text);
  const updateToDo = () => {
    axios
      .put(`${BASE_URL}/update/${popupContent.id}`, { toDo: input })
      .then((res) => {
        setInput("");
        setUpdateUI((pre) => !pre);
        setShowPopup(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="backdrop">
        <div className="popup">
          <RxCross1
            className="cross"
            onClick={() => setShowPopup((prev) => !prev)}
          />
          <h1>Update Todo</h1>
          <div className="popup__input_holder">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Update Todo...."
            />
            <button onClick={updateToDo}>Update</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Popup;

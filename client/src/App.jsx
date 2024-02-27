import React, { useEffect, useState } from "react";
import Todo from "./components/Todo";
import axios from "axios";
import { BASE_URL } from "./utils/constants";
import Popup from "./components/Popup";

const App = () => {
  const [toDos, setToDos] = useState([]);
  const [input, setInput] = useState("");
  const [updateUI, setUpdateUI] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState({});

  useEffect(() => {
    axios
      .get(`${BASE_URL}/get`)
      .then((res) => setToDos(res.data))
      .catch((err) => console.log(err));
  }, [updateUI]);

  const saveToDo = () => {
    axios
      .post(`${BASE_URL}/save`, { toDo: input })
      .then((res) => {
        setUpdateUI((prev) => !prev);
        setInput("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="container">
        <h1 className="title">MY TODO</h1>

        <div className="input_holder">
          
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Add a Todo...."
          />
          <button onClick={saveToDo}>Add</button>
        </div>

        <div className="list">
          {toDos.map((e) => (
            <Todo
              key={e._id}
              text={e.toDo}
              id={e._id}
              setUpdateUI={setUpdateUI}
              setShowPopup={setShowPopup}
              setPopupContent={setPopupContent}
            />
          ))}
        </div>
      </div>
      {showPopup && (
        <Popup
          id={toDos._id}
          setShowPopup={setShowPopup}
          popupContent={popupContent}
          setUpdateUI={setUpdateUI}
        />
      )}
    </>
  );
};

export default App;

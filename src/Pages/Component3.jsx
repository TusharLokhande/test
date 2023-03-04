import React, { useState } from "react";
import ToastNotification from "../Component/ToastNotification/ToastNotification";

const Component3 = () => {
  const [list, setList] = useState([]);
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");

  const showToast = () => {
    let toastProperties = { id: list.length + 1, message };
    setList([...list, toastProperties]);
    setMessage("");
  };

  return (
    <div>
      <div className="container">
        <input
          type="text"
          className="text_area"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="button-alert" onClick={() => showToast()}>
          Button
        </button>
        <div>
          <>
            <ToastNotification
              toastlist={list}
              setShow={setShow}
              show={show}
              timer={7000}
              setList={setList}
            />
          </>
        </div>
      </div>
    </div>
  );
};

export default Component3;

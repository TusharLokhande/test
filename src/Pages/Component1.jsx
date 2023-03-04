import React, { useEffect, useState } from "react";
import ToastNotification from "../Component/ToastNotification/ToastNotification";
import "./Component.css";

const Component1 = () => {
  const [list, setList] = useState([]);
  const [show, setShow] = useState(false);
  let toastProperties = null;

  const showToast = () => {
    toastProperties = { id: list.length, message: "Success" };
    setList([...list, toastProperties]);
  };

  console.log(list, show);

  return (
    <div className="container">
      <button className="button-alert" onClick={() => showToast()}>
        Button
      </button>
      <div>
        <>
          <ToastNotification
            timer={7000}
            toastlist={list}
            setShow={setShow}
            show={show}
            setList={setList}
          />
        </>
      </div>
    </div>
  );
};

export default Component1;

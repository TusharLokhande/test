import React, {
  useState,
  useCallback,
  useEffect,
  createContext,
  useContext,
} from "react";
import "./ToastNotification.css";

const ToastNotification = ({ toastlist, setList, timer }) => {
  const [otherList, setOtherList] = useState([]);

  const deleteToast = useCallback(
    (id) => {
      const toastListItem = toastlist.filter((e) => e.id !== id);
      setList(toastListItem);
    },
    [toastlist, setList]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (toastlist.length) {
        deleteToast(toastlist[0].id);
      }
    }, timer);

    return () => {
      clearInterval(interval);
    };
  }, [toastlist, deleteToast]);

  const handleMouseOver = (i) => {
    console.log(i);
    // clearInterval(interval);
  };

  const handleMouseOut = () => {
    // setInterval(() => {
    //   if (toastlist.length > 0) {
    //     setMessages((prevMessages) => toastlist.slice(1));
    //   }
    // }, 7000);
  };

  return (
    <div className="main">
      <div className="main_2">
        {toastlist.map((i, j) => (
          <div key={j} className="notification success">
            <span>{i.message}</span>
            <i
              className="fa-solid fa-times"
              onClick={() => deleteToast(i.id)}
            ></i>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToastNotification;

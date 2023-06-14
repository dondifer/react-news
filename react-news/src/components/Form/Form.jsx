import { useNavigate } from "react-router-dom";
import { useState } from "react";
let dataArray = [];
localStorage.setItem("reserveData", JSON.stringify(dataArray));

const Form = () => {
  let navigate = useNavigate();
  const [data, setData] = useState({
    title: "",
    subtitle: "",
    new: "",
    date: "",
    author: "",
  });
  const [btnDisabled, setBtnDisabled] = useState(true);

  const [message, setMessage] = useState("");

  const handleInputChange = (event) => {
    console.log(event.target.name);
    console.log(event.target.value);
    console.log(data.title.length);
    if (data.title.length + 1 < 3) {
      setMessage("Name must be at least 3 characters");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }

    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let newData = JSON.parse(localStorage.getItem("formData"));
    newData.push(data);
    localStorage.setItem("formData", JSON.stringify(newData));
    setTimeout(() => {
      navigate("/home");
    }, 300);
    console.log(`sending data… ${data.name} ${data.date} ${data.phoneNumber}`);
  };
  return (
    <div>
      <div className="profile">
        <h1 className="menu__title">Form</h1>
        <form className="react-forms" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="title"
            onChange={handleInputChange}
            name="title"
          />
          <span className="error-msg">{message}</span>
          <input
            type="text"
            placeholder="subtitle"
            onChange={handleInputChange}
            name="subtitle"
          />
          <textarea
            name="new"
            placeholder="escribe tu movida..."
            rows="10"
            cols="70"
          ></textarea>

          <input
            type="datetime-local"
            placeholder="date"
            onChange={handleInputChange}
            name="date"
          />
          <input
            type="text"
            placeholder="author"
            onChange={handleInputChange}
            name="author"
          />
          <button disabled={btnDisabled} type="submit">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Nav from "./components/Nav";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="mainContainer">
      <Nav />
      <div className="section-1">
        <div className="left-section">
          <h1>
            your feet
            <br /> deserve <br/>the best
          </h1>
          <p>
            your feet deserve the best and we are here to you help you with our
            shoes.<br/>your feet deserve the best and we are here to you help you
            with our shoes
          </p>
          <div className="btn">
            <button>
              shop now <i class="fa-solid fa-arrow-right"></i>
            </button>
            <button className="cat">category </button>
          </div>
          <div className="option">
            <p>also availabe on</p>
            <div>
              <span>
                {" "}
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png"
                  alt="img"
                />{" "}
              </span>
              <span>
                <img
                  src="https://seeklogo.com/images/F/flipkart-logo-3F33927DAA-seeklogo.com.png"
                  alt=""
                />
              </span>
            </div>
          </div>
        </div>
        <div className="right-section">
          <img
            src="https://i.pinimg.com/736x/71/b1/c1/71b1c10d2893310c26116e08e68534ae.jpg"
            alt="img"
          />
        </div>
      </div>
    </div>
  );
}

export default App;

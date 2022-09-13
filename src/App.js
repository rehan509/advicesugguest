import logo from "./logo.svg";
import "./App.css";
import icondice from "./icon-dice.svg";
import logdivider from "./pattern-divider-desktop.svg";
import { useState, useEffect } from "react";
function App() {
  const [text, setText] = useState([]);

  const fetchAdvice = async () => {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();

    console.log(data);

    setText(data.slip);
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <>
      <div className="bg-[#1F2632] md:p-[10rem] md:h-[50rem] text-center ">
        <div className="text-white text-center pt-[10%] pb-[50%] md:pb-[0%] bg-[rgb(50,58,73)] rounded-sm">
          <h1 className="text-dice-color text-[1.25rem] title my-4 pt-5">
            Advice $R{text.id}{" "}
          </h1>
          <h2 className=" text-[2rem] advice-text my-4">{text.advice}</h2>

          <div className="flex justify-center my-4">

            <img src={logdivider} alt="logo" />
          </div>

          <div className="flex justify-center  items-center ">

            <div className=" p-2 h-[15%]">
              <button     
                id="dice"
                className="text-white dicebg my-5 flex hover:bg-white hover:"
                onClick={() => fetchAdvice()}
              >
                <img src={icondice} alt="dice" />
              </button>
            </div>
          </div>
        </div>
        <div className="md:hidden">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </div>
    </>
  );
}

export default App;

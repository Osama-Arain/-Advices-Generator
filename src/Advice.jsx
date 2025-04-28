import { useState } from "react";
import "./App.css";
 
export const  Advice = () => {
const [Advices , setAdvices] = useState("");

const getadvice= async () => {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
     setAdvices(data.slip.advice);
    console.log("chal raha hoon =====>");
    console.log(data.slip.advice);

  };

  return (
    <div className="advice-container">

        <h2>{Advices}</h2>
    <button onClick={getadvice} className="btn">Get Advice</button> 
    

    </div>
  );

};

export default Advice;
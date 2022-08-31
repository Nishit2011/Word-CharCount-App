import "./styles.css";
import React, { useEffect, useState } from "react";

export default function App() {
  const [desc, setDesc] = useState("");
  const [totalC, setTotalC] = useState(0);
  const [totalWords, setTotalWords] = useState(0);

  const handleDesc = (e) => {
    e.preventDefault();
    setDesc(e.target.value);
  };

  useEffect(() => {
    console.log("here");
    let newDesc = desc;
    let totalChars = newDesc.match(/[\S]/g) || [];
    const totalW =
      newDesc.length > 0
        ? newDesc.split(" ").filter((el) => el !== "").length
        : 0;
    console.log(newDesc.split(" "));
    setTotalWords(totalW);

    console.log();

    setTotalC(totalChars.length);
  }, [desc]);

  return (
    <div className="App">
      <textarea
        id="desc"
        value={desc}
        name="desc"
        onChange={(e) => handleDesc(e)}
      ></textarea>
      <p>Total characters: {totalC}</p>
      <p>Total Words: {totalWords}</p>
    </div>
  );
}

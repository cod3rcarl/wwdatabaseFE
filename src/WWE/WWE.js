import React, { useState } from "react";
const url =
  process.env.REACT_APP_BACKEND_URL || `http://localhost:5000/wrestlers`;
const WWE = () => {
  const [wrestler, setWrestler] = useState("Wrestler will appear here");
  const [date, setDate] = useState("");

  async function getWrestlerInfo() {
    const res = await fetch(`${url}`);
    const data = await res.json();
    data.payload.forEach((item) => {
      const dateLost = item.datelost;
      const dateWon = item.datewon;

      let D_1 = dateLost.split("/");
      let D_2 = dateWon.split("/");
      let D_3 = date.split("/");

      let dlost = new Date(D_1[2], parseInt(D_1[1]) - 1, D_1[0]);
      let dwon = new Date(D_2[2], parseInt(D_2[1]) - 1, D_2[0]);
      let d3 = new Date(D_3[2], parseInt(D_3[1]) - 1, D_3[0]);

      if (d3 < dlost && d3 > dwon) {
        console.log("success");
        setWrestler(item.champion);
      }
    });
  }
  function handleClick() {
    console.log(date);
    getWrestlerInfo();
  }

  return (
    <section>
      <input
        onChange={(e) => setDate(e.target.value)}
        id="dateInput"
        type="text"
        className="date"
        placeholder="Enter Date DD/MM/YYYY"
      ></input>
      <p placeholder="Wrestler will appear here" className="superstar">
        {wrestler}
      </p>
      <button
        onClick={handleClick}
        type="button"
        id="submit-button"
        className="btn btn-secondary btn-lg btn-block"
      >
        Who was WWE Champion?
      </button>
    </section>
  );
};

export default WWE;

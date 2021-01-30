import React, { useState } from "react";
import pic from "../images/New_WWE_World_Heavyweight_Title.png";

const url =
  process.env.REACT_APP_BACKEND_URL || `https://wwdatabase.herokuapp.com`;
const WWE = () => {
  const [wrestler, setWrestler] = useState("Superstar appears here");
  const [date, setDate] = useState("");

  async function getWrestlerInfo() {
    const res = await fetch(`${url}`);
    const data = await res.json();

    data.payload.filter((item) => {
      const dateLost = item.datelost;
      const dateWon = item.datewon;
      const firstDateWon = "04/11/1963";

      let D_1 = dateLost.split("/");
      let D_2 = dateWon.split("/");
      let D_3 = date.split("/");
      let D_4 = firstDateWon.split("/");

      let dlost = new Date(D_1[2], parseInt(D_1[1]) - 1, D_1[0]);
      let dwon = new Date(D_2[2], parseInt(D_2[1]) - 1, D_2[0]);
      let inputDate = new Date(D_3[2], parseInt(D_3[1]) - 1, D_3[0]);
      let firstDate = new Date(D_4[2], parseInt(D_4[1]) - 1, D_4[0]);
      let today = new Date();

      let input = document.getElementById("dateInput");
      input.value = "";

      if (inputDate < firstDate || inputDate > today) {
        setWrestler("This date is not in the database");
        setDate(input);
      }
      // var d2 = new Date(d1);
      // var same = d1.getTime() === d2.getTime();
      // var notSame = d1.getTime() !== d2.getTime();

      if (inputDate < dlost && inputDate > dwon) {
        setWrestler(item.champion);
        setDate(input);
      }
      return wrestler;
    });
  }
  function handleClick() {
    const myRegex = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
    let input = document.getElementById("dateInput");
    input.value = "";

    if (!date.match(myRegex)) {
      setWrestler("Invalid input! Please input date format as DD/MM/YYYY");
      setDate(input);
    } else {
      console.log("success");
      getWrestlerInfo();
    }
  }
  return (
    <section>
      <div className="container">
        {" "}
        <img className="myPic" src={pic} alt="WWE" />
      </div>
      <div className="container">
        {" "}
        <input
          onChange={(e) => setDate(e.target.value)}
          id="dateInput"
          type="text"
          className="date"
          placeholder="Enter Date DD/MM/YYYY"
        ></input>
      </div>
      <div className="container">
        {" "}
        (
        <p placeholder="Superstar appears here" className="superstar">
          {wrestler}
        </p>
        )
      </div>
      <div className="container">
        {" "}
        <button
          onClick={handleClick}
          type="button"
          id="submit-button"
          className="btn btn-secondary btn-lg btn-block"
        >
          Who was Champion?
        </button>
      </div>
    </section>
  );
};

export default WWE;

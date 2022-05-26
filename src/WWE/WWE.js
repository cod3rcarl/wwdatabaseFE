import React, { useState } from "react";
import pic from "../images/New_WWE_World_Heavyweight_Title.png";
import samplePic from "../images/theRock.jpeg";

import { useQuery, useLazyQuery } from "@apollo/client";
import { GET_CHAMPION, GET_CHAMPIONS } from "../queries";

const WWE = () => {
  const [date, setDate] = useState(new Date());
  const [wrestler, setWrestler] = useState(null);
  const [info, setInfo] = useState(`Click to find out who was champion`);
  const [search, setSearch] = useState(``);
  const [getChampions, { data }] = useLazyQuery(GET_CHAMPIONS);

  const { data: currentChampData } = useQuery(GET_CHAMPION);
  console.log(currentChampData);
  const { refetch } = useQuery(GET_CHAMPION);

  const messages = {
    BEFORE_DATE: `Earliest date recorded is 11th April 1963`,
    AFTER_DATE: `I can't predict the future`,
    GENERAL_INFO: `Click to find out who was champion`,
    MORE_INFO: `CLick for more Information on ${search}`,
  };
  const handleDate = async (d) => {
    console.log(d);
    const now = new Date();
    const firstDate = new Date(`1963-04-11`);

    if (firstDate > d) {
      setWrestler(null);
      setInfo(messages.BEFORE_DATE);
      return;
    }

    if (d > now) {
      setWrestler(null);
      setInfo(messages.AFTER_DATE);
      return;
    }
    const { data } = await refetch();
    console.log(data);
    if (d < now) {
      setWrestler(data?.champion.champion.titleHolder);
      setSearch(data?.champion.champion.titleHolder);
      setInfo(messages.GENERAL_INFO);
    }
    return;
  };

  return (
    <section>
      <div className="container">
        {" "}
        <img className="myPic" src={pic} alt="WWE" />
      </div>
      <div className="container">
        Current Champion - {currentChampData?.champion.champion.titleHolder}
      </div>
      <div className="container">
        {" "}
        <input
          onChange={(e) => setDate(new Date(e.target.value))}
          id="dateInput"
          type="date"
          className="date"
          placeholder="Enter Date"
        ></input>
      </div>

      <div className="container">
        {" "}
        <button
          onClick={() => handleDate(date)}
          type="button"
          id="submit-button"
          className="btn btn-secondary btn-lg btn-block"
        >
          {info}
        </button>
      </div>
      <div className="container">
        {" "}
        {wrestler && <img className="myPic" src={samplePic} alt="rocky" />}
      </div>
      <div className="container">
        {" "}
        <input
          onChange={(e) => setSearch(e.target.value)}
          id="searchInput"
          type="text"
          className="search"
          placeholder="Enter Wrestler Name"
          value={search}
        />
      </div>
      <div className="container">
        {" "}
        <button
          onClick={() => getChampions({ variables: { titleHolder: [search] } })}
          type="button"
          id="submit-button"
          className="btn btn-secondary btn-lg btn-block"
        >
          {wrestler && messages.MORE_INFO}
        </button>
      </div>

      <div>
        <div className="container">{search}</div>

        <div className="container">
          {search &&
            data?.champions?.champions.map((champion, index) => {
              return (
                <div className="container" key={index}>
                  <div>{champion.dateWon}</div>
                  <div>{champion.dateLost}</div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default WWE;

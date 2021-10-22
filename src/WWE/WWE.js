import React, { useState } from 'react'
import pic from '../images/New_WWE_World_Heavyweight_Title.png'

import { useQuery, gql } from '@apollo/client'

const getChampions = gql`
  query getChampions(
    $currentChampion: Boolean
    $championFilter: String
    $dateFilter: Date
  ) {
    champions(
      currentChampion: $currentChampion
      championFilter: $championFilter
      dateFilter: $dateFilter
    ) {
      titleHolder
      show
      dateWon
      dateLost
      currentChampion
    }
  }
`

const WWE = () => {
  const [wrestler, setWrestler] = useState('Superstar appears here')
  const [date, setDate] = useState('')
  const [currentChampion, setCurrentChampion] = useState(false)
  const [search, setSearch] = useState('')

  const { data } = useQuery(getChampions, {
    variables: {
      dateFilter: date ?? Date.now(),
      championFilter: search ?? undefined,
      currentChampion: currentChampion ?? undefined,
    },
  })
  console.log(data)
  function handleClick() {
    setWrestler(data?.champions[0]?.titleHolder)
    console.log(wrestler)
  }
  return (
    <section>
      <div className="container">
        {' '}
        <img className="myPic" src={pic} alt="WWE" />
      </div>
      <div className="container">
        {' '}
        <input
          onChange={(e) => setDate(e.target.value)}
          id="dateInput"
          type="date"
          className="date"
          placeholder="Enter Date"
        ></input>
      </div>
      {/* <div className="container">
        {' '}
        (<p placeholder="Superstar appears here" className="superstar"></p>)
      </div> */}
      <div className="container">
        {' '}
        <button
          onClick={handleClick}
          type="button"
          id="submit-button"
          className="btn btn-secondary btn-lg btn-block"
        >
          {wrestler}
        </button>
      </div>
    </section>
  )
}

export default WWE

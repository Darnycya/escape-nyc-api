import React, { useState, useEffect } from 'react'
import './Players.css'
import Player from '../../components/Player/Player'
import Search from '../../components/Search/Search'
import { AZ, ZA, lowestFirst, highestFirst } from "../../utils/sort"
import Sort from '../../components/Sort/Sort'
import { getPlayers } from '../../services/players'

const Players = (props) => {
  const [allPlayers, setAllPlayers] = useState([])
  const [queriedPlayers, setQueriedPlayers] = useState([])
  const [sortType, setSortType] = useState([])

  useEffect(() => {
    const fetchPlayers = async () => {
      const players = await getPlayers()
      setAllPlayers(players)
      setQueriedPlayers(players)
    }
    fetchPlayers()
  }, [])

  const handleSort = type => {
    setSortType(type)
    switch (type) {
      case "name-ascending":
        setQueriedPlayers(AZ(queriedPlayers))
        break
      case "name-descending":
        setQueriedPlayers(ZA(queriedPlayers))
        break
      case "price-ascending":
        setQueriedPlayers(lowestFirst(queriedPlayers))
        break
      case "price-descending":
        setQueriedPlayers(highestFirst(queriedPlayers))
        break
      default:
        break
    }
  }

  const handleSearch = event => {
    const newQueriedPlayers = allPlayers.filter(player => player.name.toLowerCase().includes(event.target.value.toLowerCase()))
    setQueriedPlayers(newQueriedPlayers, () => handleSort(sortType))
  }

  const handleSubmit = event => event.preventDefault()

  const playersJSX = queriedPlayers.map((player, index) =>
    <Player _id={player._id} name={player.name} image={player.image} position={player.position} jerseyNumber={player.jerseyNumber} key={index} />
  )

  return (
    <>
      <Search onSubmit={handleSubmit} onChange={handleSearch} />
      <Sort onSubmit={handleSubmit} onChange={handleSort} />
      <div className="players">
        {playersJSX}
      </div>
    </>
  )
}


export default Players
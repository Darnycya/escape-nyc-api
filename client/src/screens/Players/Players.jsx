import React, { useState, useEffect } from 'react'
import Player from '../../components/PlayerList/PlayerList'
import Search from '../../components/Search/Search'
import { getPlayers } from '../../services/players'
import './Players.css'

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



  const handleSearch = event => {
    const newQueriedPlayers = allPlayers.filter(player => player.name.toLowerCase().includes(event.target.value.toLowerCase()))
    setQueriedPlayers(newQueriedPlayers)
  }

  const handleSubmit = event => event.preventDefault()

  const playersJSX = queriedPlayers.map((player, index) =>
    <Player _id={player._id} name={player.name} image={player.image} position={player.position} jerseyNumber={player.jerseyNumber} key={index} />
  )

  return (
    <>
      <Search onSubmit={handleSubmit} onChange={handleSearch} />
      
      <div className="players">
        {playersJSX}
      </div>
    </>
  )
}


export default Players
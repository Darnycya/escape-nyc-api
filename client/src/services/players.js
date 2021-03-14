import axios from 'axios'

const apiUrl = `https://dallas-cowboys-roster.herokuapp.com`

export const getPlayers = async () => {
  try {
    const response = await axios(`${apiUrl}/players`)
    const players = response.data
    return players
  } catch (error) {
    throw error
  }
}

export const getPlayer = async id => {
  try {
    const response = await axios(`${apiUrl}/players/${id}`)
    const player = response.data
    return player
  } catch (error) {
    throw error
  }
}

export const createPlayer = async player => {
  try {
    const response = await axios.post(`${apiUrl}/players`, player)
    return response.data
  } catch (error) {
    throw error
  }
}

export const updatePlayer = async (id, player) => {
  try {
    const response = await axios.put(`${apiUrl}/players/${id}`, player)
    return response.data
  } catch (error) {
    throw error
  }
}

export const deletePlayer = async id => {
  try {
    const response = await axios.delete(`${apiUrl}/players/${id}`)
    return response.data
  } catch (error) {
    throw error
  }
}

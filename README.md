# Dallas Cowboys Roster Editor

<p align="center">
  <img src="https://media.giphy.com/media/0hmpK3WiIsTXJ9jo7R/giphy.gif"></img>
  </p>
  
The Dallas Cowboys Roster Editor is a full CRUD React app to update the Dallas Cowboy Roster <a href="https://dallas-api.herokuapp.com/">API</a> I created for the <a href="https://github.com/Darnycya/Dallas-Cowboys-Calculator">Dallas Cowboys Calculator</a> that I also created. 


## Link To Editer

<a href="https://dallas-cowboys-roster.netlify.app/">Click Here</a>

## Sample of API 

```
{
_id: "604ac20fb4f40e9ebaff5b88",
name: "Dak Prescott",
image: "https://res.cloudinary.com/darnycya/image/upload/v1615357339/Dak_Prescott_4_c5tdat.png",
position: "Quarterback",
jerseyNumber: 4,
__v: 0,
createdAt: "2021-03-12T01:21:19.372Z",
updatedAt: "2021-03-12T01:21:19.372Z"
}
```

## Sample of the CRUD Frunctionality

```
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
```
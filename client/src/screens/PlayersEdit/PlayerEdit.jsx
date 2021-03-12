import React, { useState, useEffect } from 'react'
import './PlayerEdit.css'
import { useParams, Redirect } from 'react-router-dom'
import { getPlayer, updatePlayer } from '../../services/players'

const PlayerEdit = (props) => {

    const [player, setPlayer] = useState({
            name: '',
            image: '',
            position: '',
            jerseyNumber: ''
    })

    const [isUpdated, setUpdated] = useState(false)
    let { id } = useParams()

    useEffect(() => {
        const fetchPlayer = async () => {
            const player = await getPlayer(id)
            setPlayer(player)
        }
        fetchPlayer()
    }, [id])


    const handleChange = (event) => {
        const { name, value } = event.target
        setPlayer({
                ...player,
                [name]: value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        let { id } = props.match.params
        const updated = await updatePlayer(id, player)
        setUpdated(updated)
    }

    if (isUpdated) {
        return <Redirect to={`/players/${props.match.params.id}`} />
    }

    return (
        <Layout user={props.user}>
            <div className="player-edit">
                <div className="image-container">
                    <img className="edit-player-image" src={player.image} alt={player.name} />
                    <form onSubmit={handleSubmit}>
                        <input
                            className="edit-input-image-link"
                            placeholder='Image URL'
                            value={player.image}
                            name='imgURL'
                            required
                            onChange={handleChange}
                        />
                    </form>
                </div>
                <form className="edit-form" onSubmit={handleSubmit}>
                    <input
                        className="input-name"
                        placeholder='Name'
                        value={player.name}
                        name='name'
                        required
                        autoFocus
                        onChange={handleChange}
                    />
                    <input
                        className="input-position"
                        placeholder='Position'
                        value={player.position}
                        name='position'
                        required
                        onChange={handleChange}
                    />
                    <input
                        className="input-jerseyNumber"
                        placeholder='Jersey Number'
                        value={player.jerseyNumber}
                        name='jerseyNumber'
                        required
                        onChange={handleChange}
                    />
                    <button type='submit' className="save-button">Save</button>
                </form>
            </div>
        </Layout>
    )
}

export default PlayerEdit

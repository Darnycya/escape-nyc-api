import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { createPlayer } from '../../services/players'
import Logo from '../../components/Logo/Logo'
import "./PlayerCreate.css"

const PlayerCreate = (props) => {

    const [player, setPlayer] = useState({
            name: '',
            image: '',
            position: '',
            jerseyNumber: ''
        })

    const [isCreated, setCreated] = useState(false)

    const handleChange = (event) => {
        const { name, value } = event.target
        setPlayer({
                ...player,
                [name]: value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const created = await createPlayer(player)
        setCreated({ created })
    }

    if (isCreated) {
        return <Redirect to={`/players`} />
    }
    return (
       <>
        <Logo />
            <form className="create-form" onSubmit={handleSubmit}>
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
                    className="input-image-link"
                    placeholder='Image URL'
                    value={player.image}
                    name='image'
                    required
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
                <button type='submit' className="submit-button">Submit</button>
            </form>
        </>
    )
}

export default PlayerCreate

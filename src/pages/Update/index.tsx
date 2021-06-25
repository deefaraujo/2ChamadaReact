import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import { useHistory, useParams } from 'react-router-dom'
import { Container } from './styles'


const Update: React.FC = () => {
  const [like, setLike] = useState('')
  const [dislike, setDislike] = useState('')

  const { id } = useParams<{ id:string }>()

  //Chama a função useHistory()
  const history = useHistory()

  useEffect(() => {
    buscarEventoID(id)
  }, [])

  async function buscarEventoID(id: string) {
    const buscarEventoID = await api.get(`/events/${id}`)
    setLike(buscarEventoID.data.like)
    setDislike(buscarEventoID.data.dislike)
  }

  async function alterarLike(event: any) {
    event.preventDefault()
    await api.put(`/events/${id}`, {
      like
    })

    history.push('/')
  }

  async function alterarDislike(event: any) {
    event.preventDefault()
    await api.put(`/events/${id}`, {
      dislike
    })

    history.push('/')
  }

  return (
    <Container>
      <form onSubmit={alterarLike}>
        <input
          type='text'
          name='like'
          value={like}
          onChange={event => setLike(event.target.value)}
          placeholder='Like: ' />
        <button type='submit'>Like</button>
        <button type='button' onClick={() => {
          history.push('/')
        }}>Voltar</button>
      </form>
            <form onSubmit={alterarDislike}>
        <input
          type='text'
          name='dislike'
          value={dislike}
          onChange={event => setDislike(event.target.value)}
          placeholder='Dislike: ' />
        <button type='submit'>Dislike</button>
        <button type='button' onClick={() => {
          history.push('/')
        }}>Voltar</button>
      </form>
    </Container>
  )
}

export default Update

import React, { useEffect, useState }from 'react'
import api from '../../services/api'
import { useHistory } from 'react-router-dom'
import { Container, TodosEventos } from './styles'

//Interface com as informações do cadastro
interface CadastroEvento {
  id: string;
  nomeevento: string;
  local: string;
  diasemana: string;
  horario: string;
  like: number;
  dislike: number;
}

//Pagina Principal
const Dashboard: React.FC = () => {
  const history = useHistory()

  const [eventos, setEventos] = useState<CadastroEvento[]>([])
  const [nomeevento, setNome] = useState('')
  const [local, setLocal] = useState('')
  const [diasemana, setDia] = useState('')
  const [horario, setHorario] = useState('')
  // const history = useHistory()

  useEffect(() => {
    buscarEventos()
  }, [])


  async function apagarEventos(id: string) {
    await api.delete(`/events/${id}`)
    buscarEventos()
  }


  async function buscarEventos() {
    const todosEventos = await api.get('/events')
    setEventos(todosEventos.data)
  }


  async function adicionarEventos(event: any) {
    event.preventDefault()

    if (!nomeevento.trim() || !local.trim() || !diasemana.trim() || !horario.trim()) {
      return
    }


    //Chama o metodo post no node pra gravar no banco de dados
    const novoEvento = await api.post('/events', {
      nomeevento,
      local,
      diasemana,
      horario
    })

    const { data } = novoEvento

    setEventos([...eventos, data])

    history.push('/')
  }


  return (
    //Container -> Estilização do formulario
    <Container>

    <form onSubmit={adicionarEventos}>

      <input
      type='text'
      name='nomeevento'
      onChange={event => setNome(event.target.value)}
      placeholder='Nome do Evento:' />

      <input
      type='text'
      name='local'
      onChange={event => setLocal(event.target.value)}
      placeholder='Local:' />


      <input
      type='text'
      name='diasemana'
      onChange={event => setDia(event.target.value)}
          placeholder='Dia da Semana:' />


      <input
      type='text'
      name='horario'
      onChange={event => setHorario(event.target.value)}
      placeholder='Horário:' />


      <button type="submit">Salvar</button>


    </form>

    <TodosEventos>
        {eventos.map(event => {
            return (
              <div key={event.id}>
                <div>
                  <span>{`Nome do Evento ${event.nomeevento}`}</span>
                  <span>{`Local ${event.local}`}</span>
                  <span>{`Dia da Semana ${event.diasemana}`}</span>
                  <span>{`Horário ${event.horario}`}</span>
                  <span>{`Likes ${event.like}`}</span>
                  <span>{`Dislikes ${event.dislike}`}</span>
                </div>
                <div>
                  <button onClick={() => {
                  }}>Likes</button>
                  <button onClick={() => {
                  }}>Dislike</button>
                  <button onClick={() => {
                    apagarEventos(event.id)
                  }}>Deletar</button>
                </div>
              </div>
            )
        })}
      </TodosEventos>
    </Container>
  )
}

export default Dashboard




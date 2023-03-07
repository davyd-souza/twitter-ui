// DEPENDENCY
import { FormEvent, useState, KeyboardEvent } from 'react'

// COMPONENT
import { Header } from '../../components/Header'
import { Separator } from '../../components/Separator'
import { TextAreaAutoSize } from '../../components/TextAreaAutoSize'
import { Tweet } from '../../components/Tweet'

// STYLE
import './Timeline.css'

export function Timeline() {
  const [tweets, setTweets] = useState([
    'Queria jogar um Minecraft com mods',
    'Meu Pokémon favorito é o Aron',
    'Estou testando o Twitter pela primeira vez agora',
  ])
  const [text, setText] = useState('')

  const handleTextChange = (newText: string) => {
    setText(newText)
  }

  const handleNewTweet = (evt: FormEvent) => {
    evt.preventDefault()

    if (text !== '') {
      setTweets((prevState) => [text, ...prevState])
      setText('')
    } else {
      alert('Você não pode criar um tweet vazio')
    }
  }

  const handleHotkeySubmit = (evt: KeyboardEvent) => {
    if (evt.key === 'Enter' && (evt.ctrlKey || evt.metaKey)) {
      if (text !== '') {
        setTweets((prevState) => [text, ...prevState])
        setText('')
      } else {
        alert('Você não pode criar um tweet vazio')
      }
    }
  }

  return (
    <main className='timeline'>
      <Header title='Home' />

      <form className='new-tweet-form' onSubmit={handleNewTweet}>
        <div className='new-tweet-form__group'>
          <img
            className='user-avatar'
            src='https://github.com/davyd-souza.png'
            alt='Davyd Souza'
          />
          <TextAreaAutoSize
            className='new-tweet-form__textarea'
            name='tweet'
            id='tweet'
            placeholder='What&lsquo;s happening?'
            autoFocus
            value={text}
            onTextChange={handleTextChange}
            onKeyUp={handleHotkeySubmit}
          />
        </div>

        <button className='button' type='submit'>
          Tweet
        </button>
      </form>

      <Separator />

      {tweets.map((tweet) => (
        <Tweet key={crypto.randomUUID()} content={tweet} />
      ))}
    </main>
  )
}

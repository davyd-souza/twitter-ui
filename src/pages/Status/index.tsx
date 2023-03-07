// DEPENDENCY
import { FormEvent, KeyboardEvent, useState } from 'react'

// COMPONENT
import { Header } from '../../components/Header'
import { Separator } from '../../components/Separator'
import { Tweet } from '../../components/Tweet'
import { TextAreaAutoSize } from '../../components/TextAreaAutoSize'

// STYLE
import './Status.css'

export function Status() {
  const [answer, setAnswer] = useState([
    'Achei interessante!',
    'Não concordo, nem discordo, muito pelo contrário...',
    'Eu também.',
  ])
  const [text, setText] = useState('')

  const handleTextChange = (newText: string) => {
    setText(newText)
  }

  const handleNewAnswer = (evt: FormEvent) => {
    evt.preventDefault()

    if (text !== '') {
      setAnswer((prevState) => [text, ...prevState])
      setText('')
    } else {
      alert('Você não pode criar um tweet vazio')
    }
  }

  const handleHotkeySubmit = (evt: KeyboardEvent) => {
    if (evt.key === 'Enter' && (evt.ctrlKey || evt.metaKey)) {
      if (text !== '') {
        setAnswer((prevState) => [text, ...prevState])
        setText('')
      } else {
        alert('Você não pode criar um tweet vazio')
      }
    }
  }

  return (
    <main className='status'>
      <Header title='Tweet' />

      <Tweet content='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint quis porro excepturi consectetur quidem perferendis repellendus quas omnis a pariatur iste id officia deleniti eum, placeat laboriosam nemo voluptas animi!' />

      <Separator />

      <form className='answer-tweet-form' onSubmit={handleNewAnswer}>
        <div className='answer-tweet-form__group'>
          <img
            className='user-avatar'
            src='https://github.com/davyd-souza.png'
            alt='Davyd Souza'
          />
          <TextAreaAutoSize
            className='answer-tweet-form__textarea'
            name='tweet'
            id='tweet'
            placeholder='Tweet your answer'
            autoFocus
            value={text}
            onTextChange={handleTextChange}
            onKeyUp={handleHotkeySubmit}
          />
        </div>

        <button className='button' type='submit'>
          Answer
        </button>
      </form>

      {answer.map((tweet) => (
        <Tweet key={tweet} content={tweet} />
      ))}
    </main>
  )
}

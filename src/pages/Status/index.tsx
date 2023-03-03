// DEPENDENCY
import { useRef } from 'react'

// COMPONENT
import { Header } from '../../components/Header'
import { Separator } from '../../components/Separator'
import { Tweet } from '../../components/Tweet'
import { TextAreaAutoSize } from '../../components/TextAreaAutoSize'

// STYLE
import './Status.css'

// VARIABLE
const PLACEHOLDER_ANSWER = [
  'Achei interessante!',
  'Não concordo, nem discordo, muito pelo contrário...',
  'Eu também.',
]

export function Status() {
  const textAreaRef = useRef<HTMLTextAreaElement>(null)

  return (
    <main className='status'>
      <Header title='Tweet' />

      <Tweet content='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint quis porro excepturi consectetur quidem perferendis repellendus quas omnis a pariatur iste id officia deleniti eum, placeat laboriosam nemo voluptas animi!' />

      <Separator />

      <form className='answer-tweet-form'>
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
            ref={textAreaRef}
          />
        </div>

        <button className='button' type='submit'>
          Answer
        </button>
      </form>

      {PLACEHOLDER_ANSWER.map((tweet) => (
        <Tweet key={tweet} content={tweet} />
      ))}
    </main>
  )
}

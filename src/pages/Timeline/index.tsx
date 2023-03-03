// DEPENDENCY
import { useRef } from 'react'

// COMPONENT
import { Header } from '../../components/Header'
import { Separator } from '../../components/Separator'
import { TextAreaAutoSize } from '../../components/TextAreaAutoSize'
import { Tweet } from '../../components/Tweet'

// STYLE
import './Timeline.css'

// VARIABLE
const PLACEHOLDER_TWEETS = [
  'Estou testando o Twitter pela primeira vez agora',
  'Meu Pokémon favorito é o Aron',
  'Queria jogar um Minecraft com mods',
]

export function Timeline() {
  const textAreaRef = useRef<HTMLTextAreaElement>(null)

  return (
    <main className='timeline'>
      <Header title='Home' />

      <form className='new-tweet-form'>
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
            ref={textAreaRef}
          />
        </div>

        <button className='button' type='submit'>
          Tweet
        </button>
      </form>

      <Separator />

      {PLACEHOLDER_TWEETS.map((tweet) => (
        <Tweet key={tweet} content={tweet} />
      ))}
    </main>
  )
}

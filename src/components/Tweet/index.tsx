// DEPENDENCY
import { Link } from 'react-router-dom'

// STYLE
import './Tweet.css'
import { ArrowsClockwise, ChatCircle, Heart } from 'phosphor-react'

// TYPE
interface TweetProps {
  content: string
}

export function Tweet({ content }: TweetProps) {
  return (
    <Link to='/status' className='tweet' draggable={false}>
      <img
        src='https://github.com/diego3g.png'
        alt='Diego Fernandes'
        className='user-avatar'
      />

      <section className='tweet__content'>
        <header className='tweet__header'>
          <h3 className='tweet__name'>Diego Fernandes</h3>
          <p className='tweet__user'>@diego3g</p>
        </header>

        <p className='tweet__text'> {content} </p>

        <footer className='tweet__footer'>
          <button className='tweet__btn'>
            <Heart />
            20
          </button>
          <button className='tweet__btn'>
            <ArrowsClockwise />
            15
          </button>
          <button className='tweet__btn'>
            <ChatCircle />
            10
          </button>
        </footer>
      </section>
    </Link>
  )
}

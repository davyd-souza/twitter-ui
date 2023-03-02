// STYLE
import './Tweet.css'
import { ArrowsClockwise, ChatCircle, Heart } from 'phosphor-react'

export function Tweet() {
  return (
    <a href='#' className='tweet' draggable={false}>
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

        <p className='tweet__text'>
          Acabei de migrar um projeto React GIGANTE de create-react-app para
          Vite e os resultados foram:
          <br />
          <br />
          ✅ npm start: De 32s para 400ms (sim, demorava 30s)
          <br />
          ✅ npm build: De 120s para 22s
          <br />
          <br />
          Além disso, troquei do Yarn para o PNPM e o install das deps mudou de
          24s para 8s 🔥
        </p>

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
    </a>
  )
}

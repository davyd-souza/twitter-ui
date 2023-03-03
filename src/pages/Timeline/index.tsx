// COMPONENT
import { Header } from '../../components/Header'
import { Separator } from '../../components/Separator'
import { Tweet } from '../../components/Tweet'

// STYLE
import './Timeline.css'

export function Timeline() {
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
          <textarea
            className='new-tweet-form__textarea'
            name='tweet'
            id='tweet'
            placeholder='What&lsquo;s happening?'
            // rows={1}
          />
        </div>

        <button className='button' type='submit'>
          Tweet
        </button>
      </form>

      <Separator />

      <Tweet />
      <Tweet />
      <Tweet />
    </main>
  )
}

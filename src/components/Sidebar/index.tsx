// DEPENDENCY
import { NavLink } from 'react-router-dom'

// STYLE
import './Sidebar.css'
import {
  DotsThree,
  Bell,
  BookmarkSimple,
  Envelope,
  FileText,
  Hash,
  House,
  User,
} from 'phosphor-react'

// ASSET
import twitterLogo from '../../assets/twitter-logo.svg'

export function Sidebar(): JSX.Element {
  return (
    <aside className='sidebar'>
      <img className='logo' src={twitterLogo} alt='Logo' />

      <nav className='navigation'>
        <NavLink to='/' className='navigation__link'>
          <House weight='fill' />
          Home
        </NavLink>
        <a href='#' className='navigation__link'>
          <Hash />
          Explore
        </a>
        <a href='#' className='navigation__link'>
          <Bell />
          Notifications
        </a>
        <a href='#' className='navigation__link'>
          <Envelope />
          Messages
        </a>
        <a href='#' className='navigation__link'>
          <BookmarkSimple />
          Bookmarks
        </a>
        <a href='#' className='navigation__link'>
          <FileText />
          Lists
        </a>
        <a href='#' className='navigation__link'>
          <User />
          Profile
        </a>
        <a href='#' className='navigation__link'>
          <DotsThree />
          More
        </a>
      </nav>

      <button className='button' type='button'>
        Tweet
      </button>
    </aside>
  )
}

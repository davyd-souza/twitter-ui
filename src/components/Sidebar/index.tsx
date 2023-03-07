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
  Pencil,
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
          <span>Home</span>
        </NavLink>
        <a href='#' className='navigation__link'>
          <Hash />
          <span>Explore</span>
        </a>
        <a href='#' className='navigation__link'>
          <Bell />
          <span>Notifications</span>
        </a>
        <a href='#' className='navigation__link'>
          <Envelope />
          <span>Messages</span>
        </a>
        <a href='#' className='navigation__link'>
          <BookmarkSimple />
          <span>Bookmarks</span>
        </a>
        <a href='#' className='navigation__link'>
          <FileText />
          <span>Lists</span>
        </a>
        <a href='#' className='navigation__link'>
          <User />
          <span>Profile</span>
        </a>
        <a href='#' className='navigation__link'>
          <DotsThree />
          <span>More</span>
        </a>
      </nav>

      <button className='button' type='button'>
        <Pencil />
        <span>Tweet</span>
      </button>
    </aside>
  )
}

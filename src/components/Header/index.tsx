// STYLE
import './Header.css'
import { Sparkle } from 'phosphor-react'

// TYPE
interface HeaderProps {
  title: string
}

export function Header({ title }: HeaderProps): JSX.Element {
  return (
    <header className='timeline__header'>
      <h2 className='timeline__title'>{title}</h2>
      <Sparkle />
    </header>
  )
}

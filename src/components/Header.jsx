import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='bg-slate-200'>
      <ul className='flex justify-between py-4 items-center w-[90%] mx-auto'>
        <li>
          <Link to={'/'}>Logo</Link>
        </li>
        <ul className='flex justify-between py-4 gap-4'>
          <li>
            <Link to={'/signup'}>Sign Up</Link>
          </li>
          <li>
            <Link to={'/login'}>Log in</Link>
          </li>
        </ul>
      </ul>
    </header>
  )
}

export default Header

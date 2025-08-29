import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="hidden md:block">
      <ul className="flex gap-10 font-main">
        <li>
            <NavLink to={'/'}>
                {({ isActive }) => (
                    <p className={isActive ? 'font-bold' : ''}>Home</p>
                )}
            </NavLink>
        </li>
        <li>
            <NavLink to={'/classify'}>
                {({ isActive }) => (
                    <p className={isActive ? 'font-bold' : ''}>Classify</p>
                )}
            </NavLink>
        </li>
        <li>
            <NavLink to={'/model'}>
                {({ isActive }) => (
                    <p className={isActive ? 'font-bold' : ''}>Model</p>
                )}
            </NavLink>
        </li>
        <li>
            <NavLink to={'/about'}>
                {({ isActive }) => (
                    <p className={isActive ? 'font-bold' : ''}>About</p>
                )}
            </NavLink>
        </li>
      </ul>
    </nav>
  )
}

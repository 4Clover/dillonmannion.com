import { Link, NavLink } from 'react-router'

function Header() {
  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 text-sm font-medium transition-colors ${
      isActive
        ? 'text-blue-600'
        : 'text-slate-600 hover:text-slate-900'
    }`

  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="container">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="text-xl font-bold text-slate-900">
            Dillon Mannion
          </Link>
          <nav className="flex items-center gap-1">
            <NavLink to="/" className={linkClasses} end>
              Home
            </NavLink>
            <NavLink to="/projects" className={linkClasses}>
              Projects
            </NavLink>
            <NavLink to="/about" className={linkClasses}>
              About
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header

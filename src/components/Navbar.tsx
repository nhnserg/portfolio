import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Sun, Moon, Code } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

const NavLink: React.FC<{
	to: string
	label: string
	onClick?: () => void
}> = ({ to, label, onClick }) => {
	const location = useLocation()
	const isActive =
		location.pathname === to || (to !== '/' && location.pathname.startsWith(to))

	return (
		<Link
			to={to}
			onClick={onClick}
			className={`px-4 py-2 transition-colors duration-300 rounded-md ${
				isActive
					? 'text-primary-600 dark:text-primary-400 font-medium'
					: 'text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
			}`}
		>
			{label}
		</Link>
	)
}

const Navbar: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const [isScrolled, setIsScrolled] = useState(false)
	const { isDarkMode, toggleTheme } = useTheme()

	const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
	const closeMenu = () => setIsMenuOpen(false)

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10)
		}

		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<header
			className={`sticky top-0 z-50 transition-all duration-300 ${
				isScrolled
					? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm'
					: 'bg-transparent'
			}`}
		>
			<nav className='container mx-auto px-4 py-4 flex justify-between items-center'>
				<Link
					to='/'
					className='flex items-center space-x-2 text-xl font-bold'
					onClick={closeMenu}
				>
					<Code className='text-primary-600 dark:text-primary-400' />
					<span>Serhii Maksymenko</span>
				</Link>

				{/* Desktop Menu */}
				<div className='hidden md:flex items-center space-x-2'>
					<NavLink to='/' label='Home' />
					<NavLink to='/projects' label='Projects' />
					{/* <NavLink to='/resume' label='Resume' /> */}
					<NavLink to='/contact' label='Contact' />
					<button
						onClick={toggleTheme}
						className='ml-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors'
						aria-label={
							isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'
						}
					>
						{isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
					</button>
				</div>

				{/* Mobile Menu Toggle */}
				<div className='flex items-center md:hidden'>
					<button
						onClick={toggleTheme}
						className='mr-2 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors'
						aria-label={
							isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'
						}
					>
						{isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
					</button>
					<button
						onClick={toggleMenu}
						className='p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors'
						aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
					>
						{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>
			</nav>

			{/* Mobile Menu */}
			{isMenuOpen && (
				<div className='md:hidden bg-white dark:bg-gray-900 shadow-lg'>
					<div className='flex flex-col p-4 space-y-2'>
						<NavLink to='/' label='Home' onClick={closeMenu} />
						<NavLink to='/projects' label='Projects' onClick={closeMenu} />
						<NavLink to='/resume' label='Resume' onClick={closeMenu} />
						<NavLink to='/contact' label='Contact' onClick={closeMenu} />
					</div>
				</div>
			)}
		</header>
	)
}

export default Navbar

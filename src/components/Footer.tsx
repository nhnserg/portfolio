import { Github, Linkedin, Twitter, Mail } from 'lucide-react'

const Footer = () => {
	const currentYear = new Date().getFullYear()

	return (
		<footer className='bg-gray-100 dark:bg-gray-800 py-8 mt-12'>
			<div className='container mx-auto px-4'>
				<div className='flex flex-col md:flex-row justify-between items-center'>
					<div className='mb-4 md:mb-0'>
						<p className='text-sm text-gray-600 dark:text-gray-400'>
							© {currentYear} Serhii Maksymenko. All rights reserved.
						</p>
					</div>

					<div className='flex space-x-4'>
						<a
							href='https://github.com/nhnserg'
							target='_blank'
							rel='noopener noreferrer'
							className='text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors'
							aria-label='GitHub'
						>
							<Github size={20} />
						</a>
						<a
							href='https://www.linkedin.com/in/maksimenko-serhii/'
							target='_blank'
							rel='noopener noreferrer'
							className='text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors'
							aria-label='LinkedIn'
						>
							<Linkedin size={20} />
						</a>
						<a
							href='https://twitter.com'
							target='_blank'
							rel='noopener noreferrer'
							className='text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors'
							aria-label='Twitter'
						>
							<Twitter size={20} />
						</a>
						<a
							href='mailto:nhnserg@gmail.com'
							className='text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors'
							aria-label='Email'
						>
							<Mail size={20} />
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer

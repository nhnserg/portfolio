import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home, ArrowLeft } from 'lucide-react'

const NotFoundPage = () => {
	return (
		<div className='min-h-[70vh] flex items-center justify-center'>
			<div className='text-center px-4'>
				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
				>
					<h1 className='text-9xl font-bold text-primary-600 dark:text-primary-400'>
						404
					</h1>
					<h2 className='text-3xl font-bold text-gray-900 dark:text-white mt-4 mb-6'>
						Page Not Found
					</h2>
					<p className='text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto'>
						The page you are looking for might have been removed, had its name
						changed, or is temporarily unavailable.
					</p>

					<div className='flex flex-col sm:flex-row justify-center gap-4'>
						<Link
							to='/'
							className='inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary-600 text-white font-medium hover:bg-primary-700 transition-colors'
						>
							<Home size={18} className='mr-2' />
							Go Home
						</Link>
						<button
							onClick={() => window.history.back()}
							className='inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-gray-800 dark:border-white text-gray-800 dark:text-white font-medium hover:bg-gray-800 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-colors'
						>
							<ArrowLeft size={18} className='mr-2' />
							Go Back
						</button>
					</div>
				</motion.div>
			</div>
		</div>
	)
}

export default NotFoundPage

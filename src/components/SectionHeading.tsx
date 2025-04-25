import { motion } from 'framer-motion'

interface SectionHeadingProps {
	title: string
	subtitle?: string
	align?: 'left' | 'center' | 'right'
	showLine?: boolean
}

const SectionHeading = ({
	title,
	subtitle,
	align = 'left',
	showLine = true,
}: SectionHeadingProps) => {
	const alignmentClasses = {
		left: 'text-left',
		center: 'text-center mx-auto',
		right: 'text-right ml-auto',
	}

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className={`mb-10 max-w-lg ${alignmentClasses[align]}`}
		>
			<h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-2'>
				{title}
			</h2>

			{showLine && (
				<div
					className={`w-20 h-1 bg-primary-600 dark:bg-primary-400 rounded mb-4 ${
						align === 'center' ? 'mx-auto' : align === 'right' ? 'ml-auto' : ''
					}`}
				/>
			)}

			{subtitle && (
				<p className='text-lg text-gray-600 dark:text-gray-300'>{subtitle}</p>
			)}
		</motion.div>
	)
}

export default SectionHeading

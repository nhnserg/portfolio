import React from 'react'
import { motion } from 'framer-motion'

interface SkillBadgeProps {
	name: string
	level: number // 1-5
	icon?: React.ReactNode
	index: number
}

const SkillBadge = ({ name, level, icon, index }: SkillBadgeProps) => {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.9 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.3, delay: index * 0.05 }}
			className='flex items-center gap-3 px-4 py-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow'
		>
			{icon && (
				<div className='text-primary-600 dark:text-primary-400'>{icon}</div>
			)}
			<div className='flex-1'>
				<p className='font-medium text-gray-900 dark:text-white'>{name}</p>
				<div className='flex gap-1 mt-1'>
					{[...Array(5)].map((_, i) => (
						<div
							key={i}
							className={`h-1.5 w-5 rounded-full ${
								i < level
									? 'bg-primary-600 dark:bg-primary-400'
									: 'bg-gray-200 dark:bg-gray-700'
							}`}
						/>
					))}
				</div>
			</div>
		</motion.div>
	)
}

export default SkillBadge

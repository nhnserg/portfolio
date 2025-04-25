import { motion } from 'framer-motion'
import { Calendar, MapPin } from 'lucide-react'
import { Experience } from '../data/experiences'

interface ExperienceItemProps {
	experience: Experience
	index: number
}

const ExperienceItem = ({ experience, index }: ExperienceItemProps) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.3, delay: index * 0.1 }}
			className='group relative pl-8 pb-8 border-l-2 border-gray-200 dark:border-gray-700 last:border-transparent last:pb-0'
		>
			<div className='absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary-600 dark:bg-primary-400 border-4 border-white dark:border-gray-900' />

			<div className='bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 transition-all duration-300 group-hover:shadow-md'>
				<h3 className='text-xl font-bold text-gray-900 dark:text-white mb-1'>
					{experience.role}
				</h3>

				<h4 className='text-lg font-medium text-primary-600 dark:text-primary-400 mb-2'>
					{experience.company}
				</h4>

				<div className='flex flex-wrap gap-x-4 gap-y-2 mb-4 text-sm text-gray-600 dark:text-gray-400'>
					<div className='flex items-center'>
						<Calendar size={16} className='mr-1' />
						<span>
							{experience.startDate} – {experience.endDate || 'Present'}
						</span>
					</div>

					{experience.location && (
						<div className='flex items-center'>
							<MapPin size={16} className='mr-1' />
							<span>{experience.location}</span>
						</div>
					)}
				</div>

				<ul className='space-y-2 text-gray-700 dark:text-gray-300'>
					{experience.responsibilities.map((responsibility, i) => (
						<li key={i} className='flex items-start'>
							<span className='mr-2 mt-1.5 inline-block w-1.5 h-1.5 rounded-full bg-primary-600 dark:bg-primary-400' />
							<span>{responsibility}</span>
						</li>
					))}
				</ul>
			</div>
		</motion.div>
	)
}

export default ExperienceItem

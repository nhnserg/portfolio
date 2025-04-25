import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import { Project } from '../data/projects'

interface ProjectCardProps {
	project: Project
	index: number
}

const MAX_VISIBLE_TECHNOLOGIES = 4

const ProjectCard = ({ project, index }: ProjectCardProps) => {
	const { id, title, summary, technologies, image, githubUrl, liveUrl } =
		project
	const visibleTechnologies = technologies.slice(0, MAX_VISIBLE_TECHNOLOGIES)
	const remainingTechnologies = technologies.length - MAX_VISIBLE_TECHNOLOGIES

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.3, delay: index * 0.1 }}
			className='group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300'
		>
			{/* Project Image */}
			<div className='relative h-48 overflow-hidden'>
				<img
					src={image}
					alt={title}
					className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
				/>
				<div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
			</div>

			<div className='p-6'>
				{/* Project Header */}
				<div className='flex items-center justify-between mb-3'>
					<h3 className='text-xl font-bold text-gray-900 dark:text-white'>
						{title}
					</h3>
					<div className='flex space-x-2'>
						{githubUrl && (
							<a
								href={githubUrl}
								target='_blank'
								rel='noopener noreferrer'
								className='text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors'
								aria-label='View source code on GitHub'
							>
								<Github size={18} />
							</a>
						)}
						{liveUrl && (
							<a
								href={liveUrl}
								target='_blank'
								rel='noopener noreferrer'
								className='text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors'
								aria-label='View live site'
							>
								<ExternalLink size={18} />
							</a>
						)}
					</div>
				</div>

				{/* Project Summary */}
				<p className='text-gray-600 dark:text-gray-300 mb-4 line-clamp-2'>
					{summary}
				</p>

				{/* Technologies */}
				<div className='flex flex-wrap gap-2 mb-4'>
					{visibleTechnologies.map((tech, i) => (
						<span
							key={i}
							className='px-2 py-1 text-xs font-medium text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-900/30 rounded-md'
						>
							{tech}
						</span>
					))}
					{remainingTechnologies > 0 && (
						<span className='px-2 py-1 text-xs font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 rounded-md'>
							+{remainingTechnologies} more
						</span>
					)}
				</div>

				{/* View Details Link */}
				<Link
					to={`/projects/${id}`}
					className='inline-block text-sm font-medium text-primary-600 dark:text-primary-400 hover:underline'
				>
					View details →
				</Link>
			</div>
		</motion.div>
	)
}

export default ProjectCard

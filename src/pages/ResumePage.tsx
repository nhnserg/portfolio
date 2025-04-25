import { motion } from 'framer-motion'
import { Download, Code, Server, Database, Cog } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import ExperienceItem from '../components/ExperienceItem'
import SkillBadge from '../components/SkillBadge'
import { experiences } from '../data/experiences'
import { skills } from '../data/skills'

const ResumePage = () => {
	// Group skills by category
	const frontendSkills = skills.filter(skill => skill.category === 'frontend')
	const backendSkills = skills.filter(skill => skill.category === 'backend')
	const databaseSkills = skills.filter(skill => skill.category === 'database')
	const devopsSkills = skills.filter(skill => skill.category === 'devops')
	const otherSkills = skills.filter(skill => skill.category === 'other')

	return (
		<div className='py-16'>
			<div className='container mx-auto px-4'>
				{/* Header */}
				<div className='text-center mb-16'>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
						<h1 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4'>
							Resume & Experience
						</h1>
						<p className='text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto'>
							An overview of my professional journey, skills, and qualifications
						</p>
						<a
							href='/resumes/resume.pdf'
							className='inline-flex items-center px-6 py-3 rounded-lg bg-primary-600 text-white font-medium hover:bg-primary-700 transition-colors'
						>
							Download Resume <Download size={18} className='ml-2' />
						</a>
					</motion.div>
				</div>

				{/* Main Content */}
				<div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
					{/* Skills Section */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
						className='lg:col-span-1'
					>
						<SectionHeading title='Skills' showLine={true} />

						{/* Frontend Skills */}
						<div className='mb-8'>
							<div className='flex items-center text-lg font-medium text-gray-900 dark:text-white mb-4'>
								<Code
									size={20}
									className='mr-2 text-primary-600 dark:text-primary-400'
								/>
								Frontend Development
							</div>
							<div className='grid grid-cols-1 gap-3'>
								{frontendSkills.map((skill, index) => (
									<SkillBadge
										key={skill.name}
										name={skill.name}
										level={skill.level}
										index={index}
									/>
								))}
							</div>
						</div>

						{/* Backend Skills */}
						<div className='mb-8'>
							<div className='flex items-center text-lg font-medium text-gray-900 dark:text-white mb-4'>
								<Server
									size={20}
									className='mr-2 text-primary-600 dark:text-primary-400'
								/>
								Backend Development
							</div>
							<div className='grid grid-cols-1 gap-3'>
								{backendSkills.map((skill, index) => (
									<SkillBadge
										key={skill.name}
										name={skill.name}
										level={skill.level}
										index={index}
									/>
								))}
							</div>
						</div>

						{/* Database Skills */}
						<div className='mb-8'>
							<div className='flex items-center text-lg font-medium text-gray-900 dark:text-white mb-4'>
								<Database
									size={20}
									className='mr-2 text-primary-600 dark:text-primary-400'
								/>
								Database & Storage
							</div>
							<div className='grid grid-cols-1 gap-3'>
								{databaseSkills.map((skill, index) => (
									<SkillBadge
										key={skill.name}
										name={skill.name}
										level={skill.level}
										index={index}
									/>
								))}
							</div>
						</div>

						{/* DevOps Skills */}
						<div className='mb-8'>
							<div className='flex items-center text-lg font-medium text-gray-900 dark:text-white mb-4'>
								<Cog
									size={20}
									className='mr-2 text-primary-600 dark:text-primary-400'
								/>
								DevOps & Tools
							</div>
							<div className='grid grid-cols-1 gap-3'>
								{[...devopsSkills, ...otherSkills].map((skill, index) => (
									<SkillBadge
										key={skill.name}
										name={skill.name}
										level={skill.level}
										index={index}
									/>
								))}
							</div>
						</div>
					</motion.div>

					{/* Work Experience Section */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
						className='lg:col-span-2'
					>
						<SectionHeading title='Work Experience' showLine={true} />

						<div className='space-y-0'>
							{experiences.map((experience, index) => (
								<ExperienceItem
									key={experience.company}
									experience={experience}
									index={index}
								/>
							))}
						</div>

						{/* Education Section
						<div className='mt-16'>
							<SectionHeading title='Education' showLine={true} />

							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.3 }}
								className='bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6'
							>
								<h3 className='text-xl font-bold text-gray-900 dark:text-white mb-1'>
									B.S. in Computer Science
								</h3>

								<h4 className='text-lg font-medium text-primary-600 dark:text-primary-400 mb-2'>
									University of California, Berkeley
								</h4>

								<div className='text-sm text-gray-600 dark:text-gray-400 mb-4'>
									2013 - 2017
								</div>

								<p className='text-gray-700 dark:text-gray-300'>
									Graduated with honors, specializing in software development
									and web technologies. Coursework included algorithms, data
									structures, database systems, and web application development.
								</p>
							</motion.div>
						</div> */}

						{/* Certifications Section */}
						<div className='mt-16'>
							<SectionHeading title='Certifications' showLine={true} />

							<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.3 }}
									className='bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6'
								>
									<h3 className='text-lg font-bold text-gray-900 dark:text-white mb-1'>
										IT School GOIT
									</h3>
									<p className='text-gray-600 dark:text-gray-400 mb-2'>
										FullStack Developer (Remote) • 2023-2024
									</p>
								</motion.div>

								{/* <motion.div
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.3, delay: 0.1 }}
									className='bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6'
								>
									<h3 className='text-lg font-bold text-gray-900 dark:text-white mb-1'>
										MongoDB Certified Developer
									</h3>
									<p className='text-gray-600 dark:text-gray-400 mb-2'>
										MongoDB University • 2020
									</p>
								</motion.div> */}
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	)
}

export default ResumePage

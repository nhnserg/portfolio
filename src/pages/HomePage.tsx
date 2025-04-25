import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
	ChevronRight,
	Download,
	Github,
	Linkedin,
	Mail,
	ArrowRight,
} from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

const HomePage = () => {
	return (
		<div>
			{/* Hero Section */}
			<section className='py-16 md:py-20 lg:py-28'>
				<div className='container mx-auto px-4'>
					<div className='flex flex-col md:flex-row items-center'>
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5 }}
							className='md:w-1/2 mb-10 md:mb-0'
						>
							<span className='text-primary-600 dark:text-primary-400 font-medium mb-2 block'>
								Hello, I'm
							</span>
							<h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4'>
								Serhii Maksymenko
							</h1>
							<p className='text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6'>
								Full Stack Developer specializing in JavaScript and Node.js
							</p>
							<p className='text-gray-700 dark:text-gray-300 mb-8 max-w-lg'>
								I build scalable, user-focused web applications that solve real
								business problems. With expertise in modern JavaScript
								frameworks and backend technologies, I deliver seamless digital
								experiences from concept to deployment.
							</p>

							<div className='flex flex-wrap gap-4'>
								<Link
									to='/contact'
									className='inline-flex items-center px-6 py-3 rounded-lg bg-primary-600 text-white font-medium hover:bg-primary-700 transition-colors'
								>
									Contact Me <ChevronRight size={18} className='ml-1' />
								</Link>
								<a
									href='/resumes/resume.pdf'
									className='inline-flex items-center px-6 py-3 rounded-lg border-2 border-gray-800 dark:border-white text-gray-800 dark:text-white font-medium hover:bg-gray-800 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-colors'
								>
									Download CV <Download size={18} className='ml-1' />
								</a>
							</div>

							<div className='flex space-x-4 mt-8'>
								<a
									href='https://github.com/nhnserg'
									target='_blank'
									rel='noopener noreferrer'
									className='text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors'
									aria-label='GitHub'
								>
									<Github size={24} />
								</a>
								<a
									href='https://www.linkedin.com/in/maksimenko-serhii/'
									target='_blank'
									rel='noopener noreferrer'
									className='text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors'
									aria-label='LinkedIn'
								>
									<Linkedin size={24} />
								</a>
								<a
									href='mailto:nhnserg@gmail.com'
									className='text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors'
									aria-label='Email'
								>
									<Mail size={24} />
								</a>
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: 0.2 }}
							className='md:w-1/2 flex justify-center'
						>
							<div className='relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white dark:border-gray-800 shadow-xl'>
								<img
									src='/assets/images/webp/photo-portfolio.webp'
									alt='Serge Maksymenko'
									className='w-full h-full object-cover'
								/>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Featured Projects Section */}
			<section className='py-16 bg-gray-50 dark:bg-gray-800/50'>
				<div className='container mx-auto px-4'>
					<SectionHeading
						title='Featured Projects'
						subtitle='Some of my recent work that showcases my skills and experience'
						align='center'
					/>

					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
						{projects.slice(0, 3).map((project, index) => (
							<ProjectCard key={project.id} project={project} index={index} />
						))}
					</div>

					<div className='mt-12 text-center'>
						<Link
							to='/projects'
							className='inline-flex items-center px-6 py-3 rounded-lg bg-white dark:bg-gray-800 text-primary-600 dark:text-primary-400 font-medium hover:bg-gray-100 dark:hover:bg-gray-700/80 transition-colors shadow-sm'
						>
							View All Projects <ArrowRight size={18} className='ml-1' />
						</Link>
					</div>
				</div>
			</section>

			{/* About Me section */}
			<section className='py-16'>
				<div className='container mx-auto px-4'>
					<div className='flex flex-col md:flex-row items-center'>
						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ duration: 0.5 }}
							viewport={{ once: true }}
							className='md:w-2/5 mb-8 md:mb-0'
						>
							<img
								src='https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
								alt='Working on code'
								className='rounded-lg shadow-lg'
							/>
						</motion.div>

						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ duration: 0.5, delay: 0.2 }}
							viewport={{ once: true }}
							className='md:w-3/5 md:pl-12'
						>
							<SectionHeading title='About Me' showLine={true} />

							<div className='space-y-4 text-gray-700 dark:text-gray-300'>
								<p>
									I'm a passionate Full Stack Developer with over 2 years of
									experience building web applications using JavaScript, React,
									Next, and Node.js. My journey in software development began
									with a fascination for creating interactive web experiences,
									and has evolved into expertise in building complete, scalable
									applications.
								</p>
								<p>
									I specialize in developing responsive, user-centered
									applications that solve real business problems. My approach
									combines technical excellence with a strong focus on user
									experience and business objectives.
								</p>
								<p>
									When I'm not coding, you can find me exploring new
									technologies, contributing to open-source projects, or sharing
									my knowledge through technical writing and mentoring aspiring
									developers.
								</p>
							</div>

							<div className='mt-8'>
								<Link
									to='/resume'
									className='inline-flex items-center px-6 py-3 rounded-lg bg-primary-600 text-white font-medium hover:bg-primary-700 transition-colors'
								>
									View My Experience <ChevronRight size={18} className='ml-1' />
								</Link>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className='py-16 bg-primary-600 dark:bg-primary-700'>
				<div className='container mx-auto px-4 text-center'>
					<h2 className='text-3xl font-bold text-white mb-4'>
						Ready to work together?
					</h2>
					<p className='text-primary-100 max-w-2xl mx-auto mb-8'>
						I'm currently available for freelance projects, full-time positions,
						or consultations. Let's discuss how I can help bring your ideas to
						life.
					</p>
					<Link
						to='/contact'
						className='inline-flex items-center px-8 py-4 rounded-lg bg-white text-primary-600 font-medium hover:bg-gray-100 transition-colors shadow-md'
					>
						Get in Touch <ChevronRight size={20} className='ml-1' />
					</Link>
				</div>
			</section>
		</div>
	)
}

export default HomePage

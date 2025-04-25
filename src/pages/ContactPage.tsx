import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import ContactForm from '../components/ContactForm'

const ContactPage = () => {
	return (
		<div className='py-16'>
			<div className='container mx-auto px-4'>
				<SectionHeading
					title='Get In Touch'
					subtitle="Have a project in mind or want to discuss opportunities? Let's talk!"
					align='center'
				/>

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
					{/* Contact Information */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
					>
						<div className='mb-10'>
							<h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-6'>
								Contact Information
							</h3>

							<div className='space-y-4'>
								<div className='flex items-center text-gray-700 dark:text-gray-300'>
									<Mail
										className='mr-3 text-primary-600 dark:text-primary-400'
										size={20}
									/>
									<span>nhnserg@gmail.com</span>
								</div>

								<div className='flex items-center text-gray-700 dark:text-gray-300'>
									<Phone
										className='mr-3 text-primary-600 dark:text-primary-400'
										size={20}
									/>
									<span>+33 (767) 33-35-91</span>
								</div>

								<div className='flex items-center text-gray-700 dark:text-gray-300'>
									<MapPin
										className='mr-3 text-primary-600 dark:text-primary-400'
										size={20}
									/>
									<span>Marseille, France</span>
								</div>
							</div>
						</div>

						<div className='mb-10'>
							<h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-6'>
								Follow Me
							</h3>

							<div className='flex space-x-4'>
								<a
									href='https://github.com/nhnserg'
									target='_blank'
									rel='noopener noreferrer'
									className='p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-colors'
									aria-label='GitHub'
								>
									<Github size={20} />
								</a>

								<a
									href='https://www.linkedin.com/in/maksimenko-serhii/'
									target='_blank'
									rel='noopener noreferrer'
									className='p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-colors'
									aria-label='LinkedIn'
								>
									<Linkedin size={20} />
								</a>

								<a
									href='https://twitter.com'
									target='_blank'
									rel='noopener noreferrer'
									className='p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-colors'
									aria-label='Twitter'
								>
									<Twitter size={20} />
								</a>
							</div>
						</div>

						<div>
							<h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-6'>
								Current Availability
							</h3>

							<div className='bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded-r'>
								<p className='text-green-800 dark:text-green-200'>
									I'm currently available for freelance projects and full-time
									opportunities.
								</p>
							</div>
						</div>
					</motion.div>

					{/* Contact Form */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
					>
						<h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-6'>
							Send Me a Message
						</h3>

						<ContactForm />
					</motion.div>
				</div>

				{/* Google Map */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					className='mt-16 rounded-lg overflow-hidden h-96 shadow-md'
				>
					<iframe
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d185896.03290713404!2d5.215829657590068!3d43.28022069829184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9bf4344da5333%3A0x40819a5fd970220!2z0JzQsNGA0YHQtdC70Yw!5e0!3m2!1sru!2sfr!4v1745242695460!5m2!1sru!2sfr'
						width='100%'
						height='100%'
						style={{ border: 0 }}
						allowFullScreen
						loading='lazy'
						referrerPolicy='no-referrer-when-downgrade'
						title='Google Map of Marseille, France'
					></iframe>
				</motion.div>
			</div>
		</div>
	)
}

export default ContactPage

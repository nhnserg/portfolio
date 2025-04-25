import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Send, Check, AlertCircle } from 'lucide-react'
import { useFormSubmission } from '../hooks/useFormSubmission'
import { ContactFormData } from '../types'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_MESSAGE_LENGTH = 10
const INITIAL_FORM_DATA: ContactFormData = {
	name: '',
	email: '',
	message: '',
}

const ContactForm = () => {
	const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM_DATA)
	const [errors, setErrors] = useState<Partial<ContactFormData>>({})

	const { isSubmitting, submitStatus, onSubmit } = useFormSubmission()

	// Validation form
	const validateForm = (): boolean => {
		const newErrors: Partial<ContactFormData> = {}

		if (!formData.name.trim()) {
			newErrors.name = 'Name is required'
		}

		if (!formData.email.trim()) {
			newErrors.email = 'Email is required'
		} else if (!EMAIL_REGEX.test(formData.email)) {
			newErrors.email = 'Please enter a valid email address'
		}

		if (!formData.message.trim()) {
			newErrors.message = 'Message is required'
		} else if (formData.message.trim().length < MIN_MESSAGE_LENGTH) {
			newErrors.message = `Message must be at least ${MIN_MESSAGE_LENGTH} characters`
		}

		setErrors(newErrors)
		return Object.keys(newErrors).length === 0
	}

	// Handle form changes
	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target
		setFormData(prev => ({ ...prev, [name]: value }))

		// Clear error when typing
		if (errors[name as keyof ContactFormData]) {
			setErrors(prev => ({ ...prev, [name]: '' }))
		}
	}

	// Submit form
	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault()

		if (!validateForm()) return

		// Submit form data using hook
		await onSubmit(formData)

		// Clear form after submit
		setFormData(INITIAL_FORM_DATA)
	}

	// Disable form if submitting or success
	const isFormDisabled = isSubmitting || submitStatus === 'success'

	// Get input className based on error state
	const getInputClassName = (fieldName: keyof ContactFormData) => `
    w-full px-4 py-2 rounded-md border
    ${errors[fieldName] ? 'border-red-500' : 'border-gray-300'}
    focus:outline-none focus:ring-2 focus:ring-primary-500
    disabled:opacity-50 disabled:cursor-not-allowed
  `

	return (
		<motion.form
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
			onSubmit={handleSubmit}
			className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8'
		>
			<div className='space-y-6'>
				{/* Name Field */}
				<div>
					<label
						htmlFor='name'
						className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'
					>
						Name
					</label>
					<input
						type='text'
						id='name'
						name='name'
						value={formData.name}
						onChange={handleChange}
						disabled={isFormDisabled}
						className={getInputClassName('name')}
					/>
					{errors.name && (
						<p className='mt-1 text-sm text-red-600 dark:text-red-400'>
							{errors.name}
						</p>
					)}
				</div>

				{/* Email Field */}
				<div>
					<label
						htmlFor='email'
						className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'
					>
						Email
					</label>
					<input
						type='email'
						id='email'
						name='email'
						value={formData.email}
						onChange={handleChange}
						disabled={isFormDisabled}
						className={getInputClassName('email')}
					/>
					{errors.email && (
						<p className='mt-1 text-sm text-red-600 dark:text-red-400'>
							{errors.email}
						</p>
					)}
				</div>

				{/* Message Field */}
				<div>
					<label
						htmlFor='message'
						className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'
					>
						Message
					</label>
					<textarea
						id='message'
						name='message'
						rows={5}
						value={formData.message}
						onChange={handleChange}
						disabled={isFormDisabled}
						className={`${getInputClassName('message')} resize-none`}
					/>
					{errors.message && (
						<p className='mt-1 text-sm text-red-600 dark:text-red-400'>
							{errors.message}
						</p>
					)}
				</div>

				{/* Submit Button */}
				<button
					type='submit'
					disabled={isFormDisabled}
					className={`
            w-full py-3 px-4 rounded-md text-white font-medium
            flex items-center justify-center transition-colors
            ${
							isSubmitting
								? 'bg-primary-600'
								: submitStatus === 'success'
								? 'bg-green-600'
								: 'bg-primary-600'
						}
            disabled:opacity-50 disabled:cursor-not-allowed
          `}
				>
					{isSubmitting ? (
						<>
							<svg
								className='animate-spin -ml-1 mr-2 h-4 w-4 text-white'
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
							>
								<circle
									className='opacity-25'
									cx='12'
									cy='12'
									r='10'
									stroke='currentColor'
									strokeWidth='4'
								></circle>
								<path
									className='opacity-75'
									fill='currentColor'
									d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
								></path>
							</svg>
							Sending...
						</>
					) : submitStatus === 'success' ? (
						<>
							<Check size={18} className='mr-2' />
							Message Sent!
						</>
					) : submitStatus === 'error' ? (
						<>
							<AlertCircle size={18} className='mr-2' />
							Error Sending
						</>
					) : (
						<>
							<Send size={18} className='mr-2' />
							Send Message
						</>
					)}
				</button>
			</div>
		</motion.form>
	)
}

export default ContactForm

export interface Skill {
	name: string
	level: number // 1-5
	category: 'frontend' | 'backend' | 'database' | 'devops' | 'other'
}

export const skills: Skill[] = [
	// Frontend
	{ name: 'JavaScript', level: 5, category: 'frontend' },
	{ name: 'TypeScript', level: 4, category: 'frontend' },
	{ name: 'React', level: 5, category: 'frontend' },
	{ name: 'Redux', level: 4, category: 'frontend' },
	{ name: 'HTML5', level: 5, category: 'frontend' },
	{ name: 'CSS3/SASS', level: 4, category: 'frontend' },
	{ name: 'Tailwind CSS', level: 4, category: 'frontend' },
	{ name: 'Next.js', level: 4, category: 'frontend' },

	// Backend
	{ name: 'Node.js', level: 5, category: 'backend' },
	{ name: 'Express', level: 5, category: 'backend' },
	{ name: 'REST API Design', level: 4, category: 'backend' },
	{ name: 'Authentication/JWT', level: 4, category: 'backend' },
	{ name: 'Socket.io', level: 3, category: 'backend' },

	// Database
	{ name: 'MongoDB', level: 4, category: 'database' },
	{ name: 'Mongoose', level: 4, category: 'database' },

	// DevOps
	{ name: 'Git/GitHub', level: 4, category: 'devops' },
	{ name: 'Docker', level: 1, category: 'devops' },
	{ name: 'Linux', level: 2, category: 'devops' },

	// Other
	{ name: 'Responsive Design', level: 4, category: 'other' },
	{ name: 'Performance Optimization', level: 4, category: 'other' },
]

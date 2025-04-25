export interface Project {
  id: string;
  title: string;
  summary: string;
  description: string[];
  image: string;
  technologies: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    summary: 'A full-featured e-commerce platform with product management, cart functionality, and payment processing.',
    description: [
      'Built a comprehensive e-commerce platform from the ground up using React, Node.js, and MongoDB.',
      'Implemented secure payment processing with Stripe integration and user authentication with JWT.',
      'Designed an intuitive admin dashboard for product management, order tracking, and customer insights.',
      'Optimized for mobile performance with responsive design and lazy-loading of product images.'
    ],
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux', 'Stripe API', 'JWT', 'AWS S3'],
    features: [
      'User authentication and profile management',
      'Product catalog with filtering and search',
      'Shopping cart and checkout process',
      'Order history and tracking',
      'Admin dashboard for inventory management',
      'Payment processing with Stripe'
    ],
    githubUrl: 'https://github.com/example/ecommerce-platform',
    liveUrl: 'https://ecommerce-platform-example.com'
  },
  {
    id: 'task-management-app',
    title: 'Task Management App',
    summary: 'A collaborative task management application with real-time updates, team workspaces, and progress tracking.',
    description: [
      'Developed a real-time task management application using React, Node.js, and Socket.io.',
      'Implemented team workspaces, task assignments, due dates, and priority levels.',
      'Created an intuitive drag-and-drop interface for managing task stages and progress.',
      'Integrated with third-party calendar services for deadline syncing and reminders.'
    ],
    image: 'https://images.pexels.com/photos/7432/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Redis', 'Docker'],
    features: [
      'Real-time collaboration',
      'Team workspaces',
      'Task assignments and priorities',
      'Progress tracking and reporting',
      'Calendar integration',
      'Mobile-responsive design'
    ],
    githubUrl: 'https://github.com/example/task-management',
    liveUrl: 'https://taskmanagement-example.com'
  },
  {
    id: 'fitness-tracker',
    title: 'Fitness Tracker',
    summary: 'A mobile-first fitness tracking application that helps users monitor workouts, nutrition, and progress.',
    description: [
      'Created a comprehensive fitness tracking application using React Native and Firebase.',
      'Designed features for tracking workouts, logging meals, and monitoring progress over time.',
      'Implemented data visualization for performance metrics and health statistics.',
      'Built workout recommendations based on user goals and previous activity.'
    ],
    image: 'https://images.pexels.com/photos/1153369/pexels-photo-1153369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['React Native', 'Firebase', 'Expo', 'Redux', 'D3.js', 'Node.js'],
    features: [
      'Workout tracking and logging',
      'Nutrition tracking and meal planning',
      'Progress visualization and statistics',
      'Custom workout recommendations',
      'Social sharing and community features',
      'Offline functionality'
    ],
    githubUrl: 'https://github.com/example/fitness-tracker',
    liveUrl: 'https://fitnesstracker-example.com'
  },
  {
    id: 'real-time-chat',
    title: 'Real-Time Chat Application',
    summary: 'A scalable real-time chat application with private messaging, group chats, and media sharing.',
    description: [
      'Built a feature-rich real-time chat application using WebSockets and microservices architecture.',
      'Implemented end-to-end encryption for message security and privacy.',
      'Designed systems for media sharing, message reactions, and thread replies.',
      'Created a responsive interface that works seamlessly across desktop and mobile devices.'
    ],
    image: 'https://images.pexels.com/photos/3568520/pexels-photo-3568520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['React', 'Node.js', 'WebSockets', 'Redis', 'PostgreSQL', 'Docker', 'Kubernetes'],
    features: [
      'Real-time messaging',
      'Private and group chats',
      'End-to-end encryption',
      'Media and file sharing',
      'Message reactions and threads',
      'Online presence indicators'
    ],
    githubUrl: 'https://github.com/example/real-time-chat',
    liveUrl: 'https://chatapp-example.com'
  }
];
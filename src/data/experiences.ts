export interface Experience {
  company: string;
  role: string;
  startDate: string;
  endDate?: string;
  location: string;
  responsibilities: string[];
}

export const experiences: Experience[] = [
  {
    company: 'TechForward',
    role: 'Senior Full Stack Developer',
    startDate: 'Jan 2022',
    endDate: 'Present',
    location: 'San Francisco, CA (Remote)',
    responsibilities: [
      'Lead development of a high-traffic e-commerce platform serving 100,000+ daily users using React, Node.js, and MongoDB',
      'Implemented CI/CD pipeline with GitHub Actions, reducing deployment time by 70% and improving code quality',
      'Mentored junior developers and conducted code reviews to maintain high standards of code quality',
      'Optimized database queries and API endpoints, resulting in a 40% improvement in application performance',
      'Collaborated with product managers and designers to deliver features aligned with business goals and user needs'
    ]
  },
  {
    company: 'InnoSoft Solutions',
    role: 'Full Stack Developer',
    startDate: 'Mar 2019',
    endDate: 'Dec 2021',
    location: 'Boston, MA',
    responsibilities: [
      'Developed and maintained multiple client applications using React, Redux, Express, and PostgreSQL',
      'Designed and implemented RESTful APIs for various services, ensuring security and scalability',
      'Created responsive UIs that work across desktop and mobile devices using modern CSS techniques',
      'Integrated third-party services and APIs including payment gateways, social media, and mapping services',
      'Participated in agile development processes, sprint planning, and daily stand-up meetings'
    ]
  },
  {
    company: 'WebDev Agency',
    role: 'Frontend Developer',
    startDate: 'Jun 2017',
    endDate: 'Feb 2019',
    location: 'Chicago, IL',
    responsibilities: [
      'Built dynamic, responsive user interfaces using React and modern JavaScript',
      'Worked closely with UI/UX designers to implement pixel-perfect designs and animations',
      'Optimized frontend performance through code splitting, lazy loading, and asset optimization',
      'Refactored legacy codebase from jQuery to React, improving maintainability and performance',
      'Contributed to the development of the company\'s internal component library'
    ]
  }
];
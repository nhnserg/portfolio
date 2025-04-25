import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import ProjectDetailPage from './pages/ProjectDetailPage'
// import ResumePage from './pages/ResumePage'
import ContactPage from './pages/ContactPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
	return (
		<ThemeProvider>
			<Router>
				<Routes>
					<Route path='/' element={<Layout />}>
						<Route index element={<HomePage />} />
						<Route path='projects' element={<ProjectsPage />} />
						<Route path='projects/:id' element={<ProjectDetailPage />} />
						{/* <Route path='resume' element={<ResumePage />} /> */}
						<Route path='contact' element={<ContactPage />} />
						<Route path='*' element={<NotFoundPage />} />
					</Route>
				</Routes>
			</Router>
		</ThemeProvider>
	)
}

export default App

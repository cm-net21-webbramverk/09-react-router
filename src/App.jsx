import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, NavLink, Routes, Route, Navigate } from 'react-router-dom'
import Start from './components/Start'
import Calendar from './components/Calendar'
import BookNew from './components/BookNew'

function App() {
	return (
		<Router>
		<div>
			<header>
				<NavLink to=""> Startsida </NavLink>
				<NavLink to="/calendar"> Calendar </NavLink>
				<NavLink to="/book-new"> Book new appointment </NavLink>
			</header>
			<main> 
				<Routes>
					<Route path="/book-new" element={<BookNew />} />
					<Route path="/calendar" element={<Calendar />} />
					<Route path="/kalendar" element={<Navigate to="/calendar" />} />
					<Route path="/" element={<Start />} />
				</Routes>
			</main>
		</div>
		</Router>
	)
}

export default App

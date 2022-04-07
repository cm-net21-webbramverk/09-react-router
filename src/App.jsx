import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, NavLink, Routes, Route, Navigate } from 'react-router-dom'
import Start from './components/Start'
import Calendar from './components/Calendar'
import BookNew from './components/BookNew'
import Lunch from './components/Lunch'

function App() {
	return (
		<Router>
		<div>
			<header>
				<nav>
				<div>
				<NavLink to=""> Startsida </NavLink>
				<NavLink to="/calendar"> Calendar </NavLink>
				<NavLink to="/book-new"> Book new appointment </NavLink>
				</div>
				<div>
				<NavLink to="/lunch/sushi"> Sushi </NavLink>
				<NavLink to="/lunch/baguette"> Baguette </NavLink>
				<NavLink to="/lunch/pizza"> Pizza </NavLink>
				</div>
				</nav>
			</header>
			<main> 
				<Routes>
					<Route path="/lunch/:food" element={<Lunch />} />
					<Route path="/book-new" element={<BookNew />} />
					<Route path="/calendar" element={<Calendar />} />
					<Route path="/kalendar" element={<Navigate to="/calendar" />} />
					<Route path="/*" element={<Start />} />
				</Routes>
			</main>
		</div>
		</Router>
	)
}

export default App

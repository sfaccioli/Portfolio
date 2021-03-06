import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import App from './components/App'
import reportWebVitals from './reportWebVitals'
import './styles/main.scss'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
	<HashRouter>
		<Routes>
			<Route path="/" element={<App />} />
		</Routes>
	</HashRouter>
)

reportWebVitals()

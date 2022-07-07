import { Outlet } from 'react-router-dom'
import Layout from '../Layout'

/**
 * The app entry point component
 */
export default function App(): JSX.Element {
	return (
		<Layout>
			<Outlet />
		</Layout>
	)
}

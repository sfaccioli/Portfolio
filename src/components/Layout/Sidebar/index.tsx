import styles from './Sidebar.module.scss';
import LogoS from '../../../assets/images/logo-s.png';
import LogoSubtitle from '../../../assets/images/logo_sub.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

/**
 * Sidebar layout component
 */
export default function Sidebar(): JSX.Element {
	return (
		<>
			<div className={styles.navBar}>
				<a className={styles.logo} href="/">
					<img src={LogoS} alt="logo" />
					<img className={styles.subLogo} src={LogoSubtitle} alt="sfaccioli" />
				</a>

				<nav>
					<a>HOLAaaaaaaaaaaaaaaaaaaaaa</a>
					<a>HOLA</a>
					<a>HOLA</a>
					<a>HOLA</a>
					<a>HOLA</a>
					<a>HOLA</a>
					<a>HOLA</a>
					<a>HOLA</a>
					<a>HOLA</a>
					<a>HOLA</a>
					{/* <Link href='/'>
					className={router.asPath === '/' && styles.active}
					<FontAwesomeIcon icon={faHome} color='#4d4d4e' />
				</Link>
				<Link
					href='/about'
					className={
						router.asPath === '/about'
							? `${styles.active} ${styles.aboutLink}`
							: `${styles.aboutLink}`
					}>
					<FontAwesomeIcon icon={faUser} color='#4d4d4e' />
				</Link>
				<Link
					href='/contact'
					className={
						router.asPath === '/contact'
							? `${styles.active} ${styles.contactLink}`
							: `${styles.contactLink}`
					}>
					<FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
				</Link> */}
				</nav>

				<ul>
					<li>
						<a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/selene-faccioli-13389a107/">
							<FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
						</a>
					</li>

					<li>
						<a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/selene-faccioli-13389a107/">
							<FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
						</a>
					</li>
				</ul>
			</div>
		</>
	);
}

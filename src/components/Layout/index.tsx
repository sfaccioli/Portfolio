import { PropsWithChildren } from 'react';
import { className } from '../../helpers/classNames';
import styles from './Layout.module.scss';
import Sidebar from './Sidebar';

/**
 * The main layout component
 */
export default function Layout(props: PropsWithChildren<{}>): JSX.Element {
	return (
		<div className={styles.app}>
			<Sidebar />
			<main className={styles.page}>
				<div {...className(styles.tags, styles.topTags)}>
					<span>{'<html>'}</span>
					<span>{'<body>'}</span>
				</div>
				<section className={styles.content}>{props.children}</section>

				<div {...className(styles.tags, styles.bottomTags)}>
					<span>{'</body>'}</span>
					<span>{'</html>'}</span>
				</div>
			</main>
		</div>
	);
}

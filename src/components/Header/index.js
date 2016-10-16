import React from "react"
import { Link } from "react-router"

import styles from "./index.css"

const Header = () => (
	<header className={ styles.header }>
		<nav className={ styles.nav }>
			<div className={ styles.navPart2 }>
				<Link
  className={ styles.link }
  activeClassName={ styles.activeAbout }
  to="/about"
				>
					{ "ABOUT" }
				</Link>
			</div>
			<div className={ styles.navPart2 }>
				<Link
  className={ styles.link }
  activeClassName={ styles.activePrivate }
  to="/private"
				>
					{ "PRIVATE SESSIONS" }
				</Link>
			</div>
			<div className={ styles.navPart2 }>
				<Link
  className={ `${styles.link} ${styles.mainLink}` }
  to="/"
				>
					{ "LEE DELEGARD" }
				</Link>
			</div>
		</nav>
	</header>
)

export default Header

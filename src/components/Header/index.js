import React from "react"
import { Link } from "react-router"

import styles from "./index.css"

const Header = () => (
	<header className={ styles.header }>
		<nav className={ styles.nav }>
			<div className={ styles.navPart1 }>
				<Link
  className={ styles.link }
  to="/"
				>
					{ "LEE DELEGARD" }
				</Link>
			</div>
			<div className={ styles.navPart2 }>
				<Link
  className={ styles.link }
  to="/about"
				>
					{ "ABOUT" }
				</Link>
			</div>
			<div className={ styles.navPart2 }>
				<Link
  className={ styles.link }
  to="/private"
				>
					{ "PRIVATE SESSIONS" }
				</Link>
			</div>
		</nav>
	</header>
)

export default Header

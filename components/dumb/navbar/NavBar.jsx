import IcoSidebar from '@components/ui/ico/IcoSidebar'
import ActiveLink from '@components/ui/links/ActiveLink'

import styles from './NavBar.module.scss'

export default function NavBar({ 
	mainPages
}) {

	//debugger;
	return (
	<nav  
		className={ styles.menu }
	>
		<ul>
			{ mainPages.map( (p, i) => (
				<li 
					key={ i } 
				>
					<ActiveLink
						fuzzy
						href={ p.pathLink }
					>
						<a 
							title={ p.titleLink }
							className="bs-0"
						>
							<IcoSidebar 
								ico={ p.ico }
							/>
						</a>
					</ActiveLink>
				</li>
			))}
		</ul>

	</nav>	
	)
}
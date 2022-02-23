import { Row, Col } from 'react-bootstrap'

import ListProjects from '@containers/listProject/ListProjects'
import Search from '@components/dumb/search/Search'

import styles from './Project.module.scss'

export default function ListBlock({ 
	projects,
	search,
	nameLink
}) {

	//debugger;
	return (
	<Col 
		xs={12}
		className={ styles.text }
	>
		<h1>{ nameLink }</h1>

		<Search 
			search={ search }
		/>
	
		<Row>

			{ projects.map( (p, i) => (
				<ListProjects 
					key={ i }
					project={ p }
				/>
			))}
			
		</Row>
	</Col>
	)
}
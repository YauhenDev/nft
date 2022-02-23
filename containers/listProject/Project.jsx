import Link from 'next/link'
import { Col } from 'react-bootstrap'

import styles from './Project.module.scss'

export default function Project({ 
	item
}) {

	const { nameProject, dateCheck } = item

	//debugger;
	return (
	<Col 
		xs={12}  
		className={ styles.text }
	>

		<h1>{ nameProject }</h1>
		check - { dateCheck }  <br />

	</Col>
	)
}
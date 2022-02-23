import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'

import styles from './ScanBlock.module.scss'

export default function ScanBlock({ 
	scanPage
}) {

	const { nameLink, fakeTest } = scanPage

	//debugger;
	return (
	<Col 
		xs={ 12 }
		className={ styles.text } 
	>

		<h1>{ nameLink }</h1>

		{ fakeTest }

	</Col>
	)
}
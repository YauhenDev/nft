import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'

import styles from './IndexBlock.module.scss'

export default function IndexBlock({ 
	indexPages
}) {

	const { nameLink, fakeTest } = indexPages

	//debugger;
	return (
	<Container fluid>
		<Row>
			<Col className={ styles.text } >

				<h1>{ nameLink }</h1>
				{fakeTest}<br />
				{fakeTest}<br />
				{fakeTest}<br />
				{fakeTest}<br />
				{fakeTest}<br />
				{fakeTest}<br />
				{fakeTest}<br />
				{fakeTest}<br />
				{fakeTest}<br />
				{fakeTest}<br />
				{fakeTest}<br />
				{fakeTest}<br />
				{fakeTest}<br />
				<h2>Head 2 - test</h2>
				{fakeTest}<br />
				{fakeTest}<br />
				{fakeTest}<br />
				{fakeTest}<br />
				{fakeTest}<br />
				{fakeTest}<br />
				{fakeTest}<br />
				{fakeTest}<br />
				{fakeTest}<br />
				{fakeTest}<br />
				{fakeTest}<br />
				{fakeTest}<br />
				{fakeTest}<br />
				{fakeTest}<br />
				{fakeTest}<br />
				{fakeTest}<br />
				{fakeTest}<br />
				{fakeTest}<br />

			</Col>
		</Row>
	</Container>
	)
}
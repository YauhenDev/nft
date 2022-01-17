import Head from 'next/head'
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'

import ListProject from '@containers/listProject/ListProject'

export default function PageList({
	state,
	project,
	setmodalShow
}) {

	const i = 1
	const { nameLink, seoTitle, seoDescription, fakeTest } = state.mainPages[i]

	return (
	<>
		<Head>
			<title>{ seoTitle }</title>
			<meta name="description" 		content={ seoDescription } />
			<meta property="og:title"		content={ seoTitle } />
			<meta property="og:description"	content={ seoDescription } />
		</Head>

		<Container fluid>
			<Row>
				<Col>
					<h1>{ nameLink }</h1>
					</Col>
			</Row>

			<Row>
				{ project.fakeProject.map( (p, i) => (
					<ListProject 
						key={ i }
						project={ p }
					/>
				))}
			</Row>
				
		</Container>

	</>
	)
}

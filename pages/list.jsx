import Head from 'next/head'
import { Container, Row, Col } from 'react-bootstrap'

import ListProject from '@containers/listProject/ListProject'

export default function PageList({
	state,
	projects,
	setmodalShow
}) {

	const i = 1
	const { nameLink, seoTitle, seoDescription } = state.mainPages[i]

	//debugger;
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
				{ projects.map( (p, i) => (
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

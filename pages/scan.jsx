import Head from 'next/head'
import { Container, Row, Col } from 'react-bootstrap'

export default function PageScan({
	state,
	setmodalShow
}) {

	const i = 2
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
					{ fakeTest }
				</Col>
			</Row>
		</Container>

	</>
	)
}

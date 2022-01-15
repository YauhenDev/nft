import Head from 'next/head'
import { Container, Row, Col } from 'react-bootstrap'

export default function Home({
	state,
	setmodalShow
}) {

	const i = 0
	const { seoTitle, seoDescription, fakeTest } = state.mainPages[i]

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

	</>
	)
}

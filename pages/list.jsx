import Head from 'next/head'
import { Container, Row, Col } from 'react-bootstrap'


import ListBlock from '@containers/listProject/ListBlock'

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
				
				<ListBlock 
					projects={ projects }
					nameLink={ nameLink }
					search={ state.search }
				/>

			</Row>
		</Container>

	</>
	)
}

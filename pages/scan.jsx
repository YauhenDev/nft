import Head from 'next/head'
import { Container, Row } from 'react-bootstrap'

import ScanBlock from '@containers/scanBlock/ScanBlock'
import SendProject from '@components/dumb/sendProject/SendProject'

export default function PageScan({
	state,
	setmodalShow
}) {

	const i = 2
	const { seoTitle, seoDescription } = state.mainPages[i]

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

				<ScanBlock 
					scanPage={ state.mainPages[i] }
				/>

				<SendProject 
					send={ state.send }
				/>

			</Row>
		</Container>

	</>
	)
}

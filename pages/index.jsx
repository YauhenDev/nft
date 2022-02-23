import IndexBlock from '@containers/indexBlock/IndexBlock'
import Head from 'next/head'


export default function Home({
	state,
	setmodalShow
}) {

	const i = 0
	const { seoTitle, seoDescription } = state.mainPages[i]

	return (
	<>
		<Head>
			<title>{ seoTitle }</title>
			<meta name="description" 		content={ seoDescription } />
			<meta property="og:title"		content={ seoTitle } />
			<meta property="og:description"	content={ seoDescription } />
		</Head>

		<IndexBlock 
			indexPages={ state.mainPages[i] }
		/>

	</>
	)
}

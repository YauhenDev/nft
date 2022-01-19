import Head from 'next/head'

import { projects } from '../../state/project'

export async function getStaticPaths() {

	const paths = projects.fakeProject.map(item => {
		return {
			params: { 
				id: item.id.toString(),
				//slug: item.slug
			}
		}
	})

	return { 
		paths, 
		fallback: false 
	}
}

export async function getStaticProps ({ params }) {

	// const { items } = {
	// 	'slug': params.slug
	// }
	return {
	  props: {
		//item: items[0]
		item: projects.fakeProject[params.id]
	  }
	}
}

export default function ListProject({ 
	item
}) {

	//debugger;
	return (
		<>
			<Head>
				<title></title>
				<meta name="description" 		content="" />
				<meta property="og:title"		content="" />
				<meta property="og:description"	content="" />
			</Head>

			test { item.nameProject } <br />

		</>
	)
}
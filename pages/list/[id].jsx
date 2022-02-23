import Head from 'next/head'

import Project from '@containers/listProject/Project'
import { projects } from '@state/projects'

export async function getStaticPaths() {

	const paths = projects.map(item => {
		return {
			params: { 
				//slug: item.slug,
				id: item.id.toString()
			}
		}
	})
	return { 
		paths, 
		fallback: false 
	}
}

export async function getStaticProps ({ params }) {

	// const { items } = ({
	// 	'slug': params.slug
	// })

	return {
	  props: {
		//item: projects[params.id]
		item: projects[params.id]
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

			<Project 
				item={ item }
			/>

		</>
	)
}
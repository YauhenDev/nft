import Head from 'next/head'
import { server } from '../../config/index'

import { project } from '../../state/project'


// рабочий вариант Paths
// export async function getStaticPaths() {

// 	const paths = project.fakeProject.map(item => {
// 		return {
// 			params: { 
// 				id: item.id.toString()
// 			}
// 		}
// 	})

// 	return { 
// 		paths, 
// 		fallback: false 
// 	}
// }

// export const getStaticProps = async (context) => {
// 	//const article: Article = await getArticle(context.id);

// 	const { items } = await ({
// 		'item.id': params.id
// 	})
  
// 	return {
// 	  props: {
// 		item: items[0]
// 	  }
// 	}
//   };

/*   export const getStaticProps = async (context) => {

	//const item: Item = await getItem(context.id);
	//const item = await getEntries( context.id )
	const item = await ( context.id )
  
	debugger
	return {
	  props: {
		item
	  }
	}
  }; */

// export async function getStaticProps( params ) {

// 	const id = params.id
// 	return {
// 		props: {
// 			id,
// 		},
// 	}
// }

// export async function getStaticProps( { params } ) {

// 	// const id = context.params.id
// 	// const res = await fetch ( project.fakeProject + id )
// 	// const data = await res.json()

// 	const { items } = await fetch ( params.fakeProject + id )

// 	return {
// 		props: { 
// 			project: items[0]
// 		}
// 	};
// }

// export async function getServerSideProps({ params }) {
//     const res = await fetch(`${ server }/list/${ project.fakeProject.id }`)
// 	const data = await res.json()
// 	console.log(data)
//     return {
//         props: { data }
//     }
// }

export default function ListProject({ 

}) {

	return (
		<>
			<Head>
				<title></title>
				<meta name="description" 		content="" />
				<meta property="og:title"		content="" />
				<meta property="og:description"	content="" />
			</Head>

			test

		</>
	)
}
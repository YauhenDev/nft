import Head from 'next/head'

import styles from './Layout.module.scss'
import LinkLogo from '@components/ui/logo/LinkLogo'
import NavBar  from '@components/dumb/navbar/NavBar'
// если необходимо языки --------------------------------------
//import ToggleLanguage from '@components/dumb/language/ToggleLanguage'

export default function Layout({ 
	children,
	state,
	setmodalShow
}) {

	//debugger;
	return (
	<>
	
		<Head>
			<meta name="theme-color" content="#213035" />
			<link rel="shortcut icon" href="/assets/favicon/favicon.png" type="image/png" />
			<link rel="icon" href="/assets/favicon/favicon.svg" type="image/svg+xml" />

			<meta property="og:type" content="website" />
			<meta property="og:url" content="https://" />
			<meta property="og:site_name" content="" />
			<meta property="og:image" content="/assets/img/" />
		</Head>

		<header className={ styles.left }>

			<LinkLogo 
				nameSite={ state.mainAttr.nameSite}
			/>

			<NavBar 
				mainPages={ state.mainPages }
				setmodalShow={ setmodalShow }
			/>

			{/* <ToggleLanguage /> */}

		</header>

		<main className={ styles.main }>

			{ children }

		</main>

	</>
	)
}
import { useState, useEffect } from 'react'
//import { useRouter } from 'next/router'

import Layout from '@components/layouts/Layout'
import ContactsModal from '@components/dumb/modal/ContactsModal'

// если необходимо языки --------------------------------------
//import { en } from '@locales/en'
//import { ru } from '@locales/ru'
// Подключаем state 
import { state } from '@state/state'
import { projects } from '@state/projects'

import '@styles/app.scss'

export default function MyApp({ Component, pageProps }) {

	// если необходимо языки --------------------------------------
	// подключаем используемые JS скрипты
	// useEffect(() => {
	// 	import("bootstrap/js/dist/dropdown") // Dropdown bootstrap JS
	// }, []);

	// если необходимо языки --------------------------------------
	// Подключаем state в зависимости от языка
	//const router = useRouter()
	//const state = router.locale === 'en' ? en : en

	//Состояние модального окна
	const [modalShow, setmodalShow] = useState(false);

	return (
	<Layout
		state={ state }
		setmodalShow={ setmodalShow }
	>
		
		<Component 
			{...pageProps}
			state={ state }
			projects={ projects }
		/>

		<ContactsModal	
			modalShow={ modalShow }
			setmodalShow={ setmodalShow }
		/>

	</Layout>
	)
	
}
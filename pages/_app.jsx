import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import Layout from '@components/layouts/Layout'
import ContactsModal from '@components/dumb/modal/ContactsModal'

import { en } from '@locales/en'
import { ru } from '@locales/ru'

import '@styles/app.scss'

export default function MyApp({ Component, pageProps }) {

	// подключаем используемые JS скрипты
	useEffect(() => {
		import("bootstrap/js/dist/dropdown") // Dropdown bootstrap JS
	}, []);

	// Подключаем state в зависимости от языка
	const router = useRouter()
	const state = router.locale === 'en' ? en : ru

	//Состояние модального окна
	const [modalShow, setmodalShow] = useState(false);

	return (
	<Layout
		state={ state }
		setmodalShow={setmodalShow}
	>
		
		<Component 
			{...pageProps}
			state={state}
		/>

		<ContactsModal	
			modalShow={ modalShow }
			setmodalShow={ setmodalShow }
		/>

	</Layout>
	)
	
}
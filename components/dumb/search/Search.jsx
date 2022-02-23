import { InputGroup, FormControl, Button } from 'react-bootstrap'

import styles from './Search.module.scss'

export default function Search({ 
	search
}) {

	const { textInput} = search

	//debugger; 
	return (
	<InputGroup 
		className={`${ styles.group } mb-3`}
		size="lg"
	>
		<FormControl
			placeholder={ textInput}
			aria-label={ textInput}
			aria-describedby="searchScam"
		/>
		
		<Button 
			variant="link" 
			id="searchScam"
		>
			<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
			</svg>
		</Button>

	</InputGroup>
	)
}
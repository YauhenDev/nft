import { Col, Form, InputGroup, FormControl, Button } from 'react-bootstrap'

import styles from './SendProject.module.scss'

export default function SendProject({ 
	send
}) {

	const { textLabel, textInput, textDescription, textButton } = send

	//debugger; 
	return (
	<Col
		xs={ 12 }
		xl={ 6 }
		className={ styles.text } 
	>
		<Form
			className={ styles.form }
		>

			<Form.Group 
				className="mb-3" 
				controlId="exampleForm.ControlInput1"
			>
				<Form.Label>
					{ textInput }
				</Form.Label>
				<Form.Control 
					type="text" 
					placeholder={ textLabel } 
				/>

			</Form.Group>

			<Form.Group 
				className="mb-3" 
				controlId="exampleForm.ControlTextarea1"
			>
				<Form.Label>
					{ textDescription }
				</Form.Label>
				<Form.Control 
					as="textarea" 
					rows={3} 
				/>
			</Form.Group>

			<div className="text-end">
				<Button 
					variant="success" 
					size="lg"
					value="submit" 
					type="submit"
					
				>
					{ textButton }
				</Button>
			</div>

		</Form>
	</Col>
	)
}
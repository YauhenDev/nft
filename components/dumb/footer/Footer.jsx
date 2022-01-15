import Link from 'next/link'
import {Container, Row, Col } from 'react-bootstrap'

import styles from './Footer.module.scss'

const thisYear = new Date();

export default function Footer({ 

}) {

	//debugger; 
	return (
	<Container as="footer" fluid className={`${ styles.block }`}>
		<Container 
			fluid="xxl" 
		>
			<hr />
			<Row>
				<Col xs={ 12 } sm={ 6 } className={ styles.copyright }>
					<small>
						© 2019 — <span itemProp="copyrightYear">
							{ thisYear.getFullYear() }
						</span> <br /> 
						<Link 
							href="/"
						>
							<a 
								title=""
							>
									aaaaaaaa
							</a> 
						</Link> — dddddddd
					</small>
				</Col>
				<Col xs={ 12 } sm={ 6 }>
					<small>
						<Link 
							href="/"
						>
							<a 
								title="Политика в отношении обработки персональных данных"
							>
								Политика в отношении обработки персональных данных
							</a>
						</Link>
					</small>
				</Col>
			</Row>
		</Container>
	</Container>
	)
}
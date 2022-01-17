import Link from 'next/link'
import { Col } from 'react-bootstrap'

import styles from './ListProject.module.scss'

export default function ListProject({ 
	project
}) {

	//debugger;
	return (
	<Col 
		xs={12} 
		md={6} 
		lg={4} 
		xl={3} 
		className={`${ styles.project}`}
	>
		<div>
			<Link
				href={`/list/${project.id}`}
			>
				<a 
					title={ project.nameProject }
					className="bs-0"
				>
					{ project.nameProject }
				</a>
			</Link>
		</div>
	</Col>
	)
}
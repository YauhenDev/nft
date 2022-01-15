import Link from 'next/link'
import Logo from './Logo'

export default function LinkLogo ({ nameSite }) {
	return (
		<Link 
			href="/"
		>
			<a 
				title={ nameSite }
				className="bs-0 d-block"
			>
				<Logo />
			</a>
		</Link>
	)
}
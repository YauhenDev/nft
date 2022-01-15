import IcoList from '@components/ui/ico/menu/IcoList'
import IcoPlane from '@components/ui/ico/menu/IcoPlane'
import IcoHome from '@components/ui/ico/menu/IcoHome'

export default function IcoSidebar({ ico }) {

	if (ico == 'list') {
		return <IcoList />
	} else if (ico == 'paper-plane') {
		return <IcoPlane />
	} else if (ico == 'home') {
		return <IcoHome />
	}

	return (
	<>
		
	</>
	)
}
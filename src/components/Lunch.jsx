import { useParams } from 'react-router-dom'

const Lunch = () => {
	const { food } = useParams()
	return (
		<div>
			You have ordered {food}.
		</div>
	)
}

export default Lunch

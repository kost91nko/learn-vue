import router from '../router';


export default {
	functional: true,
	render(h, context) {
		return (
			<div>
				<button onClick={() => router.push({ name: 'home'})}>Home</button>
				<button onClick={() => router.push({ name: 'about'})}>About</button>
			</div>
		)
	}
}

import router from '../router';
import './Header.less';

export default {
	functional: true,
	render(h, context) {
		return (
			<nav class="navbar navbar-default">
				<div class="nav-container">
					<div class="navbar-header">
						<a target="_blank" id="logo_container" href="http://www.be-mobile.com">
							<img class="img-big" id="logo" src="/src/assets/styles/styleguide/bm-logo/images/bm-logo-white-tagline.png"/>
							{/*<img class="img-small" src="/src/assets/styles/styleguide/bm-logo/images/bm-icon.png"/>*/}
						</a>
						<h1 id="nav_title">Learn Vue</h1>
					</div>
				</div>
				<button onClick={() => router.push({ name: 'home'})}>Home</button>
				<button onClick={() => router.push({ name: 'about'})}>About</button>
			</nav>
		)
	}
}

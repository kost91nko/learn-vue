import './Layout.less';

export default {
	functional: true,
	render(h, context) {
		const slots = context.slots();
		return (
			<div>
				<header>
					{slots.header}
				</header>
				<main>
					{slots.default}
				</main>
				<footer>
					{slots.footer}
				</footer>
			</div>
		)
	}
}

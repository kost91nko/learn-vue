import router from '../router';

export default {
	functional: true,
	render(h, context) {
		return (
			<div>
				<a href="http://bemobile.company">
					{context.props.yearCompany}
				</a>
			</div>
		)
	},
	props: {
		yearCompany: {
			type: String,
			default: `${new Date().getFullYear()},  BE-Mobile`
		}
	}
}

import Map from '../components/Map';

export default {
	functional: true,
	render: function(h, context) {
		return (
			<div>
				<h1>Home</h1>
				<div className="greeting">{ context.props.greeting }</div>
				<Map />
			</div>
		)
	},
	props: {
		greeting: {
			type: String,
			default: "Hello, default"
		},
		components: {
			Map
		}
	}
}

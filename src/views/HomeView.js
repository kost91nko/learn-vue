export default {
	functional: true,
	render: function(h, context) {
		return (
			<div>
				<h1>Home</h1>
				<div className="box">
						<div className="greeting">{ context.props.greeting }</div>
				</div>
			</div>
		)
	},
	props: {
		greeting: {
			type: String,
			default: "Hello, default"
		}
	}
}

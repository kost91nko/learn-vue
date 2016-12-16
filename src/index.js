import './index.less';
import _ from 'lodash';
import axios from 'axios';
import Hello from './Hello.vue';

window.testClick = new Vue({
	el: '#click-test',
	data: {
		styleChild: {
			border: '1px solid black',
			height: '50px',
			width: '100px',
		},
		styleParent: {
			border: '1px solid red',
		},
	},
	methods: {
		childHandler: function (event) {
			alert('Child text: ' + event.currentTarget);
			this.styleChild = Object.assign({}, this.styleChild, {
				border: '1px solid yellow'
			});
		},
		parentHandler: function (event) {
			alert('Parent text: ' + event.currentTarget);
		},
	}
});

window.card = new Vue({
	el: '#card',
	data: {
		title: 'Cats',
		content: `Cats are a diverse group of animals of the clade Dinosauria that first appeared
      		during the Triassic period`,
		items: [
			{ id: 4, name: 'Wwwww' },
			{ id: 1, name: 'First' },
			{ id: 2, name: 'Second' }
		]
	}
});

window.card2 = new Vue({
	el: '#card-2',
	data: {
		message: 'You loaded this page on ' + new Date()
	}
});

window.app4 = new Vue({
	el: '#app-4',
	data: {
		todos: [
			{ text: 'Learn JavaScript' },
			{ text: 'Learn Vue' },
			{ text: 'Build something awesome' }
		]
	}
});

window.app5 = new Vue({
	el: '#app-5',
	data: {
		message: 'Hello, Vue.js'
	},
	methods: {
		reverseMessage: function () {
			this.message = this.message.split('').reverse().join('');
		}
	}
});


window.app6 = new Vue({
	el: '#app-6',
	data: {
		message: 'Hello Vue!'
	}
});

window.app7 = new Vue({
	el: '#example',
	data: {
		message: 'Hello'
	},
	computed: {
		// a computed getter
		reversedMessage: function () {
			// `this` points to the vm instance
			return this.message.split('').reverse().join('');
		}
	}
});

window.app7 = new Vue({
	el: '#demo',
	data: {
		firstName: 'Foo',
		lastName: 'Bar',
		age: 10,
		fullName: 'Foo Bar'
	},
	watch: {
		firstName: function (val) {
			this.fullName = val + ' ' + this.lastName;
		},
		lastName: function (val) {
			this.fullName = this.firstName + ' ' + val;
		}
	},
	computed: {
		computedFullName: function () {
			return this.firstName + ' ' + this.lastName + ' ' + this.age;
		}
	}
});

let Todo = {
	template: '<span>PARAM PAMPARAM</span>'
};

// createElement
const getChildrenTextContent = function (children) {
	return children.map(function (node) {
		return node.children
			? getChildrenTextContent(node.children)
			: node.text;
	}).join('');
};

const AnchoredHeading = {
	render: function (createElement) {
		// create kebabCase id
		const headingId = getChildrenTextContent(this.$slots.default)
			.toLowerCase()
			.replace(/\W+/g, '-')
			.replace(/(^-|-$)/g, '');

		return createElement(
			'h' + this.level,
			[
				createElement('a', {
					attrs: {
						name: headingId,
						href: '#' + headingId
					}
				}, this.$slots.default)
			]
		);
	},
	props: {
		level: {
			type: Number,
			required: true
		}
	}
};

const JsxTest = {
	props: ["tttt"],
	render(createElement) {     // eslint-disable-line
		return createElement('div', {
			template: '{{tttt}}'
		})
	}
};
/* eslint-disable no-multi-spaces */
// Since there is already a rich ecosystem of ajax libraries
// and collections of general-purpose utility methods, Vue core
// is able to remain small by not reinventing them. This also
// gives you the freedom to just use what you're familiar with.
window.watchExampleVM = new Vue({
	el: '#watch-example',
	data: {
		question: '',
		answer: 'I cannot give you an answer until you ask a question!',
		currentTodo: Todo,
		message: 'hello!'
	},
	watch: {
		// whenever question changes, this function will run
		question: function () {
			this.answer = 'Waiting for you to stop typing...';
			this.getAnswer();
		}
	},
	directives: {
		focus: {
			inserted: function (el) {
				console.log(Object.keys(el));
				el.focus();
			},
		},
		demo: {
			bind: function (el, binding, vnode) {
				const s = JSON.stringify;
				el.innerHTML =
					'name: '       + s(binding.name) + '<br>' +
					'value: '      + s(binding.value) + '<br>' +
					'expression: ' + s(binding.expression) + '<br>' +
					'argument: '   + s(binding.arg) + '<br>' +
					'modifiers: '  + s(binding.modifiers) + '<br>' +
					'vnode keys: ' + Object.keys(vnode).join(', ')
			}
		}
	},
	methods: {
		// _.debounce is a function provided by lodash to limit how
		// often a particularly expensive operation can be run.
		// In this case, we want to limit how often we access
		// yesno.wtf/api, waiting until the user has completely
		// finished typing before making the ajax request. To learn
		// more about the _.debounce function (and its cousin
		// _.throttle), visit: https://lodash.com/docs#debounce
		getAnswer: _.debounce(
			function () {
				let vm = this;
				if (this.question.indexOf('?') === -1) {
					vm.answer = 'Questions usually contain a question mark. ;-)';
					return;
				}
				vm.answer = 'Thinking...';
				axios.get('https://yesno.wtf/api')
					.then(function (response) {
						vm.answer = _.capitalize(response.data.answer);
					})
					.catch(function (error) {
						vm.answer = 'Error! Could not reach the API. ' + error;
					});
			},
			// This is the number of milliseconds we wait for the
			// user to stop typing.
			500
		)
	},
	components: {
		'todo-item': {
			template: '<span>IT\'S A NEW DAY IT\'s A NEW LIFE</span>'
		},
		'anchored-heading': AnchoredHeading,
		'jsx-test': JsxTest,
		Hello
	}
});

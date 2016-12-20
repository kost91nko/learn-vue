import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		greeting: "Hello, my friend"
	}
});

export default store;

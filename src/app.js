import { sync } from 'vuex-router-sync'

import store from './store';
import router from './router';

sync(store, router);
import Layout from './components/Layout';
import './assets/styles/index.less';

const app = new Vue({
	el: '#app',
	store,
	router,
	template: `
		<component :is="layout">
			<template slot="header">
				<router-view name="header"></router-view>
			</template>

			<router-view></router-view>

			<template slot="footer">
				<router-view name="footer"></router-view>
			</template>
		</component>
	`,
	data: {
		title: 'Home',
		info: `${new Date()},  BE-Mobile`,
		layout: Layout
	},
	components: {
		Layout
	}
});

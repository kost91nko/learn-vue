import VueRouter from 'vue-router';

Vue.use(VueRouter);

import HomeView from './views/HomeView';
import AboutView from './views/AboutView';
import NotFoundComponent from './components/NotFoundComponent';
import Header from './components/Header';
import Footer from './components/Footer';

const defaultLayoutComponents = {
	header: Header,
	footer: Footer
};

const getDefaultLayoutComponents = (mainComponent) => {
	return { default: mainComponent, ...defaultLayoutComponents };
};

const routes = [
	{ path: '/home' , name: 'home', components: getDefaultLayoutComponents(HomeView) },
	{ path: '/about', name: 'about', components: getDefaultLayoutComponents(AboutView) },
	{ path: '/', name: 'root', redirect: { name: 'home' } },
	{ path: '*', components: getDefaultLayoutComponents(NotFoundComponent) },
];

const router = new VueRouter({
	// mode: 'history', // HTML5 history mode
	routes
});

export default router;

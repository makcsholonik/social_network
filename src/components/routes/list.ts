import { Home } from '../pages/home/Home';

export const routes = [
	{ path : '/auth', element : Home, auth : false },
	{ path : '/', element : Home, auth : true },
	{ path : '/profile/:id', element : Home, auth : true },
	{ path : '/messages', element : Home, auth : true },
	{ path : '/message/:id', element : Home, auth : true },
	{ path : '/friends/:id', element : Home, auth : true }
];
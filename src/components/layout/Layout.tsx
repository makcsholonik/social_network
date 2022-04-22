import React, { FC } from 'react';
import { Header } from './header/Header';
import { Sidebar } from './sidebar/Sidebar';

interface LayoutProps {
	children : React.ReactNode;
}

export const Layout : FC<LayoutProps> = ( { children } ) => {
	return (
		<>
			<Header/>
			<div>
				<Sidebar/>
				{ children }
			</div>

		</>
	);
};

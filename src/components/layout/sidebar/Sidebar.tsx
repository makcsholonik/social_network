import React, { FC } from 'react';
import { Menu } from './Menu';
import { UserItems } from './UserItems';


export const Sidebar : FC = () => {
	return (
		<>
			<UserItems/>
			<Menu/>
		</>
	);
};
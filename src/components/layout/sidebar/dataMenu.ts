import * as Icons from '@mui/icons-material';
import { IMenuItem } from '../../../types';

export const menu: IMenuItem[] = [
	{
		title : 'Моя страница',
		link : '/profile',
		icons : Icons.Home
	},
	{
		title : 'Друзья',
		link : '/friends',
		icons : Icons.People
	},
	{
		title : 'Новости',
		link : '/',
		icons : Icons.Article
	}
];
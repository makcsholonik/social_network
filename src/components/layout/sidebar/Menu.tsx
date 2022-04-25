import React from 'react';
import { Card, ListItem, ListItemButton } from '@mui/material';
import { List, ListItemIcon, ListItemText } from '@material-ui/core';
import { menu } from './dataMenu';

export const Menu = () => {
	return (
		<Card
			variant={ 'outlined' }
			sx={ {
				padding : 1,
				backgroundColor : '#F1F7FA',
				border : 'none',
				borderRadius : 3
			} }>
			<List>
				{ menu.map ( item => (
					<ListItem disablePadding>
						<ListItemButton>
							<ListItemIcon>
								<item.icons/>
							</ListItemIcon>
							<ListItemText primary={ item.title }/>
						</ListItemButton>
					</ListItem>
				) ) }
			</List>
		</Card>
	);
};


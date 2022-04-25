import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Box, Card, ListItem, ListItemButton } from '@mui/material';
import { List, ListItemIcon, ListItemText } from '@material-ui/core';
import { QuestionAnswer } from '@mui/icons-material';
import { users } from './dataUsers';

export const UserItems : FC = () => {

	return (
		<Card
			variant={ 'outlined' }
			sx={ {
				padding : 1,
				backgroundColor : '#F1F7FA',
				border : 'none',
				borderRadius : 3
			} }>

			{ users.map ( user => (
				<Link
					key={ user._id }
					to={ `/profile/${ user._id }` }
					style={ {
						display : 'flex',
						alignItems : 'center',
						textDecoration : 'none',
						color : '#111',
						marginBottom : 12
					} }>
					<Box sx={ {
						position : 'relative',
						marginRight : 1,
						overflow : 'hidden',
						width : 50,
						height : 50
					} }>
						<Avatar
							src={ user.avatar }
							alt={ user.name }
							sx={ {
								width : 46,
								height : 46,
								borderRadius : '50%'
							} }
						/>
						{ user.isInNetwork &&
						<Box sx={ {
							backgroundColor : '#4FB14F',
							border : '2px solid #F1F7FA',
							width : 11,
							height : 11,
							position : 'absolute',
							bottom : 1,
							right : 1,
							borderRadius : '50%'
						} }/> }
					</Box>
					<span style={ { fontSize : 14 } }>{ user.name }</span>
				</Link>
			) ) }
			<List>
				<ListItem disablePadding>
					<ListItemButton>
						<ListItemIcon>
							<QuestionAnswer/>
						</ListItemIcon>
						<ListItemText primary="Inbox"/>
					</ListItemButton>
				</ListItem>
			</List>
		</Card>
	);
};

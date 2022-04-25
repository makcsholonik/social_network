import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Box, Card, ListItem, ListItemButton } from '@mui/material';
import { List, ListItemIcon, ListItemText } from '@material-ui/core';
import { QuestionAnswer } from '@mui/icons-material';

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
			<Link
				to={ '/profile' }
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
						src={ 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3fzw7ObCnHRzigy9dEj5Bu_SG2G-qbh7p_w&usqp=CAU' }
						alt={ 'text' }
						sx={ {
							width : 46,
							height : 46,
							borderRadius : '50%'
						} }
					/>
					<Box sx={ {
						backgroundColor : '#4FB14F',
						border : '2px solid #F1F7FA',
						width : 11,
						height : 11,
						position : 'absolute',
						bottom : 1,
						right : 1,
						borderRadius : '50%'
					} }/>
				</Box>
				<span style={ { fontSize : 14 } }>Maxim Sholonik</span>
			</Link>
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

import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';

export const UserItem : FC = () => {
	return (
		<Box sx={ { display : 'flex', alignItems : 'center' } }>
			<Link to={ '/profile' }>
				<Box sx={ { position : 'relative', marginRight : 5 } }>
					<img
						src="https://www.google.com/imgres?imgurl=https%3A%2F%2Freact.semantic-ui.com%2Fimages%2Favatar%2Flarge%2Felliot.jpg&imgrefurl=https%3A%2F%2Freact.semantic-ui.com%2Felements%2Fimage%2F&tbnid=ZAh-Uo_-SrHeFM&vet=12ahUKEwiesP_Nyqj3AhWY04UKHeplC2AQMyhgegUIARCeAQ..i&docid=t-59rcILXWVULM&w=650&h=650&q=avatar%20img%20react&ved=2ahUKEwiesP_Nyqj3AhWY04UKHeplC2AQMyhgegUIARCeAQ"
						alt=""/>
					<Box sx={ {
						backgroundColor : 'red',
						width : 4,
						height : 4,
						position : 'absolute',
						bottom : 2,
						left : 2
					} }/>
				</Box>
				<span>Maxim</span>
			</Link>
		</Box>
	);
};

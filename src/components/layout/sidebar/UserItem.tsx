import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';

export const UserItem : FC = () => {
	return (
		<Box>
			<Link to={ '/profile' } style={ { display : 'flex', alignItems : 'center', textDecoration : 'none' } }>
				<Box sx={ {
					position : 'relative',
					marginRight : 2,
					borderRadius : '50%',
					overflow : 'hidden',
					width : 50,
					height : 50
				} }>
					<img
						src={ 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN5hfIH2clMsAaRTqWTBzBuStEE81MyGNwrQ&usqp=CAU' }
						alt={ 'text' }

					/>
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

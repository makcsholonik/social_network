import React, { FC } from 'react';
import { Box, TextField } from '@mui/material';

export const AddPost : FC = () => {
	return (
		<Box sx={ {
			border : '1px solid #ccc',
			borderRadius : '10px',
			padding : 2,
			width : '100%'
		} }>
			<TextField
				label={ 'New post' }
				variant={ 'outlined' }
				InputProps={ {
					sx : {
						border : 'none',
						borderRadius : '25px',
						backgroundColor : '#F9F9F9'
					}
				} }
				sx={ {
					width : '100%'
				} }
			/>
		</Box>
	);
};





















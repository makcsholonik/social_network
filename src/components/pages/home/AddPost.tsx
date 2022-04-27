import React, { FC, useState } from 'react';
import { Box, TextField } from '@mui/material';
import { IPost, TypeSetState } from '../../../types';
import { users } from '../../layout/sidebar/dataUsers';

interface IAddPost {
	setPosts : TypeSetState<IPost[]>;
}

export const AddPost : FC<IAddPost> = ( { setPosts } ) => {

	const [content, setContent] = useState<string> ( '' );

	const addPostHandler = () => {
		setPosts ( prev => [...prev,
			{
				author : users[ 0 ],
				addData : new Date(),
				content,
			}
		] );
	};

	return (
		<Box sx={ {
			border : '1px solid #e2e2e2',
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
				onKeyPress={ addPostHandler }
				onChange={ e => setContent ( e.target.value ) }
				value={ content }
			/>
		</Box>
	);
};





















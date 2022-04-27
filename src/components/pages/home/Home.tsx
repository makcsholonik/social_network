import React, { FC, useState } from 'react';
import { Box } from '@mui/material';
import { AddPost } from './AddPost';
import { IPost } from '../../../types';

export const Home : FC = () => {

	const [post, setPost] = useState<IPost[]> ( [] );

	return (
		<Box>
			<AddPost setPost={ setPost }/>
		</Box>
	);
};


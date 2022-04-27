import React, { FC } from 'react';
import { IPost } from '../../../types';
import { Avatar, Box } from '@mui/material';
import { Link } from 'react-router-dom';

interface IPosts {
	posts : IPost[];

}

export const Posts : FC<IPosts> = ( { posts } ) => {
	return (
		<>
			{ posts.map ( post => (
				<Box sx={ {
					border : '1px solid #e2e2e2',
					borderRadius : '10px',
					padding : 2,
				} }>
					<Link
						key={ post.author._id }
						to={ `/profile/${ post.author._id }` }
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
								src={ post.author.avatar }
								alt={ post.author.name }
								sx={ {
									width : 46,
									height : 46,
									borderRadius : '50%'
								} }
							/>
						</Box>
						<div>
							<span style={ { fontSize : 14 } }>{ post.author.name }</span>
							<span style={ { fontSize : 14, opacity : '0.6' } }>{ post.addData }</span>
						</div>
					</Link>
					<p>
						{ post.content }
					</p>

				</Box>
			) ) }
		</>
	);
};
import React, { Dispatch, ReactNode, SetStateAction } from 'react';
import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';


export interface IUser {
	_id : number;
	avatar : string;
	name : string;
	isInNetwork : boolean;
}

export interface IMenuItem {
	title : string;
	link : string;
	icons : OverridableComponent<SvgIconTypeMap> & { muiName : string; };
}

export interface IRoutes {
	path : string;
	element : React.FC;
	auth : boolean;
}

export interface IPost {
	author : IUser,
	addData : any,
	content : string,
	image? : string
}

// setState Type
export type TypeSetState<T> = Dispatch<SetStateAction<T>>
import { IUser } from '../../../types';

export const users: IUser[] = [
	{
		_id: 1,
		avatar : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwKOSazFEfbpRlVcFgzP1295lj6dnTvalwhg&usqp=CAU',
		name : 'Igor Stravinsky',
		isInNetwork : true
	},
	{
		_id: 2,
		avatar : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR15MTlwwoElT_ut9Wg424LSEIOBHoG5dB3xg&usqp=CAU',
		name : 'Johann Sebastian Bach',
		isInNetwork : false
	},
	{
		_id: 3,
		avatar : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOCkfFozqM7NRC2RwYKlTThBKQCW7uq5VZEw&usqp=CAU',
		name : 'Ludwig van Beethoven',
		isInNetwork : false
	},
	{
		_id: 4,
		avatar : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ7R76aSdkzM1VZVsTNE4cqh2qr9eZ0v5llg&usqp=CAU',
		name : 'Wolfgang Amadeus Mozart',
		isInNetwork : true
	}
];
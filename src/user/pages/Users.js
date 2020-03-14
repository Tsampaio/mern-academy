import React from 'react';
import UsersList from '../components/UsersList';

const User = () => {
    const USERS = [
        {
            id: 'u1',
            name: 'Telmo Sampaio',
            image: 'https://avatars0.githubusercontent.com/u/13276002?s=460&u=a7fa449f48e44ae8214102b181c57a7dcfdc3299&v=4',
            places: 3
        }
    ];
    return <UsersList items={USERS}/>;
}

export default User;

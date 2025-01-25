import React, { useContext } from 'react';
import userContext from '../context/UserContext';

export function Profile() {
    const { user } = useContext(userContext);

    if (!user) {
        return (
            <div className="bg-red-100 text-red-700 p-4 rounded-md text-center">
                Please login
            </div>
        );
    } else {
        return (
            <div className="bg-green-100 text-green-700 p-4 rounded-md text-center">
                Hello, {user.username}
            </div>
        );
    }
}

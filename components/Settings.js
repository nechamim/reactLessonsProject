import React, { useContext } from 'react';
import { UserContext } from '../context/User.context';


export const Settings = () => {
    // שליפת הנתונים מה context
    // ע"י useContext
    // שמקבל את הקונטקסט שאת ערכו מעונינים לשלוף
    const { user } = useContext(UserContext);
    return <h1>Settings of { user.name } </h1>
}
import React, { useState, useEffect } from 'react';

export const UserContext = React.createContext({
    name: 'aaa',
    birthday: '12-01-1990',
});

export const UserContextProvider = (props) => {
    // props.children - ערך שמור שמכיל את כל התוכן שנשלח בתוך הקומפוננטה
    const { children } = props;
    const [user, setUser] = useState({});

    useEffect(() => {
        setTimeout(() => {
            setUser({ name: 'vvvv', birthday: '10-12-1998'});
        }, 2000);
    }, []);

    const contextValue = {
        user,
        logout() { alert('logout'); },
    };

    return <UserContext.Provider value={contextValue}>
        { children }
    </UserContext.Provider>;
}
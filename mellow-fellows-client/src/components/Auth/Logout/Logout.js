import { useContext, useEffect } from 'react';
import { Context as AuthContext } from '../../../context/AuthContext';

const Logout = () => {

    const { signout } = useContext(AuthContext);

    useEffect(() => {
        signout();
    }, [signout]);

    return null;

};

export default Logout;
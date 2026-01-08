import React, { use, useContext, } from 'react';
import { AuthContex } from '../AuthContex';

const usehook = () => {
    const authInfo = useContext(AuthContex)
    return authInfo
};

export default usehook;
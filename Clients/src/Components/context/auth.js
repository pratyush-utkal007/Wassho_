/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useEffect, useState } from 'react';
import React from 'react';
import PropTypes from 'prop-types';

const AuthContext = createContext();

const AuthProvider = ({children})=>{
    const [auth, setAuth] = useState({
        user:null,
        token:"",
    });

    useEffect(()=>{
        const data = localStorage.getItem("token")
        if(data){
            const parseData = JSON.parse(data)
            setAuth({
                ...auth,
                user:parseData.user,
                token:parseData.token
              });
        }
    },[]);

    return(
        <AuthContext.Provider value={[auth, setAuth]}>
            {children}
        </AuthContext.Provider>
    )
}

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };
  
const useAuth = () => useContext(AuthContext)

export {useAuth, AuthProvider}
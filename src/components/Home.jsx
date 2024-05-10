import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import React from 'react';

const Home = () => {
    const navigate = useNavigate();
    useEffect(() => {
        let username = sessionStorage.getItem('username');
        if (username === '' || username === null) {
            navigate('/login')
        }
    }, []);

    const logOut = () => {
        sessionStorage.clear();
        navigate('/login')
    }
    return (
        <div>
            <h1 className="text-center">Bienvenido</h1>
            <br></br>
            <button  className="btn btn-danger" onClick={logOut}>Cerrar Sesion</button>
            
        </div>
    );
}

export default Home;
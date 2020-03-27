import React from 'react';
import {FiLogIn} from 'react-icons/fi';

import './style.css';

import heroesImage from '../../assets/heroes.png';
import logoImage from '../../assets/logo.svg';

export default function Login() {
    return (

        <div className="login-container">
            <section className="form">
                <img src={logoImage} alt="logo" />

                <form>
                    <h1> Faça seu login</h1>

                    <input placeholder="Seu Id"/>
                    <button className="button" type="submit">Entrar</button>

                    <a href="/register">
                        <FiLogIn size={16} color="#E02041"/>
                        Não tenho cadastro
                    </a>                    
                </form>
            </section>
            <img src={heroesImage} alt="heroes" />
        </div>

    );
}
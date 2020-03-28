import React,{useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiLogIn} from 'react-icons/fi';

import './style.css';
import api from '../../services/api';

import heroesImage from '../../assets/heroes.png';
import logoImage from '../../assets/logo.svg';

export default function Login() {
    
    const [id, setId] = useState('');
    const history = useHistory();

    async function handlerLogin(e){
        e.preventDefault();

        try{
            const response = await api.post('sessions', {id});

            localStorage.setItem('ongId',id);
            localStorage.setItem('ongName',response.data.name);

            history.push('/profile');
        }catch{
            alert('Falha no login, tente novamente');
        }
    }
    return (

        <div className="login-container">
            <section className="form">
                <img src={logoImage} alt="logo" />

                <form onSubmit={handlerLogin}>
                    <h1> Faça seu login</h1>

                    <input 
                        placeholder="Seu Id"
                        value={id}
                        onChange={e=>setId(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041"/>
                        Não tenho cadastro
                    </Link>                    
                </form>
            </section>
            <img src={heroesImage} alt="heroes" />
        </div>

    );
}
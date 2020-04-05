import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom'
import {FiLogIn} from 'react-icons/fi'
import './styles.css';
import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg'
import api from '../../services/api'

export default function Logon() {
    const [id, setId] = useState('');
    const history = useHistory();

   async function handleLogin(e) {
       e.preventDefault();
       try {
           const response = await api.post('sessions', {id});
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.ong.name)
            history.push('profile');
       }catch (e) {
         alert('Falha no login');
       }
    }

    return (
        <div className="logon-container">
            <session className="form">
                <img src={logoImg} alt="Be The Hero"/>
                <form onSubmit={handleLogin}>
                    <h1> Faça seu logon</h1>
                    <input placeholder="Sua ID"
                            value={id}
                            onChange={e => setId(e.target.value)}/>
                    <button className="button" type="submit">Entrar</button>
                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041"/>
                        Não tenho cadastro
                    </Link>
                </form>
            </session>
            <img src={heroesImg} alt="Heroes"/>
        </div>
    );


}
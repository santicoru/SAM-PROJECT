import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useAuth } from '../shared/context/auth-context';
import { useHistory } from 'react-router-dom';
import { deleteAccount } from '../http/authService';
export function ProfileColaborator() {

  const { logout } = useAuth();
  const history = useHistory();

  const out = () => {
    logout();
    history.push('/catalogue');
  }

  const delAccount = () => {
    const reply = prompt('esta seguro de que quiere eliminar la cuenta ? (y / Y)');
    if (reply === 'y' || reply === 'Y') {
      deleteAccount();
      history.push('/catalogue');
    }
  }

  return (
    <React.Fragment>
      <Header />
      <ul>
        <li>MODIFICAR CONTRASEÑA</li>
        <li><Link to='/productCo'>GESTIONAR MIS PRODUCTOS</Link></li>
        <li onClick={out}>CERRAR SESIÓN</li>
        <li onClick={delAccount}>ELIMINAR CUENTA</li>
      </ul>
      <Footer />
    </React.Fragment>
  )
}
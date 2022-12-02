import React, { useState, useEffect } from 'react'
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';
import { collection, onSnapshot, query, where } from "firebase/firestore";
import db from '../../firebase';

export default function Navbar({ userEmail }) {
  const navigate = useNavigate();
  const [search, setSearch] = useState([]);
  const [tipo, setTipo] = useState("");
  const [pcdata, setPcdata] = useState([]);
  const [user, setUser] = useState([]);
  const [email, setEmail] = useState();

  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user !== null) {
      const email = user.email;
      const uid = user.uid;
      setEmail(email);
    }
  });

  const Logout = (e) => {
    e.preventDefault();
    const auth = getAuth();
    signOut(auth).then(() => {
      setTimeout(() => {
        navigate('/');
      }, 1000);
      // alert("Saiu")
    }).catch((error) => {
    });
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand mr-2" href="#">Bem vindo(a): {email}</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#conteudoNavbarSuportado" aria-controls="conteudoNavbarSuportado" aria-expanded="false" aria-label="Alterna navegação">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="conteudoNavbarSuportado">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to={"/home"} >Home <span className="sr-only">(página atual)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/cadastro"} >Cadastrar<span className="sr-only">(página atual)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/consulta"} >Consulta<span className="sr-only">(página atual)</span></Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Opções
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Ação</a>
                <a className="dropdown-item" href="#">Outra ação</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Algo mais aqui</a>
              </div>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Pesquisar" aria-label="Pesquisar"
              value={""} onChange={(e) => setSearch(e.target.value)} />
            <button className="btn btn-primary my-2 my-sm-0" type="submit">Pesquisar</button>
            <button type={'submit'} className='btn btn-info mx-2' onClick={Logout} >Sair</button>
          </form>
        </div>
      </nav>
    </>
  )
}

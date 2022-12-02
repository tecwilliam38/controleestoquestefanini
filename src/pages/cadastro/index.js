import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { serverTimestamp } from 'firebase/firestore';
import db from '../../firebase/index';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


import {
  addDoc,
  collection,
} from "firebase/firestore";

export default function Cadastro() {
  const [user, setUser] = useState();
  const [userEmail, setUserEmail] = useState();
  const [userTelefone, setUserTelefone] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const cadastrar = (e) => {
    e.preventDefault();
    const docRef = addDoc(collection(db, "users"), {
      name: user,
      tel: userTelefone,
      mail: userEmail,
      password: password,
      timestamp: serverTimestamp()
    });
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, userEmail, password)
      .then((userEmail) => {
        setTimeout(() => {
          navigate('/home');
        }, 1000);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(error, errorMessage);
      });
    setUserEmail("");
    setPassword("");
    setUser("");
    setUserTelefone("");
  };
  return (
    <>
      <div className='bgHome d-flex '>
        <div className='row justify-content-center'>
          <div className='col col-md-12'>
            <form class="form-signin text-center text-light bgCard p-3 mx-3"  >
              <h1 class="h3 font-weight-normal m-3">Cadastro</h1>
              <label for="inputNome" class="sr-only">Nome Completo</label>
              <input type="text" id="inputNome" class="form-control my-2" placeholder="Nome completo" required autofocus
                value={user} onChange={(e) => setUser(e.target.value)}
              />
              <label for="inputTelefone" class="sr-only">Contato</label>
              <input type="text" id="inputTelefone" class="form-control my-2" placeholder="Seu telefone" required autofocus
                value={userTelefone} onChange={(e) => setUserTelefone(e.target.value)}
              />
              <label for="inputEmail" class="sr-only">Endereço de email</label>
              <input type="email" id="inputEmail" class="form-control my-2" placeholder="Seu email" required autofocus value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)} />
              <label for="inputPassword" class="sr-only">Senha</label>
              <input type="password" id="inputPassword" class="form-control my-2" placeholder="Senha" required
                value={password} onChange={(e) => setPassword(e.target.value)}
              />
              <button class="btn btn-lg btn-primary btn-block mb-4" type="submit" onClick={cadastrar}>Cadastrar</button>
              <footer>
                <Link to="/" className='card-ttext my-3 py-3 text-light'>Voltar a tela de login</Link>
              </footer>
            </form>
          </div>
          <p class="mt-5 mb-3 text-light">William Ferreira &copy; 1981-2022</p>
        </div>
      </div>
    </>
  )
}

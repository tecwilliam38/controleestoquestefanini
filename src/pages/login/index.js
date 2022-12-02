import React, {useState, useEffect} from 'react';
import { getAuth, signInWithEmailAndPassword  } from "firebase/auth";
import { Link } from 'react-router-dom';
import db from '../../firebase/index';
import { useNavigate } from 'react-router-dom';


export default function Login() {
  const [userEmail, setUserEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, userEmail, password)
      .then((userCredential) => {        
        const user = userCredential.user;        
        setTimeout(()=> {
          navigate('/home');
        },1000);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(error);      
      });
    setUserEmail("");
    setPassword("");
  };


  return (
    <>    
    <form class="form-signin text-center text-light bgCard p-3" >      
      <h1 class="h3 font-weight-normal m-3">Faça login</h1>
      <label for="inputEmail" class="sr-only">Endereço de email</label>
      <input type="email" id="inputEmail" class="form-control my-2" placeholder="Seu email" required autofocus
      value={userEmail} onChange={(e)=>setUserEmail(e.target.value)} />
      <label for="inputPassword" class="sr-only">Senha</label>
      <input type="password" id="inputPassword" class="form-control my-2" placeholder="Senha" required
      value={password} onChange={(e)=>setPassword(e.target.value)}/>      
      <button class="btn btn-lg btn-primary btn-block mb-4" type="submit" onClick={login} >Login</button>
      <footer>
        <Link to="/cadastrarUser"  className='card-ttext my-3 py-3 text-light'>Ou faça seu cadastro</Link>
      </footer>
    </form>
    </>
  )
}

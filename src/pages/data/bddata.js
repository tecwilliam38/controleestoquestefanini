import React, { useState } from 'react'
import { doc, setDoc, addDoc, collection } from "firebase/firestore";
import db from '../../firebase/index';
import Navbar from '../../components/navbar';

import { useNavigate } from 'react-router-dom';

export default function BdScreen() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState();
  const [tipo, setTipo] = useState();
  const [wp, setWp] = useState();
  const [cadastro, setCadastro] = useState();
  const [serviceTag, setServiceTag] = useState();
  // const [mensagem, setMensagem] = useState('');
  const [status, setStatus] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [pcdata, setPcdata] = useState([]);


const teste = (e)=>{
  e.preventDefault();
  if(db){
    addDoc(collection(db, wp), {
      id: id,
      wp: wp,
      st: serviceTag,
      status: status,
    });    
    setTimeout(() => {
      navigate("/home");
    }, 2000);
    alert("Cadastrou")
  }else{
    setDoc(doc(db, wp), {
      id:id,
      wp: wp,
      st: serviceTag,
      status: status,
     });   
     setTimeout(() => {
      navigate("/home");
    }, 2000);
    alert("Adicionou");
  }
   setId("");
   setWp("");
   setServiceTag("");
   setStatus("");   
}

  return (
    <>
      <div className='startCss'>
        <Navbar />
        <table className="table mt-1 col-5 col-md-12">
          <thead className="thead-dark">
            <tr>
              <th scope="col" className='h3'>WP, AC, MAC</th>
              <th scope="col" className='h3'>Asset equipamento</th>
              <th scope="col" className='h3'>Service tag</th>
              <th scope="col" className='h3'>Status</th>
              <th scope="col" className='h3'></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <select class="custom-select border-0" id="inputGroupSelect01" value={wp || ""} onChange={(e) => setWp(e.target.value)}>
                  <option selected>Escolher...</option>
                  <option value="WP">WP</option>
                  <option value="AC">AC</option>
                  <option value="MAC">MAC</option>
                </select>
                {/* <input className='border-0' type={"text"} value={tipo} onChange={tipo} placeholder={"Digite o tipo"} /> */}
              </td>
              <td>             
                <input className='border-0' type={"text"} value={id || ""} onChange={(e) => setId(e.target.value)} placeholder={"Asset"} />
              </td>
              <td>
                <input className='border-0' type={"text"} value={serviceTag || ""} onChange={(e) => setServiceTag(e.target.value)} placeholder={"Service Tag"} />
              </td>
              <td>
              <select class="custom-select border-0" id="inputGroupSelect01" value={status || ""} onChange={(e) => setStatus(e.target.value)}>
                  <option selected>Escolher...</option>
                  <option value="Corp">Corporativo</option>
                  <option value="CSV">CSV</option>
                  <option value="Configurar Imagem">Configurar Imagem AutoPilot</option>
                  <option value="Office">Office</option>
                  <option value="Drivers">Configurar Imagem AutoPilot</option>
                </select>
                {/* <input className='border-0' type={"text"} value={status || ""} onChange={(e) => setStatus(e.target.value)} placeholder={"Digite o nome do Usuário"} /> */}
              </td>
              <td>
              <div className='row m-1'>
                <button type='submit' className='btn btnShadow btn-lg  btn-secondary btn-edit' onClick={teste}>Cadastrar PC</button>
                {/* <button type='submit' className='btn btnShadow btn-lg  btn-primary btn-edit' onClick={addPost}>Editar PC</button> */}
              </div>
              </td>
            </tr>
          </tbody>
        </table>
        <form>
        </form>
      </div>
    </>
  );





}
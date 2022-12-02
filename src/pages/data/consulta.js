import React, { useState, useEffect } from 'react'
import { doc, setDoc, addDoc, collection, onSnapshot } from "firebase/firestore";
import { Link, useNavigate } from 'react-router-dom';
import db from '../../firebase';
import Navbar from '../../components/navbar';

export default function Consulta() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [cadastro, setCadastro] = useState();
    const [mensagem, setMensagem] = useState('')
    const [customerName, setCustomerName] = useState("");
    const [customerPassword, setCustomerPassword] = useState("");
    const [tipo, setTipo] = useState("");
    const [pcdata, setPcdata] = useState([]);

    
  
    const consulta = (e) => {
      const refdb = collection(db, tipo);
      onSnapshot(refdb, (snapshot) => {
        setPcdata(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
    }
  return (
    <>
     <div className='startCss'>
        <Navbar />
        <div className='row'>
          <div className='col col-md-2 col-12'>
            <ul class="nav flex-column col-12 ml-md-2 px-md-3 px-1 py-md-3 menuLateral">
              <li className='p-2'>Consultar</li>
              <select className="custom-select" id="inputGroupSelect01" value={tipo || ""} onChange={(e) => setTipo(e.target.value)}>
                <option selected>Escolher...</option>
                <option value="WP">WP</option>
                <option value="AC">AC</option>
                <option value="MAC">MAC</option>
              </select>
              <button type='submit' className='btn btn-block btn-success' onClick={consulta}>Consulta</button>
            </ul>
          </div>
          <div className='col col-md-10 col-12'>           
            <form>
              {pcdata?.map(({ id, data }) => (
                <>                  
                  <div className="row mt-1 bg-light d-flex justify-content-between borderStyle mr-md-2" key={id} >
                    <div className="form-group col-md-2 col-4 mx-md-0 mx-1">
                      <label for="inputWp">WP, MAC, AC</label>
                      <input type="text" className="form-control" id="inputEmail4" value={data.wp} />
                    </div>
                    <div className="form-group col-md-2 col-4 mx-md-0 mx-1">
                      <label for="inputWp">Asset</label>
                      <input type="text" className="form-control" id="inputEmail4" value={data.id} />
                    </div>
                    <div className="form-group col-md-2 col-3 mx-md-0 mx-1">
                      <label for="inputWp">Service tag</label>
                      <input type="text" className="form-control" id="inputEmail4" value={data.st} />
                    </div>
                    <div className="form-group col-md-2 col-4 mx-md-0 mx-1">
                      <label for="inputWp">Status</label>
                      <input type="text" className="form-control" id="inputEmail4" value={data.status} />
                    </div>
                    <div className="form-group col-md-2 col-4 mx-md-0 mx-1">
                      <label for="inputWp">Disponibilidade</label>
                      <input type="text" className="form-control" id="inputEmail4" value={data.disponibilidade} />
                    </div>
                    <div className="form-group col-md-2 col-4 mx-md-0 mx-1 d-flex align-items-center">
                      <button type='submit' className='btn btn-block btn-secondary m-1' onClick={consulta}>Editar</button>
                      <button type='submit' className='btn btn-block btn-danger m-1' onClick={consulta}>Excluir</button>
                    </div>
                  </div>
                </>
              ))}
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

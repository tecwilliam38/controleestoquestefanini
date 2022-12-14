import React, { useState } from 'react'
import { doc, setDoc, addDoc, collection, onSnapshot, serverTimestamp } from "firebase/firestore";
import db from '../../firebase/index';
import Navbar from '../../components/navbar';
import { useNavigate } from 'react-router-dom';

export default function CadastroScreen() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [id, setId] = useState();
    const [asset, setAsset] = useState();
    const [tipo, setTipo] = useState();
    const [wp, setWp] = useState();
    const [cadastro, setCadastro] = useState();
    const [serviceTag, setServiceTag] = useState();
    const [mensagem, setMensagem] = useState('');
    const [status, setStatus] = useState("");
    const [disponibilidade, setDisponibilidade] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [pcdata, setPcdata] = useState([]);

    const addComputer = (e) => {
        e.preventDefault();
        // if(id=! null){
        //     setId = id + 1;
        // }
          addDoc(collection(db, wp), {
        // setDoc(doc(db, wp), {
            id: id,
            wp: wp,
            st: serviceTag,
            status: status,
            disponibilidade: disponibilidade,
            msg: mensagem,
            timestamp: serverTimestamp()
        });
        setTimeout(() => {
            navigate("/home");
        }, 2000);
        alert("Adicionou");
        setId("");
        setWp("");
        setServiceTag("");
        setStatus("");
    }

    return (
        <div className='fluid-container'>
            <Navbar />
            <section className='container d-flex justify-content-around shadow pb-5 py-md-3 mt-md-2 mt-1'>
                <form>
                    <div className="form-row mx-md-2 mx-1 p-2 justify-content-around " >
                        <div className="form-group col-md-2 col-4 mx-md-0 mx-1">
                            <label for="inputWp">WP, MAC, AC</label>
                            <select id="inputWp" className="form-control col-md-12" value={wp || ""} onChange={(e) => setWp(e.target.value)}>
                                <option selected>Escolher...</option>
                                <option value="WP">WP</option>
                                <option value="AC">AC</option>
                                <option value="MAC">MAC</option>
                            </select>
                        </div>
                        <div className="form-group col-md-3 col-7">
                            <label for="inputAsset">Asset</label>
                            {/* <input type="text" className="form-control col-md-12" id="inputEmail4" value={asset || ""} onChange={(e) => setAsset(e.target.value)} placeholder={"Digite o asset..."} /> */}
                            <input type="text" className="form-control col-md-12" id="inputEmail4" value={id || ""} onChange={(e) => setId(e.target.value)} placeholder={"Digite o asset..."} />
                        </div>
                        <div className="form-group col-md-3 col-6">
                            <label for="inputPassword4">Service tag</label>
                            <input className='form-control col-12 col-md-12' type={"text"} value={serviceTag || ""} onChange={(e) => setServiceTag(e.target.value)} placeholder={"Service Tag"} />
                        </div>
                        <div className="form-group col-md-2 col-5  p-0">
                            <label for="inputWp">Status</label>
                            <select id="inputWp" className="form-control col-12 col-md-12" value={status || ""} onChange={(e) => setStatus(e.target.value)}>
                                <option selected>Escolher...</option>
                                <option value="Corp">Corporativo</option>
                                <option value="CSV">CSV</option>
                                <option value="Configurar Imagem">Configurar Imagem AutoPilot</option>
                                <option value="Office">Office</option>
                                <option value="Drivers">Configurar Imagem AutoPilot</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-row mx-md-2 mx-1 p-2 justify-content-around ">
                        <div className="form-group col-md-3 col-8">
                            <label for="inputAsset">Disponibilidade</label>
                            <select id="inputWp" className="form-control" value={disponibilidade || ""} onChange={(e) => setDisponibilidade(e.target.value)}>
                                <option selected>Escolher...</option>
                                <option value="Dispon??vel">Dispon??vel</option>
                                <option value="N??o dispon??vel">N??o dispon??vel</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlTextarea1">Log</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" style={{resize: "none"}} 
                            value={mensagem || ""} onChange={(e) => setMensagem(e.target.value)}></textarea>
                        </div>
                    </div>
                    <div className="form-group col-md-5 col-4 MX-4">
                        <button type='submit' className='btn btn-lg  btn-secondary btn-edit' onClick={addComputer}>Cadastrar PC</button>
                    </div>
                </form>
            </section>
        </div>
    )
}

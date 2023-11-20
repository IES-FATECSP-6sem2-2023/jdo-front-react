import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import ContaService from '../../../services/ContaService';
import './EsqueciSenha.css';
import LockIcon from '/public/assets/imagens/icones/LockIcon';
import MailIcon from '/public/assets/imagens/icones/MailIcon';
import VisibilityIcon from '/public/assets/imagens/icones/VisibilityIcon';
import VisibilityOffIcon from '/public/assets/imagens/icones/VisibilityOffIcon';
import LogoBranca from '/public/assets/imagens/vetores/logo-branco.png';
import { validateEmail, validatePassword } from '/src/utils/Regex.jsx';

function EsqueciSenha() {
  const navigate = useNavigate();
  const [visibilityStatus, setVisibilityStatus] = useState(false);
  
  const [email, setEmail] = useState('');
  const [emailErr, setEmailErr] = useState(false);
  const [novaSenha, setNovaSenha] = useState('');
  const [novaSenhaErr, setNovaSenhaErr] = useState(false);
  const [confirmaNovaSenha, setConfirmaNovaSenha] = useState('');
  const [confirmaNovaSenhaErr, setConfirmaNovaSenhaErr] = useState(false);

  const toggleVisibility = (e) => {
		e.preventDefault();
		setVisibilityStatus(!visibilityStatus);
	}

  const redefine = async (e) => {
    e.preventDefault();

    if (!validateEmail.test(email)) {
			setEmailErr(true);
		} else if (!validatePassword.test(novaSenha)) {
			setNovaSenhaErr(true);
		} else if (!validatePassword.test(confirmaNovaSenha)) {
			setConfirmaNovaSenhaErr(true);
		} else if (novaSenha !== confirmaNovaSenha) {
      toast.error('As senhas não correspondem');
    }else {
      try {
        const loginSucesso = await ContaService.atualizaConta(null, null, email, novaSenha);
		if (loginSucesso) { 
	        toast.success("Senha redefinida com sucesso!")
        	navigate("/login");
      	}
    } catch (error) {
		if (error.response.status === 404) {
			toast.error("Email não cadastrado!");
		} else {
			toast.error("Erro ao redefinir senha!");
		}
    }
      
    }

  }

  return (
    <div className="container bg-login">
      <div className="row">
        <img src={LogoBranca} width="400px" height="200px" alt="" />
      </div>
      <div className="row bg-white">
        <div className="col">
          <h2 className='title title-second'>Redefina  senha</h2>
          <form className='form form-redefine' onSubmit={redefine}>
            <label htmlFor="email" className='label-input'>
              <MailIcon />
              <input
                type="email"
                name="email"
                placeholder='E-mail'
                value={email}
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailErr(false);
                }} />
            </label>
            {emailErr && <span>O e-mail digitada é inválido.</span>}
            <label htmlFor="" className='label-input'>
              <LockIcon />
              <input
                type={visibilityStatus ? "text" : "password"}
                name="novaSenha"
                placeholder='Digite a nova senha'
                value={novaSenha}
                required
                onChange={(e) => {
                  setNovaSenha(e.target.value);
                  setNovaSenhaErr(false);
                }} />
                <button className="btn-visibility" onClick={toggleVisibility}>{visibilityStatus ? <VisibilityIcon /> : <VisibilityOffIcon />}</button>
            </label>
            {novaSenhaErr && <span>A senha digitada é inválida.</span>}
            <label htmlFor="" className='label-input'>
              <LockIcon />
              <input
                type={visibilityStatus ? "text" : "password"}
                name="confirmaNovaSenha"
                placeholder='Confirme a senha digitada'
                value={confirmaNovaSenha}
                required
                onChange={(e) => {
                  setConfirmaNovaSenha(e.target.value);
                  setConfirmaNovaSenhaErr(false);
                }} />
            </label>
            {confirmaNovaSenhaErr && <span>A senha digitada é inválida.</span>}
            <a href="/login" className='password'>Voltar ao login</a>
            <button className='btn btn-second' type="submit">redefinir</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EsqueciSenha;

import React, { useState } from 'react';
import LogoBranca from '/src/assets/imagens/vetores/logo-branco.png';
import MailIcon from '/src/assets/imagens/icones/MailIcon';
import LockIcon from '/src/assets/imagens/icones/LockIcon';
import './EsqueciSenha.css';
import { useNavigate } from 'react-router-dom';

function EsqueciSenha() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [confirmaNovaSenha, setConfirmaNovaSenha] = useState('');
  const [senhaErro, setSenhaErro] = useState('');

  const handleNovaSenhaChange = (event) => {
    setNovaSenha(event.target.value);
  }

  const handleConfirmaNovaSenhaChange = (event) => {
    setConfirmaNovaSenha(event.target.value);
  }

  const redefine = (event) => {
    event.preventDefault();

    if (novaSenha !== confirmaNovaSenha) {
      setSenhaErro('As senhas não correspondem');
      return;
    }

    navigate('/login');
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
            <label htmlFor="" className='label-input'>
              <MailIcon />
              <input
                type="email"
                name="email"
                placeholder='E-mail'
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label htmlFor="" className='label-input'>
              <LockIcon />
              <input
                type="password"
                name="novaSenha"
                placeholder='Digite a nova senha'
                value={novaSenha}
                required
                onChange={handleNovaSenhaChange}
              />
            </label>
            <label htmlFor="" className='label-input'>
              <LockIcon />
              <input
                type="password"
                name="confirmaNovaSenha"
                placeholder='Confirme a senha digitada'
                value={confirmaNovaSenha}
                required
                onChange={handleConfirmaNovaSenhaChange}
              />
            </label>
            {senhaErro && <p className='description color-red'>{senhaErro}</p>}
            <a href="/login" className='color-red password'>Voltar ao login</a>
            <button className='btn btn-second' type="submit">redefinir</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EsqueciSenha;

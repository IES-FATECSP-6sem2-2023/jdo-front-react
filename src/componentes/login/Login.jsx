import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import './Login.css';
import LockIcon from '/src/assets/imagens/icones/LockIcon';
import MailIcon from '/src/assets/imagens/icones/MailIcon';
import TagIcon from '/src/assets/imagens/icones/TagIcon';
import UserIcon from '/src/assets/imagens/icones/UserIcon';
import VisibilityIcon from '/src/assets/imagens/icones/VisibilityIcon';
import VisibilityOffIcon from '/src/assets/imagens/icones/VisibilityOffIcon';
import VolumeOffIcon from '/src/assets/imagens/icones/VolumeOffIcon';
import VolumeOnIcon from '/src/assets/imagens/icones/VolumeOnIcon';
import Logobranco from '/src/assets/imagens/vetores/logo-branco.png';
import useAuthConta from '/src/hooks/AuthConta';
import { validatePassword, validateEmail } from '/src/utils/Regex.jsx';

function Login({musicaAtiva, toggleMusica}) {
	const navigate = useNavigate();
	const [visibilityStatus, setVisibilityStatus] = useState(false);
	const { signin, signup } = useAuthConta();
	
	const [login, toggle] = React.useState(true);

	
	const [nome, setNome] = useState("");
	const [nomeErr, setNomeErr] = useState(false)
	const [userName, setUserName] = useState("");
	const [userNameErr, setUserNameErr] = useState(false)
	const [email, setEmail] = useState("");
	const [emailErr, setEmailErr] = useState(false)
	const [senha, setSenha] = useState("");
	const [senhaErr, setSenhaErr] = useState(false);	

	const toggleVisibility = (e) => {
		e.preventDefault();
		setVisibilityStatus(!visibilityStatus);
	}

	const toggleVolume = () => {
        toggleMusica()
    }
	
	const cadastrar = async (e) => {
		e.preventDefault();
		if (!nome) {
			setNomeErr(true);
		} else 
		if (!userName) {
			setUserNameErr(true);
		} else
		if (!validateEmail.test(email)) {
			setEmailErr(true);
		} else
		if (!validatePassword.test(senha)) {
			setSenhaErr(true);
		} else {
			const cadastroSucesso = await signup(nome, userName, email, senha);
			cadastroSucesso ? toggle(!login) : '';
		}
	}

	const entrar = async (e) => {
		e.preventDefault();
		if (!validateEmail.test(email)) {
			setEmailErr((prevEmailErr) => (prevEmailErr = true));
		}else if (!validatePassword.test(senha)) {
			setSenhaErr((prevSenhaErr) => (prevSenhaErr = true));
		} else {
			const loginSucesso = await signin(email, senha);
			loginSucesso ? navigate("/menu") : '';
		}
	}

	return (
		<div className='bg-login'>
			<button className='btn-som' onClick={toggleVolume}>
                            {musicaAtiva ? <VolumeOnIcon /> : <VolumeOffIcon />}
                        </button>
			<div className={`container ${login ? "cadastro-js" : "login-js"}`}>
				<img src={Logobranco} alt=""/>
				<div className="content first-content">

					<div className="first-column">
						<h2 className="title title-primary">Bem vindo de volta!</h2>
						<p className="description description-primary">Se você já tem cadastro basta acessar<br/>sua conta com suas credenciais.</p>
						<button className="btn btn-primary" onClick={() => toggle(false)}>login</button>
						
					</div>{/* Primeira Coluna */}

					<div className="second-column">
						<h2 className="title title-secondary">Cadastre-se</h2>
						<form className="form">
							<label htmlFor="nome" className="label-input">
								<UserIcon />
								<input type="text" placeholder=" Nome" value={nome} onChange={(e) => {
									setNome(e.target.value);
									setNomeErr(false);
									}} />
							</label>
							{nomeErr && <span>{!nome ? 'O nome é obrigatório.' : ''}</span>}
							<label htmlFor="user" className="label-input">
								<TagIcon />
								<input type="text" placeholder=" Usuário" value={userName} onChange={(e) => {
									setUserName(e.target.value);
									setUserNameErr(false);
									}} />
							</label>
							{userNameErr && <span>{!userName ? 'O usuário é obrigatório.' : ''}</span>}
							<label htmlFor="email" className="label-input">
								<MailIcon />
								<input type="email" placeholder=" E-mail" value={email} onChange={(e) => {
									setEmail(e.target.value);
									setEmailErr(false);
									}} />
							</label>
							{emailErr && <span>{!email ? 'O e-mail é obrigatório.' : 'O e-mail digitada é inválido.'}</span>}
							<label htmlFor="senha" className="label-input">
								<LockIcon />
								<input type={visibilityStatus ? "text" : "password"} placeholder=" Senha" value={senha} onChange={(e) => {
									setSenha(e.target.value);
									setSenhaErr(false)
									}} />
								<button className="btn-visibility" onClick={toggleVisibility}>{visibilityStatus ? <VisibilityIcon /> : <VisibilityOffIcon />}</button>
							</label>
							{senhaErr && <span>{!senha ? 'A senha é obrigatória.' : 'A senha digitada é inválida.'}</span>}
							<button className="btn btn-second" onClick={cadastrar}>cadastrar</button>
						</form>
					</div>{/* Segunda Coluna */}

				</div>{/* Primeiro Conteúdo */}

				<div className="content second-content">

					<div className="first-column">
						<h2 className="title title-primary">Olá!</h2>
						<p className="description description-primary">Entre com suas informações pessoais<br/>e comece sua jornada.</p>
						<button className="btn btn-primary" onClick={() => toggle(true)}>cadastre-se</button>
						
					</div>{/* Primeira Coluna */}

					<div className="second-column">
						<h2 className="title title-second">Login</h2>
						<form className="form">
							<label htmlFor="email" className="label-input">
								<MailIcon />
								<input type="email" placeholder=" E-mail" value={email} onChange={(e) => {
									setEmail(e.target.value);
									setEmailErr(false);
								}} />
							</label>
							{emailErr && <span>{!email ? 'O e-mail é obrigatório.' : 'O e-mail digitada é inválido.'}</span>}
							<label htmlFor="senha" className="label-input">
								<LockIcon />
								<input type={visibilityStatus ? "text" : "password"} placeholder=" Senha" value={senha} onChange={(e) => {
									setSenha(e.target.value);
									setSenhaErr(false)
								}} />
								<button className="btn-visibility" onClick={toggleVisibility}>{visibilityStatus ? <VisibilityIcon /> : <VisibilityOffIcon />}</button>
							</label>
							{senhaErr && <span>{!senha ? 'A senha é obrigatória.' : 'A senha digitada é inválida.'}</span>}
							<a className="password" onClick={() => {navigate("/login/esqueci-senha")}}>Esqueceu a senha?</a>
							<button className="btn btn-second" onClick={entrar}>entrar</button>
						</form>
					</div>{/* Segunda Coluna */}

				</div>{/* Segundo Conteúdo */}
				
			</div>
		</div>
  );
}

export default Login;

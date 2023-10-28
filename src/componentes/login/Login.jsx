import { useNavigate } from 'react-router';
import LockIcon from '../../assets/imagens/icones/LockIcon';
import UserIcon from '../../assets/imagens/icones/UserIcon';
import MailIcon from '../../assets/imagens/icones/MailIcon';
import TagIcon from '../../assets/imagens/icones/TagIcon';
import Logobranco from '../../assets/imagens/vetores/logo-branco.png';
import VolumeOnIcon from '../../assets/imagens/icones/VolumeOnIcon';
import VolumeOffIcon from '../../assets/imagens/icones/VolumeOffIcon';
import React from 'react';
import './Login.css';

function Login({musicaAtiva, toggleMusica}) {
	const [login, toggle] = React.useState(false);

	const toggleVolume = () => {
        toggleMusica()
    }

	const navigate = useNavigate()
	
	const cadastrar = () => {
		navigate("/menu")
	}

	const entrar = () => {
		navigate("/menu")
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
						<form onSubmit={cadastrar} method="post" className="form">
							<label htmlFor="nome" className="label-input">
								<UserIcon />
								<input type="text" name="" id="nome" placeholder=" Nome" />
							</label>
							<label htmlFor="user" className="label-input">
								<TagIcon />
								<input type="text" name="" id="user" placeholder=" Usuário" />
							</label>
							<label htmlFor="email" className="label-input">
								<MailIcon />
								<input type="email" name="" id="email" placeholder=" E-mail" />
							</label>
							<label htmlFor="senha" className="label-input">
								<LockIcon />
								<input type="password" name="" id="senha" maxLength={6} placeholder=" Senha" />
							</label>
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
						<form onSubmit={entrar} method="post" className="form">
						<label htmlFor="email" className="label-input">
								<MailIcon />
								<input type="email" name="" id="email" placeholder=" E-mail" />
							</label>
						<label htmlFor="senha" className="label-input">
								<LockIcon />
								<input type="password" name="" id="senha" maxLength={6} placeholder=" Senha" />
						</label>
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

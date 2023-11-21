import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import ContaService from '../../services/ContaService';
import './Conta.css';
import ReturnIcon from '/public/assets/imagens/icones/ReturnIcon';
import VisibilityIcon from '/public/assets/imagens/icones/VisibilityIcon';
import VisibilityOffIcon from '/public/assets/imagens/icones/VisibilityOffIcon';
import useAuthConta from '/src/hooks/AuthConta';
import { validatePassword } from '/src/utils/Regex.jsx';

function Conta() {
    const navigate = useNavigate();
    const [visibilityStatus, setVisibilityStatus] = useState(false);
    const { user } = useAuthConta();
    
    useEffect(()=>{
        setEmail(user?.jogador?.email)
        setNome(user?.jogador?.nome)
        setUserName(user?.jogador?.username)
    },[user])

    const [email, setEmail] = useState(user?.jogador?.email);
	const [nome, setNome] = useState(user?.jogador?.nome);
	const [senha, setSenha] = useState("");
	const [senhaErr, setSenhaErr] = useState(false);
	const [userName, setUserName] = useState(user?.jogador?.username);

    const handleFieldChange = (e, setStateFunction) => {
        setStateFunction(e.target.value);
    };

    const validaSenha = () => {
        // se a senha não for válida, seta o erro como true
		validatePassword.test(senha) ? setSenhaErr(false) : setSenhaErr(true);
	}

    const toggleVisibility = (e) => {
		e.preventDefault();
		setVisibilityStatus(!visibilityStatus);
	}

    const atualizaUser = async (e) => {
		e.preventDefault();
		validaSenha();
        if (!senhaErr) {
            await ContaService.atualizaConta(nome, userName, email, senha);
            toast.success("Informações atualizadas com sucesso!");
            return
        }
        toast.error("Erro ao atualizar informações!\nTente novamente!");
    }
    
    return (
        <section className="bg-conta">
            <div className="bg-conta-container">
                <div className="menu-superior-conta">
                    <div className="menu-conta">
                        <button className="item-retorno-conta" onClick={() => navigate("/menu")}>
                            <ReturnIcon />
                        </button>
                    </div>
                    <div className="titulo-conta">
                        <div className="placa-titulo-conta">
                            <h1>SUA CONTA</h1>
                        </div>
                    </div>
                </div>
                <div className="content-main-conta">
                    <div className="content-main-superior-conta">
                        <form className="infos-user-conta" onSubmit={atualizaUser}>
                            <div className="info-conta info-nome-conta">
                                <label htmlFor="">NOME:</label>
                                <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required/>
                            </div>
                            <div className="info-conta info-user-conta">
                                <label htmlFor="">USER:</label>
                                <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} required/>
                            </div>
                            <div className="info-conta info-email-conta">
                                <label htmlFor="">E-MAIL:</label>
                                <input type="email" value={email} pattern="^\w.{2,}\u0040[a-z]{2,}.[a-z]{2,}\S"
                                title="Formato esperado: seuemail@email.com"
                                style={{ backgroundColor: '#fff'}}
                                disabled/>
                            </div>
                            <div className="info-conta info-senha-conta">
                                <label htmlFor="">SENHA:</label>
                                <input type={visibilityStatus ? "text" : "password"} className='inp-senha' onChange={(e) => setSenha(e.target.value)} required/>
                                <button className="btn-visibility btn-senha-conta" onClick={toggleVisibility}>{visibilityStatus ? <VisibilityIcon /> : <VisibilityOffIcon />}</button>
                            </div>
                            <div className="info-conta atualiza-info-conta">
                                <label htmlFor="">&nbsp;</label>
                                <button className="btn-atualiza">ATUALIZAR</button>
                            </div>
                        </form>
                        <div className="emblemas-conta">
                            {user?.emblemas && user.emblemas.map(emblema => (
                                <div className="emblema-item-conta" key={emblema.id}>
                                    <div className={emblema.conquistado ? "icon-emblema-conquistado" : "icon-emblema-nao-conquistado"}></div>
                                    <span className="tooltip-text-conta" id="top">{emblema.nome}<br />{emblema.descricao}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="historico-user-conta">
                        <div className="historico-vitoria-conta">
                            <div className="placa-conta">
                                <div className="placa-itens-conta">
                                    <div className="icon-vit-conta"></div>
                                    <div className="info-item-conta">
                                        <h1 className="num-vit-conta">{user?.jogador?.qntvitorias}</h1>
                                        <h1>VITÓRIAS</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="historico-derrota-conta">
                            <div className="placa-conta">
                                <div className="placa-itens-conta">
                                    <div className="icon-der-conta"></div>
                                    <div className="info-item-conta">
                                        <h1 className="num-der-conta">{(user?.jogador?.qntpartidasjogadas)-(user?.jogador?.qntvitorias)}</h1>
                                        <h1>DERROTAS</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Conta
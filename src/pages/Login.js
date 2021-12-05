import '../styles/login.css'
import Input from '../components/Input';

function Login() {
    return (
        <div className="login">
            <div className="container">
                <h3 className="welcome">Bem-Vinda, Doutora Aline</h3>
                <form>
                    <Input label={"Usuário"} type={"text"}/>
                    <Input label={"Senha"} type={"password"}/>
                    <button type="submit" className="btn btn-primary mt-5">Entrar</button>
                </form>
            </div>
            <div className="banner">
                <img src="https://exame.com/wp-content/uploads/2017/09/sd_2709.jpg" alt="logo marques advogada"/>
            </div>
        </div>
    );
}

export default Login;
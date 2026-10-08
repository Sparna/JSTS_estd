import { useState } from 'react';
import Input from './components/Input'

const Login = () => {
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit() {
    // Aqui você pode adicionar a lógica de autenticação, como enviar os dados para um servidor
    console.log("CPF:", cpf);
    console.log("Senha:", password);
  }

  return (
    <form className="bg-[#F8EBD3] h-screen flex justify-center items-center">
        <div className="w-[350px] gap-2 rounded-full flex flex-col justify-center items-center">
            <img src="./login-usuario.png" alt="Usuário" />
            <Input type="cpf" placeholder="CPF" onChange={(e) => setCpf(e.target.value)} />
            <Input type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} />
            <button type="button" className="self-end text-sm text-[#8A5B12] underline underline-offset-2 hover:text-black">
              Esqueci minha senha
            </button>
            <button type="button" onClick={handleSubmit} className="bg-[#D99A32] border border-[#999999] w-full h-[34px] font-bold text-sm rounded-md py-2 hover:bg-[#E0D1B9]">
                Entrar
            </button>
            <button type="button" className="bg-black text-[#D99A32] border border-black w-full h-[34px] font-bold text-sm rounded-md py-2 hover:bg-[#333333]">
              Entrar sem conta
            </button>
        </div>
    </form>
  );
}

export default Login;
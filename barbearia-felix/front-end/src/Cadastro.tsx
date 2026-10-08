import { useState } from 'react';
import Input from './components/Input'

const Cadastro = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setConfirmPassword] = useState("");

  function handleSubmit() {
    // Aqui você pode adicionar a lógica de autenticação, como enviar os dados para um servidor
    console.log("E-mail:", email);
    console.log("Senha:", password);
  }

  return (
    <form className="bg-[#F8EBD3] h-screen flex justify-center items-center">
        <div className="w-[350px] gap-2 rounded-full flex flex-col justify-center items-center">
            <img src="./login-usuario.png" alt="Usuário" />
            <Input type="text" placeholder="Nome" onChange={(e) => setNome(e.target.value)}/>
            <Input type="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} />
            <Input type="cpf" placeholder="CPF" onChange={(e) => setCpf(e.target.value)} />
            <Input type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} />
            <Input type="password" placeholder="Confirmar Senha" onChange={(e) => setConfirmPassword(e.target.value)} />
            <button type="button" onClick={handleSubmit} className="bg-[#D99A32] border border-[#999999] w-full h-[34px] font-bold text-sm rounded-md py-2 hover:bg-[#E0D1B9]">
                Cadastrar
            </button>
        </div>
    </form>
  );
}

export default Cadastro;
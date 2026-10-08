import { useState, type FormEvent } from 'react';
import Input from './components/Input'

function isValidCpf(value: string) {
  const digits = value;

  if (digits.length !== 11 || /^(\d)\1{10}$/.test(digits)) {
    return false;
  }

  const calculateDigit = (length: number) => {
    const sum = digits
      .slice(0, length)
      .split('')
      .reduce((total, digit, index) => total + Number(digit) * (length + 1 - index), 0);
    const remainder = (sum * 10) % 11;
    return remainder === 10 ? 0 : remainder;
  };

  return calculateDigit(9) === Number(digits[9]) && calculateDigit(10) === Number(digits[10]);
}

function formatCpf(value: string) {
  const digits = value.slice(0, 11);
  if (digits.length <= 3) {
    return digits;
  }
  if (digits.length <= 6) {
    return `${digits.slice(0, 3)}.${digits.slice(3)}`;
  }
  if (digits.length <= 9) {
    return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6)}`;
  }

  return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6, 9)}-${digits.slice(9)}`;
}

function formatPhone(value: string) {
  const digits = value.slice(0, 11);
  if (digits.length <= 2) {
    return digits ? `(${digits}` : '';
  }

  const areaCode = digits.slice(0, 2);
  const number = digits.slice(2);
  const breakpoint = digits.length > 10 ? 5 : 4;
  const formattedNumber = number.length > breakpoint
    ? `${number.slice(0, breakpoint)}-${number.slice(breakpoint)}`
    : number;

  return `(${areaCode})${formattedNumber}`;
}

const Cadastro = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setConfirmPassword] = useState("");
  const [validationError, setValidationError] = useState("");

  function handleFieldChange(setValue: (value: string) => void) {
    return (value: string) => {
      setValue(value);
      setValidationError("");
    };
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!nome.trim()) {
      setValidationError("Informe seu nome.");
      return;
    }

    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setValidationError("Informe um e-mail válido.");
      return;
    }

    if (!isValidCpf(cpf)) {
      setValidationError("Informe um CPF válido.");
      return;
    }

    if (telefone.length !== 10 && telefone.length !== 11) {
      setValidationError("Informe um telefone com DDD válido.");
      return;
    }

    if (password.length < 6) {
      setValidationError("A senha deve ter ao menos 6 caracteres.");
      return;
    }

    if (password !== passwordConfirm) {
      setValidationError("A confirmação deve ser igual à senha.");
      return;
    }

    setValidationError("");
    // Aqui você pode adicionar a lógica de autenticação, como enviar os dados para um servidor
    console.log("E-mail:", email);
    console.log("Senha:", password);
  }

  return (
    <form onSubmit={handleSubmit} className="bg-[#F8EBD3] h-screen flex justify-center items-center">
        <div className="w-[350px] gap-2 rounded-full flex flex-col justify-center items-center">
            <img src="./login-usuario.png" alt="Usuário" />
        <Input id="nome" label="Nome" type="text" placeholder="Nome" required onChange={(e) => handleFieldChange(setNome)(e.target.value)} />
        <Input id="email" label="E-mail" type="email" placeholder="E-mail" onChange={(e) => handleFieldChange(setEmail)(e.target.value)} />
        <Input id="cpf" label="CPF" type="text" placeholder="CPF" value={formatCpf(cpf)} required onChange={(e) => handleFieldChange(setCpf)(e.target.value.replace(/\D/g, '').slice(0, 11))} />
        <Input id="telefone" label="Telefone" type="tel" placeholder="Telefone" value={formatPhone(telefone)} required onChange={(e) => handleFieldChange(setTelefone)(e.target.value.replace(/\D/g, '').slice(0, 11))} />
        <Input id="senha" label="Senha" type="password" placeholder="Senha" required onChange={(e) => handleFieldChange(setPassword)(e.target.value)} />
        <Input id="confirmar-senha" label="Confirmar Senha" type="password" placeholder="Confirmar Senha" required onChange={(e) => handleFieldChange(setConfirmPassword)(e.target.value)} />
            {validationError && <p role="alert" className="text-sm text-red-700">{validationError}</p>}
        <button type="submit" className="bg-[#D99A32] border border-[#999999] w-full h-[34px] font-bold text-sm rounded-md py-2 hover:bg-[#E0D1B9]">
                Cadastrar
            </button>
        </div>
    </form>
  );
}

export default Cadastro;
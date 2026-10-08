import { useState, type FormEvent } from 'react';
import Input from './components/Input'

function createCaptchaChallenge() {
  return {
    firstNumber: Math.floor(Math.random() * 8) + 2,
    secondNumber: Math.floor(Math.random() * 8) + 2,
  };
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

const Login = () => {
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  const [isGuestModalOpen, setGuestModalOpen] = useState(false);
  const [guestName, setGuestName] = useState("");
  const [guestPhone, setGuestPhone] = useState("");
  const [captchaChallenge, setCaptchaChallenge] = useState(createCaptchaChallenge);
  const [captchaAnswer, setCaptchaAnswer] = useState("");
  const [guestError, setGuestError] = useState("");

  function handleSubmit() {
    // Aqui você pode adicionar a lógica de autenticação, como enviar os dados para um servidor
    console.log("CPF:", cpf);
    console.log("Senha:", password);
  }

  function handleGuestSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!guestName.trim()) {
      setGuestError("Informe seu nome.");
      return;
    }

    if (guestPhone.length !== 10 && guestPhone.length !== 11) {
      setGuestError("Informe um telefone com DDD válido.");
      return;
    }

    if (Number(captchaAnswer) !== captchaChallenge.firstNumber + captchaChallenge.secondNumber) {
      setGuestError("Resposta do captcha incorreta.");
      setCaptchaChallenge(createCaptchaChallenge());
      setCaptchaAnswer("");
      return;
    }

    setGuestError("");
    setCaptchaChallenge(createCaptchaChallenge());
    setCaptchaAnswer("");
  }

  return (
    <main className="relative bg-[#F8EBD3] h-screen flex justify-center items-center">
      <form className="w-[350px] gap-2 flex flex-col justify-center items-center">
        <img src="./login-usuario.png" alt="Usuário" />
        <Input type="cpf" placeholder="CPF" onChange={(e) => setCpf(e.target.value)} />
        <Input type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} />
        <button type="button" onClick={handleSubmit} className="bg-[#D99A32] border border-[#999999] w-full h-[34px] font-bold text-sm rounded-md py-2 hover:bg-[#E0D1B9]">
          Entrar
        </button>
        <button type="button" onClick={() => { setGuestError(""); setGuestModalOpen(true); }} className="bg-black text-[#D99A32] border border-black w-full h-[34px] font-bold text-sm rounded-md py-2 hover:bg-[#333333]">
          Entrar sem conta
        </button>
      </form>
      {isGuestModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4" onClick={() => setGuestModalOpen(false)}>
          <section role="dialog" aria-modal="true" aria-labelledby="guest-modal-title" className="relative w-full max-w-[398px] rounded-md bg-[#F8EBD3] p-6 shadow-xl" onClick={(event) => event.stopPropagation()}
>
            <button type="button" aria-label="Fechar" onClick={() => setGuestModalOpen(false)} className="absolute right-3 top-2 text-2xl leading-7 text-[#333333] hover:text-black">
              &times;
            </button>
            <h2 id="guest-modal-title" className="mb-4 text-lg font-bold text-[#333333]">
              Entrar sem conta
            </h2>
            <form onSubmit={handleGuestSubmit} className="mx-auto flex w-full max-w-[350px] flex-col gap-3">
              <Input id="guest-name" label="Nome" placeholder="Nome" required value={guestName}
                onChange={(event) => {
                  setGuestName(event.target.value);
                  setGuestError("");
                }}
              />
              <Input id="guest-phone" label="Telefone" type="tel" placeholder="Telefone" required value={formatPhone(guestPhone)}
                onChange={(event) => {
                  setGuestPhone(event.target.value.replace(/\D/g, '').slice(0, 11));
                  setGuestError("");
                }}
              />
              <Input id="guest-captcha" label={`Captcha: quanto é ${captchaChallenge.firstNumber} + ${captchaChallenge.secondNumber}?`} type="number" placeholder="Resposta" required value={captchaAnswer}
                onChange={(event) => {
                  setCaptchaAnswer(event.target.value);
                  setGuestError("");
                }}
              />
              {guestError && <p role="alert" className="text-sm text-red-700">{guestError}</p>}
              <button type="submit" className="bg-[#D99A32] border border-[#999999] h-[34px] font-bold text-sm rounded-md hover:bg-[#E0D1B9]">
                Confirmar
              </button>
            </form>
          </section>
        </div>
      )}
    </main>
  );
}

export default Login;
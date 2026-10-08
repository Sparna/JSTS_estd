import type { ChangeEventHandler, HTMLInputTypeAttribute } from 'react'

type InputProps = {
  type?: HTMLInputTypeAttribute
  placeholder?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
}

const Input = ({ type = 'text', placeholder = 'E-mail / CPF', onChange }: InputProps) => {
  return (
    <input type={type}
    placeholder={placeholder}
    onChange={onChange}
    className="bg-white w-[350px] h-[34px] placeholder:text-xs placeholder:text-[#999999] outline-none text-sm rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
  );
}

export default Input;
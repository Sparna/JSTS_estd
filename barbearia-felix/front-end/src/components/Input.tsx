import type { ChangeEventHandler, FormEventHandler, HTMLInputTypeAttribute } from 'react'

type InputProps = {
  type?: HTMLInputTypeAttribute
  id?: string
  label?: string
  placeholder?: string
  value?: string
  required?: boolean
  onChange?: ChangeEventHandler<HTMLInputElement>
}

const Input = ({ type = 'text', id, label, placeholder = 'E-mail / CPF', value, required = false, onChange }: InputProps) => {
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="mb-1 block text-xs font-medium text-[#333333]">
          {label}{required && <span aria-hidden="true" className="ml-1 text-red-600">*</span>}
        </label>
      )}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        required={required}
        onInvalid={(event) => {
          const input = event.currentTarget;
          if (required && !input.value.trim()) {
            input.setCustomValidity('Este campo é obrigatório.');
          } else if (type === 'email' && input.validity.typeMismatch) {
            input.setCustomValidity('Informe um e-mail válido.');
          }
        }}
        onChange={(event) => {
          event.currentTarget.setCustomValidity('');
          onChange?.(event);
        }}
        className="bg-white w-[350px] h-[34px] placeholder:text-xs placeholder:text-[#999999] outline-none text-sm rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

export default Input;
import { Link } from "react-router";
import LogoPrincipal from "./LogoPrincipal"

export const Header = () => {
  return (
    <div className="bg-[#F8EBD3]">
      <div className="w-full md:w-[737px] p-2 mx-auto flex justify-between items-center">
          <LogoPrincipal />
          <Link to="/login" className="ml-2 bg-[#1A1A1A] text-white font-bold text-[21px] w-[130px] h-[35px] flex items-center justify-center rounded-md">Entrar</Link>
      </div>
    </div>
  );
}
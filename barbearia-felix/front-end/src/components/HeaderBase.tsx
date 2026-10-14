import LogoPrincipal from "./LogoPrincipal";

export const HeaderBase = () => {
  return (
    <div className="bg-[#F8EBD3]">
        <div className="w-full md:w-[737px] p-2 mx-auto flex justify-between items-center">
            <LogoPrincipal />
        </div>
    </div>
  );
}
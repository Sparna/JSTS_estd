import Input from './components/Input.tsx'
import Password from './components/Password.tsx'
const App = () => {
  return (
    <div className="bg-[#F8EBD3] p-3 w-full flex flex-col justify-center items-center">
      <div className="bg-[#F8EBD3] font-bold text-[21px]  w-full flex justify-center items-center">
        Login
      </div>
      <div className="bg-[#F8EBD3] w-full flex justify-center items-center">
        <Input />
      </div>
      <div className="Password bg-[#F8EBD3] w-full flex justify-center items-center mt-3">
        <Password />
      </div>
    </div>
  );
}

export default App;
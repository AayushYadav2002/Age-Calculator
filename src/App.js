import Calculator from "./Components/Calculator";
import Footer from "./Components/Header";


function App() {
  return (
    <div className="h-screen p-40" >
      <div className="h-full rounded-xl shadow-2xl flex md:space-x-40  items-center justify-center bg-slate-100">
        <Footer/>
        <Calculator/>
        </div>
    </div>
  );
}

export default App;

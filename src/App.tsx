import './App.css'
import CarList from "./components/CarList.tsx";
import CarForm from "./components/CarForm.tsx";

function App() {
    return (
        <div className={'flex items-center justify-center flex-col'}>
            <CarForm/>
            <CarList/>
        </div>
    )
}

export default App

import {useDispatch, useSelector} from "react-redux";
import {removeCar} from "../store";
import CarValue from "./CarValue.tsx";
import {useState} from "react";

type car = {
    name: string
    cost: number
    id: string
}

type State = {
    cars: {
        cars: car[]
        searchTerm: string
    }
    form: {
        name: string
    }
}
const CarList = () => {
    const dispatch = useDispatch()
    const {cars, name} = useSelector((state: State) => {
        const filterdCar = state.cars.cars.filter((car: car) => car.name.toLowerCase().includes(state.cars.searchTerm.toLowerCase()))
        return {
            cars: filterdCar,
            name: state.form.name
        }

    })
    const handleDelete = (id: string) => {
        dispatch(removeCar(id))
    }
    return (
        <div>
            {cars.map((car: car) => {
                const bold = name && car.name.toLowerCase().includes(name.toLowerCase())
                console.log(bold)
                return <div
                    className={'flex border border-1 w-96 bg-gray-200 items-center p-4 justify-between'}>
                    <div className={`${bold ? 'text-2xl' : ''}`}>{car.name} -${car.cost}</div>
                    <button className={'bg-red-300 py-2 rounded px-4'} onClick={() => handleDelete(car.id)}>Delete
                    </button>
                </div>
            })}
            <CarValue value={cars}/>
        </div>
    )
}

export default CarList 
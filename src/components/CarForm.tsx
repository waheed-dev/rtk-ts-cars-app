import {useDispatch, useSelector} from "react-redux";
import {addCar, changeCost, changeName} from "../store";
import {ChangeEvent, FormEvent} from "react";
import CarSearch from "./CarSearch.tsx";

type State = {
    form: {
        name: string
        cost: number
    }
}
const CarForm = () => {
    const dispatch = useDispatch()
    const {name, cost} = useSelector((state: State) => {
        return {
            name: state.form.name,
            cost: state.form.cost
        }
    })

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const value = e.target.value
        dispatch(changeName(value))
    }

    function handleCostChange(e: ChangeEvent<HTMLInputElement>) {
        dispatch(changeCost(parseInt(e.target.value) || 0))
    }

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        if (name === '' || cost === 0) {
            return
        }
        dispatch(addCar({name, cost}))

    }

    return (
        <div className={'bg-blue-400 p-5 rounded'}>
            <form action="" onSubmit={handleSubmit}>
                <p className={'text-center text-2xl'}>Add Car</p>
                <div className={'flex'}>

                    <div className={'flex gap-4 items-center justify-between p-3'}>
                        <label htmlFor="">Name</label>
                        <input type="text" className={'bg-zinc-100 rounded p-2'} value={name} onChange={handleChange}/>
                    </div>
                    <div className={'flex gap-4 items-center justify-between  p-3'}>
                        <label htmlFor="">Cost</label>
                        <input type="number" className={'bg-zinc-100 rounded p-2'} value={cost || ''}
                               onChange={handleCostChange}/>
                    </div>
                </div>
                <button className={'bg-green-400 rounded p-2 px-4 mt-2'} type={'submit'}>Submit</button>
                <CarSearch/>
            </form>
        </div>
    )
}

export default CarForm
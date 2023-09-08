import {changeSearchTerm} from "../store";
import {useDispatch, useSelector} from "react-redux";
import {ChangeEvent, FormEvent} from "react";

type State = {
    cars: {
        searchTerm: string
    }
}
const CarSearch = () => {
    const dispatch = useDispatch()
    const searchTerm = useSelector((state: State) => {
        return state.cars.searchTerm
    })
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeSearchTerm(e.target.value))
    }
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }
    return (
        <div className={'flex items-center justify-center'}>
            <form action="" onSubmit={handleSubmit}>
                <div className={'flex gap-4 items-center justify-between '}>
                    <label htmlFor="">Search</label>
                    <input type="text" value={searchTerm} className={'bg-zinc-100 rounded p-2'}
                           onChange={handleChange}/>
                </div>
            </form>
        </div>
    )
}

export default CarSearch
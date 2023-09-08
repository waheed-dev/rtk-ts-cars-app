import {configureStore} from "@reduxjs/toolkit";
import {carsReducer} from "./slices/carsSlice.ts";
import {formReducer} from "./slices/formSlice.ts";
import {addCar, removeCar, changeSearchTerm} from "./slices/carsSlice.ts";
import {changeName, changeCost} from "./slices/formSlice.ts";

const store = configureStore({
    reducer: {
        cars: carsReducer,
        form: formReducer
    }
})

export {
    store,
    addCar, removeCar, changeCost, changeName, changeSearchTerm
}
import React from "react";

interface CarValuePropsInterface {
    value: { name: string, cost: number, id: string }[]
}

const CarValue: React.FC<CarValuePropsInterface> = ({value}) => {
    const price = value.reduce((acc, val) => {
        return acc + val.cost
    }, 0)
    console.log(price)
    return (
        <div>
            Total Price: ${price}
        </div>
    )
}

export default CarValue 
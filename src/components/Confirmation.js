import React from 'react'
import { useRouteMatch } from 'react-router-dom';
export default function Confirmation(props) {
    const { url } = useRouteMatch();
    const { values } = props;
    console.log('here', values)

    if (values.length < 7){
        return <h3>Please place your order</h3>
    }
    return (
        <div className='order'>
            <h2>Congrats! Pizza is on its way!</h2>
            <div className='information'>
                <h3>Customer Name: {values[0].customerName}</h3>
                <div className='details'>
                    <h3>Order Details: </h3>
                    <p>Size: {values[0].size}</p>
                    <p>Sauce: {values[0].sauce}</p>
                    {
                        !!values[0].toppings && !!values[0].toppings.length &&
                        <div>
                            Toppings:
                            <ul>
                                {values[0].toppings.map((topping, index) => 
                                    <li key={index}>{topping}</li>)}
                            </ul>
                        </div>
                    }
                    {
                        !!values[0].substitute && 
                        <p>Gluten Free Crust (+ $1.00)</p>
                    }
                    {
                        !!values[0].special &&
                        <p>Special Instuctions: {values[0].special}</p>
                    }

                    <p>Amount: {values[0].count}</p>

                </div>
                

            </div>
        </div>
    )
}
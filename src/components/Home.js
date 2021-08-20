import React from 'react'
import { useHistory } from 'react-router-dom';

export default function Home() {
    const history = useHistory();
    const routeToOrder = () => {
    //   console.log(history)
      history.push('/pizza')
    }

    return (
        <div className='home-wrapper' id="order-pizza">
            <button
                onClick={routeToOrder}
                className='orderBtn'
            >
                Order Pizza!
            </button>
        </div>
    )
}
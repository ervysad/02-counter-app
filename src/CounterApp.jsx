



import { useState } from 'react';  //permite usar el hook useState
import PropTypes from 'prop-types';

export const CounterApp = (props) => {

    const [counter, setCounter] = useState(props.value);  //variable constante "counter" que tiene como valor el valor del estado actual de useState.

    function buttonPresed() {
        //aqui debemos modificar el valor de counter a travès del hook.
        setCounter(counter + 1);
    }
    function buttonPresedMinus() {
        setCounter(counter - 1);
    }


    return (
        <div className='centeredcontent'>
            <h2 className='value'> {counter} </h2>
            <button className='counterb' onClick={buttonPresed}>+1</button>
            <button className='counterb' onClick={buttonPresedMinus}>-1</button>
        </div>


    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
}
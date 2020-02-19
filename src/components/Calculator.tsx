
import React, { useState } from "react";


export default function Calculator() {
    const [value, setValue] = useState(0);
    const [value2, setValue2] = useState(-1);

    const [operator, setOperator] = useState('');

    const buttonPressed = (e: any) => {
        if (operator) {

            setValue2(parseInt(e.target.name));

        } else {
            setValue(parseInt(e.target.name));
        }


    };


    const calculateNumbers = () => {
        switch (operator) {
            case "plus":
                setValue(value + value2);
                break;
            case "minus":
                setValue(value - value2);
                break;
            case "multiplication":
                setValue(value * value2);
                break;
            case "division":
                setValue(value / value2);
                break;
        }

        setValue2(-1);
        setOperator('');
    };

    const operatorBtnPressed = (e: any) => {
        const operator = e.target.name;

        if (operator === 'equal') {
            calculateNumbers();
        }


        setOperator(operator);
    };

    const resetNumbers = () => {
        setValue(0);
        setValue2(-1);
        setOperator('');
    };

    return (<div className="container">
        <h4>React Calculator</h4>
        <div className="container-fluid">
            <div className="row mb-2">
                <input type="number" className="form-control"
                    value={operator !== 'equal' && value2 !== -1 ? value2 : value}
                    onChange={(e) => setValue(parseInt(e.target.value))} />
            </div>
            <div className="row mb-2">
                <button className="btn btn-primary" name="7" onClick={buttonPressed}>7</button>
                <button className="btn btn-primary" name="8" onClick={buttonPressed}>8</button>
                <button className="btn btn-primary" name="9" onClick={buttonPressed}>9</button>
                <button className="btn btn-success" name="division" onClick={operatorBtnPressed}>/</button>
            </div>

            <div className="row mb-2">
                <button className="btn btn-primary" name="4" onClick={buttonPressed}>4</button>
                <button className="btn btn-primary" name="5" onClick={buttonPressed}>5</button>
                <button className="btn btn-primary" name="6" onClick={buttonPressed}>6</button>
                <button className="btn btn-success" name="multiplication" onClick={operatorBtnPressed}>*</button>

            </div>

            <div className="row mb-2">

                <button className="btn btn-primary" name="1" onClick={buttonPressed}>1</button>
                <button className="btn btn-primary" name="2" onClick={buttonPressed}>2</button>
                <button className="btn btn-primary" name="3" onClick={buttonPressed}>3</button>
                <button className="btn btn-success" name="minus" onClick={operatorBtnPressed}>-</button>

            </div>
            <div className="row">
                <button className="btn btn-primary" name="7" onClick={resetNumbers}>C</button>
                <button className="btn btn-primary" name="0" onClick={buttonPressed}>0</button>
                <button className="btn btn-danger" name="equal" onClick={operatorBtnPressed}>=</button>
                <button className="btn btn-success" name="plus" onClick={operatorBtnPressed}>+</button>

            </div>
        </div>
    </div>
    );

};





import { useState } from "react";

const FunctionComponent = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [res, setRes] = useState('');

    const handleNum1 = (e) => {
        setNum1(parseInt(e.target.value));
    }

    const handleNum2 = (e) => {
        setNum2(parseInt(e.target.value));
    }

    return (
        <div>
            <h1>Calculator</h1>
            <table>
                <tbody>
                    <tr>
                        <td>First Number:</td>
                        <td><input type="text" placeholder="First number" onChange={handleNum1} /></td>
                    </tr>
                    <tr>
                        <td>Second Number:</td>
                        <td><input type="text" placeholder="Second number" onChange={handleNum2} /></td>
                    </tr>
                    <tr>
                        <td>Result:</td>
                        <td><input type="text" placeholder="Result" value={res} onChange={(e) => setRes(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>
                            <button onClick={() => setRes(num1 + num2)}>Sum</button>
                            <button onClick={() => setRes(num1 - num2)}>Sub</button>
                            <button onClick={() => setRes(num1 * num2)}>Mult</button>
                            <button onClick={() => setRes(num1 / num2)}>Div</button>
                            <button onClick={() => setRes('')}>Reset</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default FunctionComponent;
import { Component } from "react";

class CalcComponent extends Component {
    constructor() {
        super();
        this.state = {
            num1: 0,
            num2: 0,
            result: ""
        }
    }
    handleNum1Change = (event) => {
        this.setState({
            num1: event.target.value
        })
        // console.log(event.target.value);
    }
    handleNum2Change = (event) => {
        this.setState({
            num2: event.target.value
        })
        // console.log(event.target.value);
    }

    handleSum = () => {
        let res = parseInt(this.state.num1) + parseInt(this.state.num2);
        this.setState({
            result: "Addition = " + res
        })
    }

    handleSub = () => {
        let res = parseInt(this.state.num1) - parseInt(this.state.num2);
        this.setState({
            result: "Subtraction = " + res
        })
    }

    handleMul = () => {
        let res = parseInt(this.state.num1) * parseInt(this.state.num2);
        this.setState({
            result: "Multiplication = " + res
        })
    }

    handleDiv = () => {
        let res = parseInt(this.state.num1) / parseInt(this.state.num2);
        this.setState({
            result: "Division = " + res
        })
    }
    render() {
        return (
            <div>
                <h1>Calculator</h1>
                <table>
                    <tbody>
                        <tr>
                            <td>First Number:</td>
                            <td><input type="text" placeholder="First number" onChange={this.handleNum1Change} /></td>
                        </tr>
                        <tr>
                            <td>Second Number:</td>
                            <td><input type="text" placeholder="Second number" onChange={this.handleNum2Change} /></td>
                        </tr>
                        <tr>
                            <td>Result:</td>
                            <td><input type="text" placeholder="Result" value={this.state.result} onChange={(e) => this.setState({res: e.target.value})} /></td>
                        </tr>
                        <tr>
                            <td>
                                <button onClick={this.handleSum}>Sum</button>
                                <button onClick={this.handleSub}>Sub</button>
                                <button onClick={this.handleMul}>Mult</button>
                                <button onClick={this.handleDiv}>Div</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}


export default CalcComponent;

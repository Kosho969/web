import React from 'react';
import Display from './components/Display.jsx'
import Button from './components/Button.jsx'
import ButtonAction from './components/ButtonAction.jsx'

export default class App extends React.Component {

    /*global suma resta:true*/
    constructor(props){
        super(props)
        this.state = {
            operation2 : 0 ,
            display : "",
            number1 : "",
            number2 : "",
            operation : ""
        }
    }
    
    handleDisplayChange(numero){
        if(this.state.operation2 == 1){
            this.setState({
                display : this.state.display +numero,
                number2: this.state.number2+numero
            })
        }else{
            this.setState({
                display : this.state.display + numero,
                number1: this.state.number1+numero
            })
        }
    }
    suma(numero1,numero2){
        return numero1 + numero2
    }
resta(numero1,numero2){
        return numero1 - numero2
        }
    
    multiplication(numero1,numero2){
        return numero1 * numero2
    }

    division(numero1,numero2){
        return numero1 / numero2
    }
    
    handleDisplayChangeOperation(action){
        
        if(action == "AC"){
            this.setState({
                display: " ",
                operation2 : 0,
                number1 : "",
                number2 : "",
                operation : ""
            })
        }else if(action == "C"){
            this.setState({
                display: " "
            })
            
        }else if(action == "=") {
            console.log("HERE")
            var num1 = parseFloat(this.state.number1, 10)
            var num2 = parseFloat(this.state.number2, 10)
            let numbersToOperate
            switch(this.state.operation){
                case "+":
                    console.log(num1)
                    console.log(num2)
                    numbersToOperate = this.suma(num1,num2)
                    console.log(numbersToOperate)
                    this.setState({
                        display: numbersToOperate,
                        number1 : numbersToOperate,
                        number2 : ""
                    })
                    break;
                case "-":
                    numbersToOperate = this.resta(num1,num2)
                    this.setState({
                        display: numbersToOperate,
                        number1 : numbersToOperate,
                        number2 : ""
                    })
                    break;
                case "x":
                    numbersToOperate = this.multiplication(num1,num2)
                    this.setState({
                        display: numbersToOperate,
                        number1 : numbersToOperate,
                        number2 : ""
                    })
                    break;
                case "/":
                    numbersToOperate = this.division(num1,num2)
                    this.setState({
                        display: numbersToOperate,
                        number1 : numbersToOperate,
                        number2 : ""
                    })
                    break;
            }
        }else{
            this.setState({
                display: this.state.display + action,
                operation2 : 1,
                operation: action
            })
        }
    }
  render() {
    console.log('WHAT')
    let buttons = []
    for(let i=0;i<10;i++){
        buttons.push(<Button number={i}/>)
    }
    return (
        <div className ={'container'}>
            <div className={'row'}>
                <div className={'col s12'}>
                    <Display value={this.state.display} />
                </div>
            </div>
            <div className ={'row'}>
                <div className={'col s3'}>
                    <Button  number="7" onClick={this.handleDisplayChange.bind(this,7)}/>
                </div>
                <div className={'col s3'}>
                    <Button number="8" onClick={this.handleDisplayChange.bind(this,8)}/>
                </div>
                <div className={'col s3'}>
                    <Button number="9" onClick={this.handleDisplayChange.bind(this,9)}/>
                </div>
                <div className={'col s3'}>
                    <ButtonAction action="-" onClick={this.handleDisplayChangeOperation.bind(this,"-")}/>
                </div>
            </div>
            <div className ={'row'}>
                <div className={'col s3'}>
                    <Button number="4" onClick={this.handleDisplayChange.bind(this,4)}/>
                </div>
                <div className={'col s3'}>
                    <Button number="5" onClick={this.handleDisplayChange.bind(this,5)}/>
                </div>
                <div className={'col s3'}>
                    <Button number="6" onClick={this.handleDisplayChange.bind(this,6)}/>
                </div>
                <div className={'col s3'}>
                    <ButtonAction action="+" onClick={this.handleDisplayChangeOperation.bind(this,"+")} />
                </div>
            </div>
            <div className ={'row'}>
                <div className={'col s3'}>
                    <Button number="1" onClick={this.handleDisplayChange.bind(this,1)}/>
                </div>
                <div className={'col s3'}>
                    <Button number="2" onClick={this.handleDisplayChange.bind(this,2)}/>
                </div>
                <div className={'col s3'}>
                    <Button number="3" onClick={this.handleDisplayChange.bind(this,3)}/>
                </div>
                <div className={'col s3'}>
                    <ButtonAction action="x" onClick={this.handleDisplayChangeOperation.bind(this,"x")} />
                </div>
                
            </div>
            <div className ={'row'}>
                <div className={'col s3'}>
                    <ButtonAction action="AC" onClick={this.handleDisplayChangeOperation.bind(this,"AC")} />
                </div>
                <div className={'col s3'}>
                    <ButtonAction action="C" onClick={this.handleDisplayChangeOperation.bind(this,"C")} />
                </div>
                <div className={'col s3'}>
                    <Button number="0" onClick={this.handleDisplayChange.bind(this,0)}/>
                </div>
                <div className={'col s3'}>
                    <ButtonAction action="=" onClick={this.handleDisplayChangeOperation.bind(this,"=")}/>
                </div>
            </div>
            <div className ={'row'}>
                <div className={'col s3'}>
                    <ButtonAction action="/" onClick={this.handleDisplayChangeOperation.bind(this,"/")} />
                </div>
                <div className={'col s3'}>
                    <Button number="." onClick={this.handleDisplayChange.bind(this,".")}/>
                </div>
            </div>
        </div>
    )
  }
}

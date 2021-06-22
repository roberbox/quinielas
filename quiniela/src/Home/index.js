import React, { Component, Fragment } from 'react'
import Logo from '../common/Image/HomeImage/logo.svg'
import Login from './components/login'
import RegistrationForm from './components/registrationForm'
import ExportExcel from 'react-export-excel'
import Json from '../Json/David/david.json'
import Pueba from '../Json/frozenToActive/frozenToActive.json'
import BackPayments  from '../Json/Mayo/backpayments.json'
import Retiros from '../Json/Mayo/retiros.json'



const ExcelFile = ExportExcel.ExcelFile
const ExcelSheet = ExportExcel.ExcelFile
const ExcelColumn = ExportExcel.ExcelFile


class index extends Component {

    state = {
      array: []
    };

    loginClick = () => {
      const array = [3, 15]

      array.map(element => {
          for (let index = 1; index <= element; index++) {
            
            (index %3 === 0 && index %5 === 0) ? console.log('FizzBuzz') : index %5 === 0 ? console.log('Buzz') : index %3 === 0 ? console.log('Fizz')  : console.log(index);            
          }
      })
    }


    render() {
      // console.log('render',this.state.array);
        return (
            <Fragment>
                <div class="Background">
                    <div className="BackgroundColor">
                        <div className="GridContainer">
                            <Login 
                                logo={Logo}
                                loginClick={this.loginClick} 
                            /> 
                        </div>
                      <input></input>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default index;
import React, { Component, Fragment } from 'react'
import Logo from '../common/Image/HomeImage/logo.svg'
import Login from './components/login'
import RegistrationForm from './components/registrationForm'
import ExportExcel from 'react-export-excel'




const ExcelFile = ExportExcel.ExcelFile
const ExcelSheet = ExportExcel.ExcelFile
const ExcelColumn = ExportExcel.ExcelFile


class index extends Component {

    state = {
      array: []
    };

    loginClick = () => {

    }


    render() {
      // console.log('render',this.state.array);
        return (
            <Fragment>
                <div className="Background">
                    <div className="BackgroundColor">
                        <div className="GridContainer">
                          <div className='Description-container '>
                            <Login 
                                logo={Logo}
                                loginClick={this.loginClick} 
                            />
                          </div>
                          <div className='registration-container'>
                            <RegistrationForm 
                            
                            />
                          </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default index;
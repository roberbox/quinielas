import React, { Component, Fragment } from 'react';
import Logo from '../common/Image/HomeImage/logo.svg'
import Login from './components/login'

class index extends Component {

    loginClick = () => {
        console.log('hola');
    }


    render() {
        return (
            <Fragment>
                <div class="Background">
                    <div className="BackgroundColor">
                        <Login 
                            logo={Logo}
                            loginClick={this.loginClick}
                        />  
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default index;
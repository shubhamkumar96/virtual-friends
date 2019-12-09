import React, {Component} from 'react';

class Button extends Component {
    render(){
        return(
            <div>
                <button className='grow f4 pa1 link black bg-light-silver'
                    onClick={this.props.onButtonSubmit}>
                    {this.props.buttonName}
                </button>
            </div>
        );
    }
}

export default Button;
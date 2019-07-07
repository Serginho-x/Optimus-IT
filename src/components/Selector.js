import React, { Component } from "react";
import Select from 'react-select';
import '../styles/App.css';

const customStyles = {
    control: styles => ({ ...styles,
         border: '2px solid #0c8dab',
         marginBottom: 20,
    }),
    option: (provided) => ({...provided, padding: 15})    
}

class Selector extends Component {    

    render() {
        return(
            <Select
                styles={customStyles}
                options={this.props.options}
                placeholder={"Select tag"}
                onChange={this.props.onChange}
                value={this.props.selected}        
            />
        )
    }
}  

export default Selector
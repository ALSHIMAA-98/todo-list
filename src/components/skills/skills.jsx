import React from 'react';
import skillsStyle from'./skills.module.css'
import RangeSlider from 'react-bootstrap-range-slider';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
const Step = (props) => {

    const [ value, setValue ] = React.useState(50);
  
    return (
        <div className="col-4">
          
        <label>{props.name}</label>
      <RangeSlider
        value={value}
        onChange={e => setValue(e.target.value)}
        step={10}
      />
    </div>
    );
  
  };
  
export default Step;

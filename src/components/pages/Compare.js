import React, { Component } from 'react';
import makeAnimated from 'react-select/animated';
import SearchSelects from '../sections/SearchSelects';
import { components } from 'react-select';
import ComparisonTable from './ComparisonTable';
import { Button } from 'reactstrap';
import {Link} from 'react-router-dom'
const Option = props => {
  return (
    <div>
      <components.Option {...props}>
        <input
          type="checkbox"
          checked={props.isSelected}
          onChange={() => null}
        />{' '}
        <label>{props.label}</label>
      </components.Option>
    </div>
  );
};

const MultiValue = props => (
  <components.MultiValue {...props}>
    <span>{props.data.label}</span>
  </components.MultiValue>
);

const animatedComponents = makeAnimated();
export default class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      optionSelected: []
    };
  }

  handleChange = selected => {
    this.setState({
      optionSelected: selected
    });
  };

  render() {
      let newArray=[];
      this.props.Devices.map(device=>{
newArray.push({ value: device.id, label: device.id})
      })
    return (
     <div> <SearchSelects
        options={newArray}
        isMulti
        closeMenuOnSelect={false}
        hideSelectedOptions={false}
        components={{ Option, MultiValue, animatedComponents }}
        onChange={this.handleChange}
        allowSelectAll={true}
        value={this.state.optionSelected}
        
      />
      <Button ><Link  to={{pathname: '/Comparison', selectedvalues:this.state.optionSelected}}>Compare Now</Link></Button>
      </div>
    );
  }
}

import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getDevices } from '../../redux/actions/rootActions';
import {Table} from 'react-bootstrap'
class ComparisonTable extends Component {
    constructor(props) {
    super(props); 
this.state={
    comparisonArray:[]
}   }
    componentDidMount() {
      this.props.getDevices();

if(this.props.Devices !== undefined) {
    this.props.Devices.map((device)=>{
        if(this.props.location.selectedvalues !== undefined) {
            this.props.location.selectedvalues.map((selected)=>{
                if(device.id==selected.value){
                  this.state.comparisonArray.push(device)
                }

            }) }
            else{
                return null;}
    }) }
    else{
        return null;
    }

    }
    render() { 
        return (
            <div>
<Table striped bordered hover>
  
            <thead>
              <tr>
                <th>Device #</th>
                <th>ID </th>
                <th>Likes</th>
                <th>favorites</th>
                <th>imageSize</th>
                <th>views</th>
              </tr>
            </thead>
            <tbody>
               
              {this.state.comparisonArray
                ?
                this.state.comparisonArray.map((device,i) => (
                    <tr key={i}>
                    <td>Device {device.id}</td>
                      <td>{device.id}</td>
                     
                      <td>{device.likes}</td>
                      <td>{device.favorites}</td>
                      <td>{device.imageSize}</td>
                      <td>{device.views}</td>
                      
                    </tr>
                  ))
                : null}
                      </tbody>
          </Table>            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return { Devices: state.Devices.list };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getDevices }, dispatch);
  };
  export default connect(mapStateToProps, mapDispatchToProps)(ComparisonTable);
  
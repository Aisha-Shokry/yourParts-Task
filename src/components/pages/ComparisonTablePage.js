import React, { Component } from "react";

// Redux Connection
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getDevices } from "../../redux/actions/rootActions";

// Bootstrap
import { Table, Container } from "react-bootstrap";

class ComparisonTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comparisonArray: [], //Array of Selected Devices
    };
  }
  componentDidMount() {
    this.props.getDevices(); //get all devices from redux store

    // Compare between selected items and all devices returned from api
    if (this.props.Devices !== undefined) {
      this.props.Devices.map((device) => {
        if (this.props.location.selectedvalues !== undefined) {
          return this.props.location.selectedvalues.map((selected) => {
            if (device.user === selected.value) {
              return this.state.comparisonArray.push(device);
            } else {
              return null;
            }
          });
        } else {
          return null;
        }
      });
    } else {
      return null;
    }
  }
  render() {
    return (
      <Container>
        <h4 className="pb-4">
          Here's The comparison between the devices you have chosen
        </h4>
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
              ? this.state.comparisonArray.map((device, i) => (
                  <tr key={i}>
                    <td>Device #{device.id}</td>
                    <td>{device.id}</td>
                    <td>{device.likes}</td>
                    <td>{device.favorites}</td>
                    <td>{device.imageSize}</td>
                    <td>{device.views}</td>
                  </tr>
                ))
              : null}
          </tbody>
        </Table>{" "}
      </Container>
    );
  }
}
// Redux State
const mapStateToProps = (state) => {
  return { Devices: state.Devices.list };
};

// Redux Action
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getDevices }, dispatch);
};

/* Connect Component With Redux */
export default connect(mapStateToProps, mapDispatchToProps)(ComparisonTable);

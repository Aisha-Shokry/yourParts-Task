import React, { Component } from "react";
/* Components */
import ScrollView from "../sections/ScrollView";
import LoadMoreView from "../sections/LoadMoreView";

/* Redux Connection */
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getDevices } from "../../redux/actions/rootActions";

class ExplorePage extends Component {
  componentDidMount() {
    this.props.getDevices();
  }
  render() {
    return (
      <div>
        {this.props.Devices.list ? (
          this.props.changed ? (
            <LoadMoreView Devices={this.props.Devices.list} />
          ) : (
            <ScrollView Devices={this.props.Devices.list} />
          )
        ) : (
          <h1>No Devices</h1>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  Devices: state.Devices,
  changed: state.changed.changed,
});
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getDevices }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(ExplorePage);

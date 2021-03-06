import React, { Component } from "react";

// Bootstrap 
import { Button, Container, Row, Col } from "reactstrap";

// Redux Connection 
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeView } from "../../redux/actions/rootActions";

class SettingsPage extends Component {
  changeDevicesView = () => {
    // Function to Change View
    this.props.changeView();
    if (this.props.changed !== undefined) {
    } else {
      return null;
    }
  };

  render() {
    return (
      <Container className="settings-page">
        <h3>View</h3>
        <h5 className="pt-4">Your preferences</h5>
        {this.props.changed === true ? (
          <Row className="ml-5 pl-5">
            <Col md={1} sm={3}>
              <Button onClick={this.changeDevicesView}>
                <i className="fas fa-toggle-off fa-2x "></i>
              </Button>{" "}
            </Col>{" "}
            <Col md={3} sm={6}>
              <h6>Scrollable View is OFF</h6>
            </Col>
          </Row>
        ) : (
          <Row className="ml-5 pl-5">
            <Col md={1} sm={3}>
              <Button onClick={this.changeDevicesView}>
                <i className="fas fa-toggle-on fa-2x "></i>
              </Button>{" "}
            </Col>{" "}
            <Col md={3} sm={6}>
              <h6>Scrollable View is ON</h6>
            </Col>
          </Row>
        )}
      </Container>
    );
  }
}

// Redux Action 
const mapStateToProps = (state) => {
  return { changed: state.changed.changed };
};

// Redux Action 
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ changeView }, dispatch);
};

// Connect Component With Redux 
export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage);

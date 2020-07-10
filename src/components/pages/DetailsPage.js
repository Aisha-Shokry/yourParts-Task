import React, { Component } from "react";

// Redux Connection
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  getMobileDetails,
  clearDetails,
} from "../../redux/actions/rootActions";

// BootStrap
import { Container, Table } from "react-bootstrap";

class MobileDetails extends Component {
  componentDidMount() {
    this.props.getMobileDetails(this.props.match.params.id);
  }

  // componentWillUnmount() {
  //   this.props.clearDetails();
  // }

  render() {
    return (
      <Container>
        {this.props.details.details ? (
          this.props.details.details.map((attribute, i) => {
            return (
              <div>
                <Container className="pt-5">
                  <div className=" text-center py-3">
                    <img src={attribute.previewURL} alt={attribute.user} />
                  </div>

                  <Table striped bordered hover>
                    <tr key={i}>
                      <th>Number of views:</th>
                      <td>{attribute.views}</td>
                    </tr>
                    <tr key={i}>
                      <th>Number of tags: </th>
                      <td>{attribute.tags}</td>
                    </tr>{" "}
                    <tr key={i}>
                      <th>Number of downloads:</th>
                      <td>{attribute.downloads}</td>
                    </tr>{" "}
                    <tr key={i}>
                      <th>Number of favorites:</th>
                      <td>{attribute.favorites}</td>
                    </tr>{" "}
                    <tr key={i}>
                      <th>Number of likes:</th>
                      <td>{attribute.likes}</td>
                    </tr>
                  </Table>
                </Container>
              </div>
            );
          })
        ) : (
          <h1>...loading</h1>
        )}
      </Container>
    );
  }
}

// Redux State
const mapStateToProps = (state) => ({
  details: state.details,
});

// Redux Action
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getMobileDetails, clearDetails }, dispatch);
};

// Connect Component With Redux
export default connect(mapStateToProps, mapDispatchToProps)(MobileDetails);

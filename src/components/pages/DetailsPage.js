import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getMobileDetails } from "../../redux/actions/rootActions";
import { Container, Row } from "react-bootstrap";
class MobileDetails extends Component {
  componentDidMount() {
    this.props.getMobileDetails(this.props.match.params.id);
  }

  render() {
    return (
      <Container>

        {this.props.details.details ? (
          this.props.details.details.map((item) => {
            return (
              <div>
                <Container className="pt-5">
                  <Row className="justify-content-center py-3">
                    <img
                      className="img-fluid"
                      src={item.previewURL}
                      alt="img"
                    />
                  </Row>

                  <p>
                    Number of view <strong>{item.views}</strong>
                  </p>
                  <p>
                    Tags <strong>{item.tags}</strong>
                  </p>
                  <p>
                    Number of downloads <strong>{item.downloads}</strong>
                  </p>
                  <p>
                    Number of favorites <strong>{item.favorites}</strong>
                  </p>
                  <p>
                    Number of likes <strong>{item.likes}</strong>
                  </p>
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

const mapStateToProps = (state) => ({
  details: state.details,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getMobileDetails }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(MobileDetails);

import React, { Component } from "react";

/* Router Link */
import { Link } from "react-router-dom";

/* BootStrap */
import { Container, Row, Col, Button } from "react-bootstrap";

export default class LoadMoreView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: 10,
      error: false,
    };
  }
  loadMore = () => {
    this.setState((prev) => {
      return { visible: prev.visible + 9 };
    });
  };

  render() {
    let loadMoreDevices = this.props.Devices.slice(0, this.state.visible).map(
      (device) => {
        return (
          <Col sm={12} md={6} key={device.id}>
            <Link to={`/mobiles/${device.id}`} style={{ cursor: "pointer" }}>
              <img
                src={device.webformatURL}
                alt={device.tags}
                className="img-fluid"
              />
              ;
            </Link>
            <h5>{device.user}</h5>{" "}
          </Col>
        );
      }
    );

    return (
      <Container className="loadMore-Page">
        <Row>{loadMoreDevices}</Row>
        {this.state.visible < this.props.Devices.length && (
          <div style={{ textAlign: "center" }} className="mt-4">
            <Button onClick={this.loadMore} className="load-more">
              Load more
            </Button>
          </div>
        )}
      </Container>
    );
  }
}

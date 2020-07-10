import React, { Component } from "react";

/* Router Link */
import { Link } from "react-router-dom";

/* Bootstrap */
import { Container, Row, Col } from "reactstrap";

export default class InfinityScrollView extends Component {
  render() {
    let items = this.props.Devices.slice(0, this.props.size),
      displyedItems = items.map((device) => {
        return (
          <Col sm={12} md={6}>
            <Link to={`/mobiles/${device.id}`} style={{cursor:'pointer'}}>
              <img
                src={device.webformatURL}
                alt={device.tags}
                className="img-fluid"
              />
              ;
            </Link>
            <h5>{device.user}</h5>
          </Col>
        );
      });
    return (
      <Container className='scrollable-page'>
        <Row>{displyedItems} </Row>
      </Container>
    );
  }
}

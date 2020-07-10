import React, { Component } from "react";

/* Router Link */
import { Link } from "react-router-dom";

/* Bootstrap */
import { Container, Row, Col } from "reactstrap";

export default class InfinityScrollView extends Component {
  constructor() {
    super();
    this.state = {
      size: 10,
    };
    this.handleScroll();
  }

  handleScroll() {
    document.addEventListener("scroll", () => {
      let scrollTop = document.documentElement.scrollTop,
        windowHeight = window.innerHeight,
        height = document.body.scrollHeight - windowHeight,
        scrollPercentage = scrollTop / height;
      if (scrollPercentage > 0.9) {
        let newSize = this.state.size + 10;
        this.setState({
          size: newSize,
        });
      }
    });
  }
  render() {
    let items = this.props.Devices.slice(0, this.state.size),
      displyedItems = items.map((device) => {
        return (
          <Col sm={12} style={{ textAlign: "center" }}>
            <Link to={`/mobiles/${device.id}`} style={{ cursor: "pointer" }}>
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
      <Container className="scrollable-page">
        <Row>{displyedItems} </Row>
      </Container>
    );
  }
}

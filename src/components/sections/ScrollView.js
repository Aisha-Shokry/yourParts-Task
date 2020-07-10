import React, { Component } from "react";

// Router Link 
import { Link } from "react-router-dom";

// Bootstrap 
import { Container, Row, Col } from "reactstrap";

export default class InfinityScrollView extends Component {
  constructor() {
    super();
    this.state = {
      visible: 10, //visible devices
    };
    this.handleScroll();
  }

  //Function to handle scroll View
  handleScroll() {
    document.addEventListener("scroll", () => {
      let scrollTop = document.documentElement.scrollTop,
        windowHeight = window.innerHeight,
        height = document.body.scrollHeight - windowHeight,
        scrollPercentage = scrollTop / height;
      if (scrollPercentage > 0.9) {
        let newvisible = this.state.visible + 10;
        this.setState({
          visible: newvisible,
        });
      }
    });
  }
  render() {
    let items = this.props.Devices.slice(0, this.state.visible),
      displyedItems = items.map((device) => {
        return (
          <Col sm={12} className="text-center">
            <Link to={`/mobiles/${device.id}`}>
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

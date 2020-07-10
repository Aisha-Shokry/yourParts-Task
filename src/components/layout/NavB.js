import React, { Component } from "react";
import { Tab, Tabs } from "react-bootstrap";
import InfinityScrollView from "../sections/InfinityScrollView";
import SettingsPage from "../pages/SettingsPage";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeView } from "../../redux/actions/rootActions";
import LoadMoreView from "../sections/LoadMoreView";
import Compare from "../pages/Compare";
class NavB extends Component {
  render() {
    return (
      <div>
        <Tabs defaultActiveKey="explore" id="uncontrolled-tab-example">
          <Tab eventKey="explore" title="Explore">
            {this.props.changed ? (
              
              <LoadMoreView Devices={this.props.Devices} />
            ) : (
              <InfinityScrollView
                Devices={this.props.Devices}
                size={this.props.size}
              />
            )}
          </Tab>
          <Tab eventKey="compare" title="Compare">
            <Compare />
          </Tab>
          <Tab eventKey="setting" title="Setting">
            <SettingsPage />
          </Tab>
        </Tabs>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  changed: state.changed.changed,
});
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ changeView }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(NavB);



// import React, { Component } from "react";

// /* BootStrap */
// import { Navbar, Nav } from "react-bootstrap";

// /* Router Links */
// import { NavLink } from "react-router-dom";

// export default class NavB extends Component {
//   render() {
//     return (
//       <div>
//         <Navbar collapseOnSelect expand="lg" className="navbar">
//           <Navbar.Brand href="/"></Navbar.Brand>

//           <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//           <Navbar.Collapse id="responsive-navbar-nav">
//             <Nav className="">
//               <NavLink
//                 exact
//                 to="/"
//                 activeStyle={{
//                   color: "#2C9CB7",
//                   textDecoration: "none",
//                   borderBottom: "5px solid #2C9CB7",
//                 }}
//               >
//                 Explore
//               </NavLink>
//               <NavLink
//                 exact
//                 to="/Compare"
//                 activeStyle={{
//                   color: 
//                 }}
//               >
//                 Compare
//               </NavLink>
//               <NavLink
//                 exact
//                 to="/Settings"
//                 activeStyle={{
//                   color: "#2C9CB7",
//                   textDecoration: "none",
//                   borderBottom: "5px solid #2C9CB7",
//                 }}
//               >
//                 Settings
//               </NavLink>
//             </Nav>
//           </Navbar.Collapse>
//         </Navbar>
//       </div>
//     );
//   }
// }

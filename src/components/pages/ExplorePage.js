import React, { Component } from "react";
import NavB from "../layout/NavB";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getDevices } from "../../redux/actions/rootActions";
class ExplorePage extends Component {
  constructor(props) {
    super(props);
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
  componentDidMount() {
    this.props.getDevices();
  }
  render() {
    return (
      <div>
        {this.props.Devices.list ? (
          <NavB Devices={this.props.Devices.list} size={this.state.size} />
        ) : (
          console.log("no devices")
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  Devices: state.Devices,
});
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getDevices }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(ExplorePage);

// import React, { Component } from "react";
// /* Components */
// import InfinityScrollView from "../sections/InfinityScrollView";
// import LoadMoreView from "../sections/LoadMoreView";

// /* Redux Connection */
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import { getDevices } from "../../redux/actions/rootActions";

// class ExplorePage extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       size: 10,
//     };
//     this.handleScroll();
//   }

//   handleScroll() {
//     document.addEventListener("scroll", () => {
//       let scrollTop = document.documentElement.scrollTop,
//         windowHeight = window.innerHeight,
//         height = document.body.scrollHeight - windowHeight,
//         scrollPercentage = scrollTop / height;
//       if (scrollPercentage > 0.9) {
//         let newSize = this.state.size + 10;
//         this.setState({
//           size: newSize,
//         });
//       }
//     });
//   }
//   componentDidMount() {
//     this.props.getDevices();
//   }
//   render() {
//     return (
//       <div>
//         {this.props.Devices.list ? (
//           this.props.changed ? (
//             <LoadMoreView Devices={this.props.Devices.list} />
//           ) : (
//             <InfinityScrollView
//               Devices={this.props.Devices.list}
//               size={this.props.size}
//             />
//           )
//         ) : (
//           console.log("no devices")
//         )}
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => ({
//   Devices: state.Devices,
// });
// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({ getDevices }, dispatch);
// };
// export default connect(mapStateToProps, mapDispatchToProps)(ExplorePage);

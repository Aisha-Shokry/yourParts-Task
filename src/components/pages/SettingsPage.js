// import React, { Component } from 'react'
// import { Button } from 'react-bootstrap'
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { changeView } from '../../redux/actions/rootActions';
// class SettingsPage extends Component {
//     changeDevicesView=()=>{
//         this.props.changeView()    
//             console.log(this.props.changed)

//     }
//     render() {
//         console.log(this.props.changed)
//         return (
//             <div>
//                 <Button onClick={this.changeDevicesView}>Change View</Button>
//                 {this.props.changed === false ? <h1>false</h1> : <h1>true</h1>}

//             </div>
//         )
//     }
// }
// const mapStateToProps = (state) => {
//     return { changed: state.changed };
//   };
  
//   const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators({ changeView }, dispatch);
//   };
//   export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage);
  
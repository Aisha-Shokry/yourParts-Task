import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getDevices } from '../../redux/actions/rootActions';
import InfinityScrollView from '../sections/InfinityScrollView';
import LoadMoreView from '../sections/LoadMoreView';
class ExplorePage extends Component {
    constructor(props){
        super(props);
        this.state={
            size:10
        }
        this.handleScroll();
      }
    
      handleScroll() {
        document.addEventListener('scroll', () => {
          let scrollTop = document.documentElement.scrollTop,
            windowHeight = window.innerHeight,
            height = document.body.scrollHeight - windowHeight,
            scrollPercentage = scrollTop / height;
          if (scrollPercentage > 0.9) {
            let newSize = this.state.size + 10;
            this.setState({
              size: newSize
            });
          }
        });
      }
  componentDidMount() {
    this.props.getDevices();
  }
  render(){
    return(
      <div> 
{this.props.Devices.list?
// this.props.changed?
        // <InfinityScrollView  size={this.state.size} Devices={this.props.Devices.list}/> :
        <LoadMoreView Devices={this.props.Devices.list} />
        : <p>No Devices</p>}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { Devices: state.Devices };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getDevices }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(ExplorePage);

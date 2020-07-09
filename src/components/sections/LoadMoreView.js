import React, { Component } from 'react'

export default class LoadMoreView extends Component {
    constructor(props){
        super(props);
        this.state={
            visible: 10,
            error: false
        }
    }
    loadMore=()=> {
        this.setState((prev) => {
          return {visible: prev.visible + 9};
        });
      }
    
    
    
    render() {
        let loadMoreDevices= this.props.Devices.slice(0, this.state.visible).map((device, index) => {
            return (
              <div className="tile fade-in" key={device.id}>
               <img src={device.webformatURL} alt={device.tags} />
              </div>
            );
          })
        
        return (
            <div>
                {loadMoreDevices}
                {this.state.visible < this.props.Devices.length &&
           <button onClick={this.loadMore} className="load-more">Load more</button>}
        
            </div>
        )
    }
}

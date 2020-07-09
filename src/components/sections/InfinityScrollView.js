import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class InfinityScrollView extends Component {
  render(){
    let items = this.props.Devices.slice(0,this.props.size),
        displyedItems = items.map((device)=>{
          return <div>
          {' '}
          <Link to={`/Device/${device.id}`}>
            <img src={device.webformatURL} alt={device.tags} />;
          </Link>
        </div>
        });
    return(
      <div >
         {displyedItems} 
      </div>
    )
  }
}

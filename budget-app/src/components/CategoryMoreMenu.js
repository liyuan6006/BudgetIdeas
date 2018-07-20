
import React from 'react';



import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

const iconButtonElement = (
    <IconButton
      touch={true}
      tooltip="more"
      tooltipPosition="bottom-left"
    >
      <MoreVertIcon/>
    </IconButton>
  );
 class  rightIconMenu extends React.Component {

     render(){

    return(
        <IconMenu iconButtonElement={iconButtonElement}
          id="long-menu"  
        >
          <MenuItem onClick={this.props.onChange} >Needs</MenuItem>
          <MenuItem onClick={this.props.onChange} >Wants</MenuItem>
          <MenuItem onClick={this.props.onChange} >Saving</MenuItem>
        </IconMenu >
   
    
)
  
}

}

  export default rightIconMenu;
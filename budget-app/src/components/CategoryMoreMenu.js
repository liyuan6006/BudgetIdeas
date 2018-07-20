
import React from 'react';

import {List, ListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import {blue500, yellow600} from 'material-ui/styles/colors';
import EditorInsertChart from 'material-ui/svg-icons/editor/insert-chart';
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
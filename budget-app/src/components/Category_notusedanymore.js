import React from 'react'
import PropTypes from 'prop-types'


import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


import { withStyles } from '@material-ui/core/styles';

const styles = {
  card: {
      minWidth: 275,
  },
  bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
  },
  title: {
      marginBottom: 16,
      fontSize: 14,
  },
  pos: {
      marginBottom: 12,
  },
};


const Category = ({ category,onClick,classes}) => (
<Card className={classes.card}>
    <CardContent>

        <Typography variant="headline" component="h2">
            {category.name}
        </Typography>
        <Typography className={classes.title} color="textSecondary">
            {category.belongsTo}
        </Typography>   
    </CardContent>
</Card>




)

Category.prototype = {
    onClick: PropTypes.func.isRequired
  }
  export default withStyles(styles)(Category);
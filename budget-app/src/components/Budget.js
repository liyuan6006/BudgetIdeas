import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import BudgetMoreMenu from './BudgetMoreMenu';
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

class Budget extends React.Component {

    handleDelete = (id) => {
        this.props.onDelete(id)
    }


    render() {
        const { classes } = this.props;
        const bull = <span className={classes.bullet}>•</span>;
        return (

            <div>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography variant="headline" component="h2">
                            {this.props.budget.name}
                        </Typography>
                        <Typography className={classes.title} color="textSecondary">
                            {this.props.budget.category}
                        </Typography>
                        <Typography className={classes.title} color="textSecondary">
                            $0 from {this.props.budget.budget}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <BudgetMoreMenu onDelete={this.handleDelete} id={this.props.budget.id} />
                    </CardActions>
                </Card>
            </div>
        )
    }
}

Budget.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Budget);
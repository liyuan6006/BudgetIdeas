


import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { getSavings } from '../actions/saving';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';

const styles = theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    fab: {
        position: 'absolute',
        bottom: theme.spacing.unit * 2,
        right: theme.spacing.unit * 2,
    }
});

class SavingList extends React.Component {
    state = {
        expanded: null,
    };

    handleChange = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
    };

    handleAdd = () => {
        this.props.history.push('/addSavings')
    }

    render() {
        const { classes } = this.props;
        const { expanded } = this.state;

        return (

            <div className={classes.root}>
                <Card>
                    <CardContent >
                        <ExpansionPanel expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography className={classes.heading}>June 2018</Typography>
                                <Typography className={classes.secondaryHeading}>$3000</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography>
                                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas
                                    eros, vitae egestas augue. Duis vel est augue.
            </Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>

                        <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography className={classes.heading}>July 2018</Typography>
                                <Typography className={classes.secondaryHeading}>$1,000</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography>
                                    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                                    maximus est, id dignissim quam.
            </Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>

                        <ExpansionPanel expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography className={classes.heading}>August 2019</Typography>
                                <Typography className={classes.secondaryHeading}>$500</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography>
                                    Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar
                                    diam eros in elit. Pellentesque convallis laoreet laoreet.
            </Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <Button variant="fab" color="primary" aria-label="add" mini className={classes.fab}>
                            <AddIcon onClick={() => this.handleAdd()} />
                        </Button>
                    </CardContent>

                </Card>
            </div>

        );
    }
}

SavingList.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
    return {
        savings: state.savings
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getSavings: () => {
            dispatch(getSavings())
        }

    }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(SavingList));
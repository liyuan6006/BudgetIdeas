import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/index';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing.unit,
    },
    withoutLabel: {
        marginTop: theme.spacing.unit * 3,
    },
    textField: {
        minWidth: 250,
    },
});

const INITIAL_STATE = {
    email: '',
    error: null,
};

class PasswordForget extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = (event) => {
        const { email } = this.state;

        auth.doPasswordReset(email)
            .then(() => {
                this.setState({ ...INITIAL_STATE });
            })
            .catch(error => {
                this.handleChange('error', error);
            });

        event.preventDefault();
    }


    handleChange = (name, value) => {
        this.setState({
            [name]: value
        })

    };
    render() {
        const { classes } = this.props;
        const {
            email,
            error,
        } = this.state;

        const isInvalid = email === '';

        return (
            <form onSubmit={this.onSubmit}>
                <Card>
                    <CardContent >
                        <h1>PasswordForget</h1>
                        <TextField
                            id="email"
                            label="Email"
                            className={classes.textField}
                            value={email}
                            onChange={event => this.handleChange('email', event.target.value)}
                            margin="normal"
                        />
                        <br />

                        {/* <input
                            value={this.state.email}

                            onChange={event => this.handleChange('email', event.target.value)}
                            type="text"
                            placeholder="Email Address"
                        /> */}
                        <br />

                        <Button variant="contained" color="primary" className={classes.button} disabled={isInvalid} type="submit">
                            Reset My Password
      </Button>

                        {error && <p>{error.message}</p>}
                    </CardContent>
                </Card>
            </form>
        );
    }
}

const PasswordForgetLink = () =>
    <p>
        <Link to="/passwordForget">Forgot Password?</Link>
    </p>




export default withStyles(styles)(PasswordForget);

export {
    PasswordForgetLink,
};
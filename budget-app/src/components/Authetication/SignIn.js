import React, { Component } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/index';
import { SignUpLink } from './SignUp';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import {PasswordForgetLink} from './PasswordForget';
// const SignInPage = () =>
//     <div>
//         <h1>SignIn</h1>
//         <SignInForm />
//     </div>

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
    showPassword:false
};


const styles = theme => ({
    root: {
        //display: 'flex',
        //justifyContent: 'center',
        //flexWrap: 'wrap',
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


class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }
    handleMouseDownPassword = event => {
        event.preventDefault();
    };

    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
    };

    handleChange = (name, value) => {
        this.setState({
            [name]: value
        })

    };
    onSubmit = (event) => {
        const {
            email,
            password,
            showPassword
        } = this.state;
        auth.doSignInWithEmailAndPassword(email, password)
            .then(authUser => {
                console.log('auth good')
                this.setState({ ...INITIAL_STATE });
                this.props.history.push('/overview');
            })
            .catch(error => {
                console.log('auth bad')
                this.handleChange('error', error);
            });

        event.preventDefault();
    }

    render() {
        const { classes } = this.props;
        const {
            email,
            password,
            error,
            showPassword
        } = this.state;

        const isInvalid =
            this.state.password === '' ||
            this.state.email === '';

        return (
            <form className={classes.root} onSubmit={this.onSubmit}>
                <Card>
                    <CardContent >
                        <h1>SignIn</h1>

                        <TextField
                            id="email"
                            label="Email"
                            className={classes.textField}
                            value={email}
                            onChange={event => this.handleChange('email', event.target.value)}
                            margin="normal"
                        />
                        <br />

                        <FormControl className={classNames(classes.margin, classes.textField)}>
                            <InputLabel htmlFor="adornment-password">Password</InputLabel>
                            <Input
                                id="adornment-password"
                                type={this.state.showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={event => this.handleChange('password', event.target.value)}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="Toggle password visibility"
                                            onClick={this.handleClickShowPassword}
                                            onMouseDown={this.handleMouseDownPassword}
                                        >
                                            {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        <br />
                        {/* <button disabled={isInvalid} type="submit">
                            Sign In
        </button> */}
        <Button variant="contained" color="primary" className={classes.button} disabled={isInvalid} type="submit">
        Sign In
      </Button>


                        {this.state.error && <p>{this.state.error.message}</p>}
                        <SignUpLink />
                        <PasswordForgetLink/>
                    </CardContent>
                </Card>
            </form>
        );
    }
}

SignIn.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignIn);


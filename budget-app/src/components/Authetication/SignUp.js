import React, { Component } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/index';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';

const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
};

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

class SignUp extends Component {
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
            username,
            email,
            passwordOne,
            passwordTwo,
            showPassword
        } = this.state;
        auth.doCreateUserWithEmailAndPassword(email, passwordOne)
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
            username,
            email,
            passwordOne,
            passwordTwo,
            error,
            showPassword
        } = this.state;

        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            username === '';
        return (
            <form className={classes.root} onSubmit={this.onSubmit}>
                <Card>
                    <CardContent >
                        <h1>SignUp</h1>
                        <TextField
                            id="name"
                            label="User Name"
                            className={classes.textField}
                            value={username}
                            onChange={event => this.handleChange('username', event.target.value)}
                            margin="normal"
                        />
                        <br/>
                        <TextField
                            id="email"
                            label="Email"
                            className={classes.textField}
                            value={email}
                            onChange={event => this.handleChange('email', event.target.value)}
                            margin="normal"
                        />
                        <br/>
                        <FormControl className={classNames(classes.margin, classes.textField)}>
                            <InputLabel htmlFor="adornment-password">Password</InputLabel>
                            <Input
                                id="adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                value={passwordOne}
                                onChange={event => this.handleChange('passwordOne', event.target.value)}
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
                        <br/>
                        <FormControl className={classNames(classes.margin, classes.textField)}>
                            <InputLabel htmlFor="adornment-password">Password</InputLabel>
                            <Input
                                id="adornment-password"
                                type={this.state.showPassword ? 'text' : 'password'}
                                value={passwordTwo}
                                onChange={event => this.handleChange('passwordTwo', event.target.value)}
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
                        <br/>
                        {/* <input
                    value={username}
                    onChange={event=>this.handleChange('username',event.target.value)}
                    type="text"
                    placeholder="Full Name"
                /> */}
                        {/* <input
                            value={email}
                            onChange={event => this.handleChange('email', event.target.value)}
                            type="text"
                            placeholder="Email Address"
                        /> */}
                        {/* <input
                            value={passwordOne}
                            onChange={event => this.handleChange('passwordOne', event.target.value)}
                            type="password"
                            placeholder="Password"
                        />
                        <input
                            value={passwordTwo}
                            onChange={event => this.handleChange('passwordTwo', event.target.value)}
                            type="password"
                            placeholder="Confirm Password"
                        /> */}
                      <Button variant="contained" color="primary" className={classes.button} disabled={isInvalid} type="submit">
        Sign Up
      </Button>
                        {error && <p>{error.message}</p>}
                    </CardContent>
                </Card>
            </form>
        );
    }
}

const SignUpLink = () =>
    <p>
        Don't have an account?
    {' '}
        <Link to={'/signUp'}>Sign Up</Link>
    </p>
export {
    SignUpLink
};



export default withStyles(styles)(SignUp);


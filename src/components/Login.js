import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';
import logo from '../images/icons/Paper-Plane.svg';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
    main: {
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing.unit,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
    },
});

export class Login extends Component {
    state = {
        authedUserId: ""
    }

    handleSubmit = (e) => {

        this.props.dispatch(setAuthedUser(this.state.authedUserId));
    }

    handleChange = (e) => {
        this.setState({
            authedUserId: e.target.value
        });
    }
    render() {
        const { classes, usersID } = this.props;
        const { authedUserId } = this.state;

        return (
            <main className={classes.main}>
                <CssBaseline />
                <Paper className={classes.paper}>
                    <Avatar src={logo} alt="logo" className={classes.avatar} />
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <form className={classes.form} onSubmit={this.handleSubmit.bind(this)} >
                        <FormControl margin="normal" required fullWidth>
                            <Select
                                value={authedUserId}
                                onChange={this.handleChange.bind(this)}
                                name='user'
                                displayEmpty
                            >
                                <MenuItem value='' disabled>Select user</MenuItem>
                                {usersID.map((id) => (
                                    <MenuItem key={id} value={id}>{id}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign in
                        </Button>
                    </form>
                </Paper>
            </main>
        );
    }
}

function mapStateToProps({ users }) {
    return {
        users,
        usersID: Object.keys(users)
    }
}

export default connect(mapStateToProps)(withStyles(styles)(Login))
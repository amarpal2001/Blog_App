import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import GitHubIcon from "@material-ui/icons/GitHub"
import FacebookIcon from "@material-ui/icons/Facebook"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import InstagramIcon from "@material-ui/icons/Instagram"
import Popover from '@material-ui/core/Popover';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CancelIcon from '@material-ui/icons/Cancel';
import axios from 'axios';
import { useHistory } from 'react-router';

const Copyright = () => {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="#">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor:'aqua'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },      
    title: {
        flexGrow: 1,
    },
    footer: {
        width: "100%",
        background: '#ded30d',
        marginTop: theme.spacing(3),
    },
    copyright: {
        marginTop: theme.spacing(6),
        color: "white"
    },
    popup: {
        width: "65%",
    },

    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(2, 0, 2),
    },
    close: {
        cursor: "pointer",
    }

}));

function Home() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(false);
    const [title, setTitle] = useState();
    const [text, setText] = useState();
    const history = useHistory()

    const handleClick = () => {
        setAnchorEl(true);
    };

    const handleClose = () => {
        setAnchorEl(false);
    };

    const submitHandler = (e) => {
        e.preventDefault()
        const blogs = {
            title: title,
            text: text
        }
        axios.post("https://somesh-blog-app.herokuapp.com/blogs", blogs)
        .then((res) => {
            console.log(res)
        })
    }


    const handleblog = () => {
        history.push("/blog")
    }


    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <>
            <div className={classes.root}>
                <AppBar position="static" color="transparent">
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Home
                        </Typography>
                        <Button color="inherit" onClick={handleblog}>Blog</Button>
                        <Button color="inherit" onClick={handleClick}>Add</Button>
                    </Toolbar>
                </AppBar>
                <div>
                    <Popover
                        className={classes.popup}
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        anchorReference="anchorPosition"
                        anchorPosition={{ top: 130, left: 675 }}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                    >
                        <CancelIcon onClick={handleClose} className={classes.close} />
                        <Typography variant="h6" className="text-center">
                            Blog
                        </Typography>
                        <Typography>
                            <Card>
                                <CardContent>
                                    <form className={classes.form} noValidate onSubmit={submitHandler}>
                                        <TextField
                                            variant="outlined"
                                            margin="normal"
                                            required
                                            fullWidth
                                            autoComplete="off"
                                            name="title"
                                            label="Title"
                                            type="text"
                                            id="title"
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)}
                                        />
                                        <TextField
                                            variant="outlined"
                                            margin="normal"
                                            required
                                            autoComplete="off"
                                            fullWidth
                                            id="text"
                                            label="Description"
                                            name="text"
                                            type="text"
                                            value={text}
                                            onChange={(e) => setText(e.target.value)}
                                        />

                                        <Button
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            color="primary"
                                            className={classes.submit}>
                                            Post
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </Typography>
                    </Popover>
                </div>

                <div id="demo" className="carousel slide mt-5 container-fluid" data-ride="carousel">

                    <ul className="carousel-indicators">
                        <li data-target="#demo" data-slide-to="0" className="active"></li>
                        <li data-target="#demo" data-slide-to="1"></li>
                        <li data-target="#demo" data-slide-to="2"></li>
                    </ul>

                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="http://cosmos.tt123.com.au/wp-content/uploads/2020/02/191010_nature.jpg" alt="Los Angeles" width="800" height="400" />
                        </div>
                        <div className="carousel-item">
                            <img src="https://wallpaperaccess.com/full/1204217.jpg" alt="Chicago" width="800" height="400" />
                        </div>
                        <div className="carousel-item">
                            <img src="https://i.redd.it/vuz4ozvkrm021.jpg" alt="New York" width="800" height="400" />
                        </div>
                    </div>

                    <a className="carousel-control-prev" href="#demo" data-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                    </a>
                    <a className="carousel-control-next" href="#demo" data-slide="next">
                        <span className="carousel-control-next-icon"></span>
                    </a>
                </div>

                <div className={classes.footer}>
                    <BottomNavigation className={classes.footer} >
                       <BottomNavigationAction label="Github" value="Github" href="https://github.com/amarpal2001" target="_blank" icon={<GitHubIcon />} />
                        <BottomNavigationAction label="Facebook" value="Facebook" href="https://www.facebook.com/amarpal.shakya.35325/" target="_blank" icon={<FacebookIcon />} />
                        <BottomNavigationAction label="LinkedIn" value="LinkedIn" href="https://www.linkedin.com/in/amarpal-shakya-68999a203/" target="_blank" icon={<LinkedInIcon />} />
                        <BottomNavigationAction label="Instagram" value="Instagram" href="https://www.instagram.com/amarpal0111/" target="_blank" icon={<InstagramIcon />} />

                    </BottomNavigation>
                    <Copyright className={classes.copyright} />
                </div>
            </div>
        </>
    );
}


export default Home;
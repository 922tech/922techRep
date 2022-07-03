import React, {useState} from 'react';
import {Container, CssBaseline} from '@material-ui/core';
import useStyles from '../styles/style.js';
import MyToolBar from './MytoolBar';
import Chest from "./chest";
import CardGrid from "./CardsGrid";

let CARDS = ["https://images.kojaro.com/2018/11/6a374fa7-203c-4d87-9320-e29ad5d786c4.jpg",
             "https://setare.com/files/1399/04/16/Untitled-1.jpg",
             "https://roozaneh.net/wp-content/uploads/2019/09/%D8%B9%DA%A9%D8%B3-%D9%85%D9%86%D8%B8%D8%B1%D9%87-11.jpg",
             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4O1eZI8s_jnczkwub27veaEujaNYABdw75A&usqp=CAU",
             "https://setare.com/files/1399/04/16/Untitled-1.jpg"]


const App = () => {
    const classes = useStyles()
    return (
        <>
            <CssBaseline/>
            <MyToolBar classes={classes}/>
            <main>
                <Chest classes={classes}/>

                <Container className={classes.cardGrid} maxWidth='md'>
                    <CardGrid classes={classes} cards={CARDS}/>

                </Container>
            </main>
        </>
    );
}

export default App;

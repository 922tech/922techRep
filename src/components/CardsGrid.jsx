import {Button, Card, CardContent, CardMedia, Grid, Typography} from "@material-ui/core";
import {CardActions} from "@material-ui/core";
import React, {useState} from 'react';


const MyGrid = ({classes, card, key}) => {

    return (
        <Grid item key={key} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                    <CardMedia
                        className={classes.cardMedia}
                        image={card}
                        titel='Image Title'
                    />
                    <CardContent className = {classes.cardContent}>
                        <Typography gutterBottom variant = 'h5'>
                            عنوان
                        </Typography>
                        <Typography variant = 'subtitle2'>
                            در این محل کپشن نمایش داده می شود
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size = 'small' color = 'primary'>نمایش</Button>
                        <Button size = 'small' color = 'primary'>ویرایش</Button>

                    </CardActions>
                </Card>
            </Grid>
    );
}


const CardGrid = ({classes, cards}) => {
    const [myCards,setCards] = useState(cards)

    function CreateCards(card, key) {
        return (<MyGrid classes = {classes} card = {card} key = {key}/>);
    };

    return (
        <Grid container spacing = {4}>
            {myCards.map(CreateCards)}
        </Grid>
    );
}

export default CardGrid;

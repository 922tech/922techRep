import {Button, Container, Grid, Typography} from "@material-ui/core";
import React from "react";
import FormDialog from "./Dialog";


const Chest = ({classes, cards}) => {
    return (
        <div className = {classes.container}>
            <Container maxWidth = 'sm'>
                <Typography variant = 'h2' align = "center" color = "textPrimary" gutterBottom>
                    آلبوم عکس
                </Typography>
                <Typography variant = 'h5' align = 'center' color = "textSecondary" paragraph>
                    لورم اپیسوم متن ساختگی جهت نمایش در جاهایی از این وبسایت است که نیاز به متن دارد
                </Typography>

                <div className = {classes.button}>
                    <Grid container spacing = {2} justify = 'center'>
                        <Grid item>
                            <Button variant = 'contained' color = 'primary'>
                                دکمه تزئینی
                            </Button>
                        </Grid>

                    </Grid>
                </div>
            </Container>
        </div>);
}

export default Chest;

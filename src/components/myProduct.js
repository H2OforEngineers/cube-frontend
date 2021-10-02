import React, { useContext, useState, useEffect } from "react";
import { Button, Card, Elevation } from '@blueprintjs/core';
// import {SettingsContext} from "../../context/settingsContext"
import superagent, { saveCookies } from 'superagent';
import cookie from "react-cookies";
// import './list.css'

function MyProduct(props) {
    const settings = useContext(SettingsContext)
 
    const API = 'https://cube-backend-401.herokuapp.com/product/mechanic'

    async function deleteItem(id) {
        const token = cookie.load("token");
        await superagent.delete(`${API}/${id}`).set('authorization', `Bearer ${token}`)

    }

    useEffect(async () => {
        const token = cookie.load("token");
        let respone = await superagent.get(`${API}/product/mechanic`).set('authorization', `Bearer ${token}`)

        props.setList(respone.body.todo)


    }, [props.list])



    return (

        <div key={item.id} >
            <Card sx={{ maxWidth: 345 }} elevation={Elevation.TWO}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            P
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={element.name}
                    subheader={date}
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={element.image}
                    alt={element.name}
                />
                <CardContent>

                    <Typography variant="body2" color="textPrimary" component="h3" >
                        Price: {element.price}$
                    </Typography>
                    <Typography variant="body2" color="textPrimary" component="h3" >
                        Contact Number: {element.phoneNumber}
                    </Typography>
                </CardContent>

                <CardActions disableSpacing>

                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>

                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>Description:</Typography>
                        <Typography paragraph>
                            {element.description}
                        </Typography>

                    </CardContent>
                </Collapse>

                <Button onClick={() => deleteItem(index)}
                    className='bp3-intent-danger'
                    style={{
                        position: "absolute",
                        right: "15px"
                    }}>
                    delete </Button>
            </Card>
        </div>
    );


}

export default MyProduct;

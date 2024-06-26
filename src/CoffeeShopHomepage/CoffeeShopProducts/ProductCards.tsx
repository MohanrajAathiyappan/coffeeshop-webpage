import React from "react";
import "./ProductCardsStyle.scss";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    IconButton,
    Stack,
    Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FirstCoffeeProduct from "./CoffeeProductImages/CoffeeProduct1.jpg";
import FlatWhiteCoffee from "./CoffeeProductImages/flatwhite.jpg";
import CaffeMocha from "./CoffeeProductImages/Caffe mocha.jpg";
import Affogato from './CoffeeProductImages/Affogato Image.jpg'
import IrishCoffee from './CoffeeProductImages/Irish coffee.jpg'
import ColdBrew from './CoffeeProductImages/Coldbrew.webp'
import Seed from './CoffeeProductImages/seedcoffee.png'
const ProductCards = () => {
    return (
        <div className="backgroundCoofee">
            <div className="CoffeeProducts">
                <Card sx={{ maxWidth: 345, padding: "10px", backgroundColor: 'rgb(247, 229, 196)', borderRadius: '36px' }}>
                    <CardHeader title="Cappuccino" sx={{textAlign:'center'}}
                    //subheader="September 14, 2016"
                    />
                    <CardMedia
                        sx={{ borderRadius: '26px' }}
                        component="img"
                        height="194"
                        image={FirstCoffeeProduct}
                        alt="Coffee"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            A cappuccino is an espresso-based coffee drink that is
                            traditionally prepared with steamed milk foam. Variations of the
                            drink involve the use of cream instead of milk.
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                        <Stack direction="row" spacing={2} sx={{ marginLeft: "20px" }}>
                            <Button
                                variant="contained"
                                endIcon={<ShoppingCartOutlinedIcon />}
                                sx={{ backgroundColor: "grey" }}
                            >
                                Add to Cart
                            </Button>
                        </Stack>
                    </CardActions>
                </Card>
            </div>

            <div className="CoffeeProducts">
                <Card sx={{ maxWidth: 345, padding: "10px", backgroundColor: 'rgb(247, 229, 196)', borderRadius: '36px' }}>
                    <CardHeader
                        title="Flat White Coffee" sx={{textAlign:'center'}}
                    />
                    <CardMedia
                        sx={{ borderRadius: '26px' }}
                        component="img"
                        height="194"
                        image={FlatWhiteCoffee}
                        alt="FlatWhiteCoffee"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            A flat white is a coffee drink consisting of espresso with
                            microfoam. It is comparable to a latte, but smaller in volume and
                            with less microfoam,
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                        <Stack direction="row" spacing={2} sx={{ marginLeft: "20px" }}>
                            <Button
                                variant="contained"
                                endIcon={<ShoppingCartOutlinedIcon />}
                                sx={{ backgroundColor: "grey" }}
                            >
                                Add to Cart
                            </Button>
                        </Stack>
                    </CardActions>
                </Card>
            </div>

            <div className="CoffeeProducts">
                <Card sx={{ maxWidth: 345, padding: "10px", backgroundColor: 'rgb(247, 229, 196)', borderRadius: '36px' }}>
                    <CardHeader title="Caffe Mocha" sx={{textAlign:'center'}} />
                    <CardMedia
                        sx={{ borderRadius: '26px' }}
                        component="img"
                        height="194"
                        image={CaffeMocha}
                        alt="Coffee"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            A caffè mocha, also called mocaccino, is a chocolate-flavoured
                            warm beverage that is a variant of a caffè latte, commonly served
                            in a glass rather than a mug.
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                        <Stack direction="row" spacing={2} sx={{ marginLeft: "20px" }}>
                            <Button
                                variant="contained"
                                endIcon={<ShoppingCartOutlinedIcon />}
                                sx={{ backgroundColor: "grey" }}
                            >
                                Add to Cart
                            </Button>
                        </Stack>
                    </CardActions>
                </Card>
            </div>

            <div className="CoffeeProducts">
                <Card sx={{ maxWidth: 345, padding: "10px", backgroundColor: 'rgb(247, 229, 196)', borderRadius: '36px' }}>
                    <CardHeader sx={{textAlign:'center'}}
                        title="Affogato Coffee"
                    />
                    <CardMedia
                        sx={{ borderRadius: '26px' }}
                        component="img"
                        height="194"
                        image={Affogato}
                        alt="Coffee"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                        An affogato, more traditionally known as "affogato al caffè",
                        is an Italian coffee-based dessert.In the form of a scoop 
                        of plain milk-flavored or vanilla gelato or ice cream topped.
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                        <Stack direction="row" spacing={2} sx={{ marginLeft: "20px" }}>
                            <Button
                                variant="contained"
                                endIcon={<ShoppingCartOutlinedIcon />}
                                sx={{ backgroundColor: "grey" }}
                            >
                                Add to Cart
                            </Button>
                        </Stack>
                    </CardActions>
                </Card>
            </div>

            <div className="CoffeeProducts">
                <Card sx={{ maxWidth: 345, padding: "10px", backgroundColor: 'rgb(247, 229, 196)', borderRadius: '36px' }}>
                    <CardHeader sx={{textAlign:'center'}}
                        title="Irish Coffee"
                    />
                    <CardMedia
                        sx={{ borderRadius: '26px' }}
                        component="img"
                        height="194"
                        image={IrishCoffee}
                        alt="Coffee"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                        Irish coffee is a caffeinated alcoholic drink consisting of 
                        Irish whiskey, hot coffee and sugar, which has been stirred and 
                        topped with cream.The coffee is drunk through the cream.
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                        <Stack direction="row" spacing={2} sx={{ marginLeft: "20px" }}>
                            <Button
                                variant="contained"
                                endIcon={<ShoppingCartOutlinedIcon />}
                                sx={{ backgroundColor: "grey" }}
                            >
                                Add to Cart
                            </Button>
                        </Stack>
                    </CardActions>
                </Card>
            </div>

            <div className="CoffeeProducts">
                <Card sx={{ maxWidth: 345, padding: "10px", backgroundColor: 'rgb(247, 229, 196)', borderRadius: '36px' }}>
                    <CardHeader sx={{textAlign:'center'}}
                        title="Cold Brew Coffee"
                    />
                    <CardMedia
                        sx={{ borderRadius: '26px' }}
                        component="img"
                        height="194"
                        image={ColdBrew}
                        alt="Coffee"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                        Cold brew coffee, also called cold water extraction or cold pressing, 
                        is the process of steeping coffee grounds in water at cool temperatures 
                        for an extended period.
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                        <Stack direction="row" spacing={2} sx={{ marginLeft: "20px" }}>
                            <Button
                                variant="contained"
                                endIcon={<ShoppingCartOutlinedIcon />}
                                sx={{ backgroundColor: "grey" }}
                            >
                                Add to Cart
                            </Button>
                        </Stack>
                    </CardActions>
                </Card>
            </div>
        </div>
    );
};

export default ProductCards;

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

const ProductCards = () => {
    return (
        <div>
            <div className="CoffeeProducts">
                <Card sx={{ maxWidth: 345, padding: "10px" }}>
                    <CardHeader title="Cappuccino" subheader="September 14, 2016" />
                    <CardMedia
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
                <Card sx={{ maxWidth: 345, padding: "10px" }}>
                    <CardHeader
                        title="Flat White Coffee"
                        subheader="September 14, 2016"
                    />
                    <CardMedia
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
                <Card sx={{ maxWidth: 345, padding: "10px" }}>
                    <CardHeader title="Caffe Mocha" subheader="September 14, 2016" />
                    <CardMedia
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
                <Card sx={{ maxWidth: 345, padding: "10px" }}>
                    <CardHeader
                        title="Shrimp and Chorizo Paella"
                        subheader="September 14, 2016"
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image={FirstCoffeeProduct}
                        alt="Coffee"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            This impressive paella is a perfect party dish and a fun meal to
                            cook together with your guests. Add 1 cup of frozen peas along
                            with the mussels, if you like.
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
                <Card sx={{ maxWidth: 345, padding: "10px" }}>
                    <CardHeader
                        title="Shrimp and Chorizo Paella"
                        subheader="September 14, 2016"
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image={FirstCoffeeProduct}
                        alt="Coffee"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            This impressive paella is a perfect party dish and a fun meal to
                            cook together with your guests. Add 1 cup of frozen peas along
                            with the mussels, if you like.
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
                <Card sx={{ maxWidth: 345, padding: "10px" }}>
                    <CardHeader
                        title="Shrimp and Chorizo Paella"
                        subheader="September 14, 2016"
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image={FirstCoffeeProduct}
                        alt="Coffee"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            This impressive paella is a perfect party dish and a fun meal to
                            cook together with your guests. Add 1 cup of frozen peas along
                            with the mussels, if you like.
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

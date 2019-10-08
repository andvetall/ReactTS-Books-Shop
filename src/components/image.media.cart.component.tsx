import React from 'react'
import "./styles/home.component.css"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { addToCart } from '../redux/addToCart/actions';
import {BrowserRouter as Router, Route, Link, LinkProps} from "react-router-dom";

const useStyles = makeStyles({
  card: {
    maxWidth: 245,
  },
});

const ImgMediaCard: React.FC<any> = (props:any) => {
  const classes = useStyles();
 const addItem = (id:any) => {
    const { addToCart } = props;
    addToCart( id ) ;
}
const AdapterLink = React.forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => (
  <Link innerRef={ref as any} {...props} />
));


  return (
    <Card className={`book-wrapper ${classes.card}`}>
      <CardActionArea
        component={AdapterLink} to={{
          pathname: `/bookInfo/${props.id}`
        }} 
      >
        <CardMedia
          component="img"
          alt={props.title}
          height="140"
          image={props.img}
          title={props.title}
        />
        <CardContent>

          <Typography style={{height: "100px"}} gutterBottom variant="h5" component="h2">
          {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <p>{`Price  - ${props.price}`}</p>
      <CardActions>
        <Button
        onClick = {() => addItem(props.id)}
        size="small" color="primary">
          Add to cart
        </Button>
        
      </CardActions>
      
    </Card>
  );
}
export default connect (null,{addToCart})(ImgMediaCard)
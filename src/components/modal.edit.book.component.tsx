import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Edit from "@material-ui/icons/Edit";
import "./styles/home.admin.component.css"
import { connect } from 'react-redux';
import { updateBook } from '../redux/showBooks/actions'
import Input from '@material-ui/core/Input';



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }),
);

const TransitionsModalEdit: React.FC<any> = props =>  {
    
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
let update = (id:number) => {
    let title1 = document.getElementsByClassName(`title${props.bookId}`)[0].children[0] as HTMLInputElement
    let price1 = document.getElementsByClassName(`price${props.bookId}`)[0].children[0] as HTMLInputElement
    let amount1 = document.getElementsByClassName(`amount${props.bookId}`)[0].children[0] as HTMLInputElement
    let description1 = document.getElementsByClassName(`description${props.bookId}`)[0].children[0] as HTMLInputElement
    let image1 = document.getElementsByClassName(`image${props.bookId}`)[0].children[0] as any
    let file:any = image1.files [0] 
    if(file !== undefined){
      let getBase64 = (file:any) => {
        let reader = new FileReader();
        reader.readAsDataURL(file); 
        reader.onload = function () {
          let body = {
            title: title1.value,  
            price: +price1.value,
            amount: amount1.value,
            description: description1.value,
            img: reader.result 
          }
        const { updateBook } = props;
        updateBook(id, body)
        };
      }
     getBase64(file) 
     setTimeout((e) => handleClose(),1000)
    }else{
     return alert('You forgot to update image')
    }
     
}



  return (
    <div>
      <button 
        type="button" 
        onClick={handleOpen}
        style={{
          padding: "0",
          border: "none",
          backgroundColor: "transparent",
          cursor: "pointer"
        }}
        >
        <Edit/>
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div id="modal-edit" className={classes.paper}>
            <h2 id="transition-modal-title">{`Edit Book ID-${props.bookId}`}</h2>
            <p id="transition-modal-description">Change data then press "Submit"</p>
            <div className='inputs-whapper'>
                <label>Title</label>
                <Input className={`title${props.bookId}`} type="text" defaultValue={props.bookTitle}></Input >
                <label>Image</label>
                <img 
                    className="smallImg"
                    onClick={(e:any) => e.target.className === "smallImg" ? e.target.className="bigImg" : e.target.className="smallImg"}
                    id={`book-img${props.imgId}`}
                    src={props.bookImage} 
                />
                <Input className={`image${props.bookId}`}  type="file"></Input>
                <label>Price</label>
                <Input className={`price${props.bookId}`} type="text" defaultValue={props.bookPrice}></Input>
                <label>Amount</label>
                <Input className={`amount${props.bookId}`} type="text" defaultValue={props.bookAmount}></Input>
            </div>
            <label>Description</label>
            <Input className={`description${props.bookId} description`} type="text" defaultValue={props.bookDescription}></Input>
            <div> 
              <button
                onClick={
                    (e:any) => update(props.bookId)
                }
              >Submit</button>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
export default connect(null, { updateBook })(TransitionsModalEdit)
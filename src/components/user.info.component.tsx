import React from 'react';
import { Link } from 'react-router-dom';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';


const TextFields:React.FC<any> = (props) => {
  return (
         <TextField
        id="standard-dense"
        label={props.title}
        defaultValue={props.value}
        className={props.class}
        margin="dense"
      />
  );
}

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStylesModal = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }),
);

const SimpleModal1:React.FC <any> = (props) =>  {
  const classes = useStylesModal();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button 
      variant="outlined" color="primary" 
      type="button" 
      onClick = {handleOpen}
      >
        Change Details
      </Button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">Details will be updated after next authorisation</h2>
          {props.userDetails.map((prop:any) => {
            if(Object.keys(prop).toString() === "userImg"){
              return <Input type="file" key="vdvdfvdfvdv" className={`text-area-details${Object.keys(prop)}`}></Input>
            }else return <TextFields type="file" class={`text-area-details${Object.keys(prop)}`} key={`${Object.values(prop)}+${Object.keys(prop)}`} value={Object.values(prop)} title={Object.keys(prop)}/> 
          })}
          <Button
          style={{
            position: "absolute",
            padding: "10px",
            right: "20px",
            bottom: "23px"
          }}
          variant="outlined" color="primary" 
          type="button" 
          onClick = {props.doAction}
          >Submit</Button>
        </div>
      </Modal>
    </div>
  );
}

const useStylesUserINfo = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
    },
    input: {
      display: 'none',
    },
  }),
);

const UserInfo: React.FC <any> = (props) => {
    
  const classes = useStylesUserINfo();
   const data = props
   
   let createTitles = () => {
       let titles:any =[];
       for(let title in data.userinfo.data){
           if(title !== "permission" && title !== "_id"){
             titles.push({[title]: data.userinfo.data[title]})
            }
       }
     
       return titles
   }

const update = (id:number) => {
    let email1 = document.getElementsByClassName("text-area-detailsemail")[0].children[1].children[0] as HTMLInputElement
    let city1 = document.getElementsByClassName("text-area-detailscity")[0].children[1].children[0] as HTMLInputElement
    let mobile1 = document.getElementsByClassName("text-area-detailsmobile")[0].children[1].children[0] as HTMLInputElement
    let website1 = document.getElementsByClassName("text-area-detailswebsite")[0].children[1].children[0] as HTMLInputElement
    let street1 = document.getElementsByClassName("text-area-detailsstreet")[0].children[1].children[0] as HTMLInputElement
    let house1 = document.getElementsByClassName("text-area-detailshouse")[0].children[1].children[0] as HTMLInputElement
    let appartment1 = document.getElementsByClassName("text-area-detailsappartment")[0].children[1].children[0] as HTMLInputElement
    let country1 = document.getElementsByClassName("text-area-detailscountry")[0].children[1].children[0] as HTMLInputElement
    let image1 = document.getElementsByClassName("text-area-detailsuserImg")[0].children[0] as any
          let file:any = image1.files [0] 
          function getBase64(file:any) {
            let reader = new FileReader();
            if(file){
              reader.readAsDataURL(file); 
              reader.onload = function () {
                let body:any = {
                  _id: data.userinfo.data._id,
                  login: data.userinfo.data.login,
                  email: email1.value,
                  country: country1.value,
                  city: city1.value,
                  street: street1.value,
                  house: house1.value,
                  appartment: appartment1.value,
                  mobile: mobile1.value,
                  website: website1.value,
                  userImg: reader.result,  
                }
                let newData = JSON.parse(localStorage['state'])
                body.permission = newData.login.data.permission
                body.isLoggedIn = newData.login.data.isLoggedIn
                const { updateUser } = props;
                updateUser(id, body)
              };
            }else return alert('Image is required')
            
          }
         getBase64(file)
         
        };
        return(
                <div style={{
                    width: "50%",
                    margin: "-20px auto",
                    height: "100vh",
                    padding: "100px 50px",
                    boxShadow: "0px 0px 28px 0px"
                }}>
                    <img 
                        style={{width: "300px", margin: "0 0 50px 0"}}
                        src={data.userinfo.data.userImg} 
                        alt="userImage"
                    />
                    <h1><span>{data.userinfo.data.email}</span></h1>
                    <h2>{data.userinfo.data.mobile}</h2>
                    <p
                        style={{
                            width: "70%",
                            margin: "-40px auto",
                            padding: "100px 50px",
                            lineHeight: "43px"
                        }}
                    ><a href={data.userinfo.data.website}>{data.userinfo.data.website}</a></p>
                    <span>
                        <Button  variant="outlined" color="primary" className={classes.button}>
                           <Link
                            style = {{
                                textDecoration: "none",
                                color: "inherit"
                            }}
                           to={data.userinfo.data.permission === "admin" ? "/home-admin" : "/home"}> Go Back</Link>
                        </Button>
                    </span>
                    <span>
                            <SimpleModal1
                            doAction = {(e:any) => update(data.userinfo.data._id)}
                            userDetails={createTitles()}
                            />
                    </span>             
                </div>
        )
}
 export default UserInfo


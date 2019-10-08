import React from 'react'
import "./styles/home.admin.component.css"
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import EnhancedTableBooks from "./table.books.component"
import SimpleTableUsers from "./table.users.component"

import CircularProgress from '@material-ui/core/CircularProgress';

const CircularUnderLoad:React.FC = (props) => {
  return <CircularProgress disableShrink />;
}


interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
  }),
);

const SimpleTabs: React.FC<any> = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event: React.ChangeEvent<{}>, newValue: number) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Books" {...a11yProps(0)} />
          <Tab label="Users" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      {props.books}
      </TabPanel>
      <TabPanel value={value} index={1}>
      {props.users}
      </TabPanel>
    </div>
  );
}



export default class HomeAdminComponent extends React.Component <any, any> {
    state: any = {
        books: []
    }
    showB = () => {
      const { showBooks } = this.props;
      showBooks() ;
  }
  showU = () => {
    const { showUsers } = this.props;
    showUsers() ;
}

    componentDidMount(){
      this.showB()
      this.showU()
    }
    
    render(){
        return(
            <div>
              {this.props.data.permission === "admin" ?
              (
                <div>
                <p>Here suppose to be main information</p>
                  <SimpleTabs
                    books={<EnhancedTableBooks/>}
                    users={<SimpleTableUsers/>}
                />
              </div>
              )  
              : <CircularUnderLoad/>}
              
                
            </div>
        )
    }
    
}


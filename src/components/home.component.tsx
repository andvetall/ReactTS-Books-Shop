import React from 'react'
import "./styles/home.component.css"
import ImgMediaCard from "./image.media.cart.component"
import {DebounceInput} from 'react-debounce-input';
import  Search  from "@material-ui/icons/Search"
import CircularProgress from '@material-ui/core/CircularProgress';
import { request } from '../services/request'

const CircularUnderLoad:React.FC = (props) => {
  return <CircularProgress disableShrink />;
}



export default class HomeComponent extends React.Component <any, any> {
    state: any = {
        books: [],
        value: ''
    }
    componentDidMount(){
        request('books', "GET" ).then(
            booksList => this.setState(this.state.books = booksList)
        )
    }
    render(){
        return(
            <div>
                {this.state.books.length && this.props.data.permission === "user" ? 
                (
                    <div>
                    <p>Try to find a book you need</p>
                    <div
                        style={{
                            margin: "20px"
                        }}
                    >
                        <Search/>
                        <DebounceInput
                            style={{
                                borderTop: "none",
                                borderBottom: "solid 1px",
                                borderLeft: "none",
                                borderRight: "none",
                                width: "250px",
                                outline: "0",
                                padding: "5px"
                            }}
                            minLength={2}
                            debounceTimeout={300}
                            onChange={event => this.setState({value: event.target.value})} />
                    </div>
                    <div className="home-wrapper">
                        {(this.state.books.map(
                            (book: any) => {
                                if(book.title.toLocaleLowerCase().includes(this.state.value.toLocaleLowerCase()) ) {
                                    return <ImgMediaCard
                                    key = {`${book._id}+${book.title}`}
                                    description = {book.description}
                                    title = {book.title}
                                    img = {book.img}
                                    price = {`${+book.price} USD`}
                                    id = {book._id}

                                >
                                </ImgMediaCard>
                                }
                                
                            }
                    )) }
                    </div>
                    </div>
                )
                : <CircularUnderLoad/>}
                
            </div>
        )
    }
    
}

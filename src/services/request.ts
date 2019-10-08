import axios from 'axios';

export function request(urli:string,  method: any, body?: object) {
    const headers = {
        'Content-Type': 'application/json',  
        'Authorization': `Bearer ${localStorage.getItem('token')}` || '',
        'Access-Control-Allow-Origin': '*'
    }
    return axios({
        method: method,
        url: `http://localhost:4444/${urli}`,
        data: body,
        headers: headers
      }).then((response : any) => {
          return  response.data
        })
   
} 

import axios from "axios";

var http = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/users/1/',
});

export function getRequest ( url: string ) {
  return http.get( url)
    .then( res => res )
    .catch( err => err );
}

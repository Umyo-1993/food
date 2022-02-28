import axios from 'axios';

export default axios.create({
baseURL:'https://api.yelp.com/v3/businesses',
headers:
{
 Authorization:'Bearer QhGNuhcE5EsQGlwwkEssaoi9TxbiTuR8UGGJiTO85pKSjOjgrtRZinvKnkUmuyJQDB0zL6WOSd9u9yYwBOs9Qg0V4HxubXoccUDVhh_jzII9QLTeIr0x8T__QBxXYXYx'
}

});

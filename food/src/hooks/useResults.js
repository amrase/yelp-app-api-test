import {useEffect,useState} from 'react'
import yelp from '../api/yelp'

export default () =>{
    const [results,setResults] = useState([]);
    // const [errorMessage,setErrorMessage] = useState('')

    useEffect(() => {
        searchApi()
    }, [])

    //helper function
    const searchApi = async (searchTerm) =>{
        try {
       const response = await yelp.get('/search',{
           params: {
                limit:50,
                term : searchTerm,
                location: 'New York'
           }
       });
       setResults(response.data.businesses)
        }
        catch(e){
            alert('Something went wrong')
        }
    }

    return [searchApi,results]
}
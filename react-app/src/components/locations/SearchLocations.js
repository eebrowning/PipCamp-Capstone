import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Search = () => {
  // const dispatch = useDispatch()
  const [enhancedSearch, setEnhancedSearch] = useState([])
  // const [keystroke, setKeystroke] = useState('');
  const allLocations = useSelector(state=>state.locations)
  const locations = Object.values(allLocations);
  let search = []
  // const cleanup = () => {
  //   setEnhancedSearch([])
  // }
  const filteredLocation = (e)=>{
    if(e.target.value){
      search = locations.filter(location=>{
        if(location.name.toLowerCase().includes(e.target.value.toLowerCase()) || location.cuisine.toLowerCase().includes(e.target.value.toLowerCase())){
          return true;
        }
      })
    }
    console.log(search)
    setEnhancedSearch(search)
  }
  return (
    <>
      <input
        className='locationSearch'
        type='text'
        placeholder="Search your favorite location or cuisine"
        onChange={
          filteredLocation
          }
         />
      <div className='results-container'>
        {enhancedSearch.map(result => (
          <Link key={result.id} to={`/locations/${result.id}`}>
            <div className='individual-result'>
              <p className='search-name'>{result.name}</p>
            <p>{result.descritpion}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
};

export default Search;

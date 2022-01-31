import React,{useState} from 'react';
import Sresult from './Sresult';

const Search = () => {
    const[name, setName] = useState();
    let inputEvent = (event) =>{
        let data = event.target.value;
        setName(data);
    }
  return (
      <>
          <div className="searchBar">
              <input type="text" placeholder='Search anything...' 
                  value={name}
                  onChange={inputEvent}
              />
              <br />
              <Sresult imgName = {name} />
          </div>
      </>
  );
};

export default Search;

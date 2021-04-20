import React from 'react';
import ReactDOM from 'react-dom';




class Search extends React.Component {
  render() {
    return(
           <div className="float-right">
            <form className=" search form-inline col-4 justify-content-right" action="/action_page.php">
                <input className="form-control fa " type="text" placeholder="&#xf002;"></input>
            </form>
           </div>
         );
      }
}
export default Search;

import React from 'react';
import ReactDOM from 'react-dom';




class RightNav extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.data.RightNavbar)
    return(
           <div className="float-right">
            <form className=" search form-inline justify-content-right" action="/">
              <span> <i class="fa fa-search icon"></i></span>
                  <a className="ml-3" href="userLogin"><i class="fa fa-user-o icon " > </i></a>
            </form>

           </div>
         );
      }
}
export default RightNav;

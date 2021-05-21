import React from 'react';
import ReactDOM from 'react-dom';
import icons from './icons';


class FooterIcons extends React.Component {
  constructor(props){
    super(props);
  }

    render() {
      let Icons = this.props.item.FooterIcons.map((jsonpart) =>(
          <Icon item={jsonpart} />));
    return (
            <p className="text-center ml-3">{Icons}</p>
        );
      }
    }

class  Icon extends React.Component{
constructor(props){
  super(props)

}
render() {

    return(

      <a href={this.props.item.path} className="mr-2"> <i class={this.props.item.icon}></i></a>
    )

 }
}


    export default FooterIcons;

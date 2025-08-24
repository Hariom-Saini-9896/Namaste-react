import React  from 'react'

class Profile extends React.Component{
  constructor(props){
    super(props);      
    this.state = {
      count1: 0,
    }

  console.log("Constructro.");
  }

  componentDidMount(){
    console.log("Contructor ==> Render ==> ComponentDidMount.");
    console.log("Best Place to API call Because the REACT Life cycle.");
    
  }

  render(){
    const {count1} = this.state;
    console.log("Render");
    
    return(
      <div>
        <h1>This is Profile page and its a class based Component.</h1>
        <h3>Name: {this.props.name}</h3>
        <h3>XYZ: {this.props.XYZ}</h3>
        <h2>Count : {count1}</h2>
        <button onClick={ () => { this.setState({
          count1 : 1,
        }) } }>Count {count1} </button>
      </div>
    )
  }
}

export default Profile
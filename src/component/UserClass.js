import React from 'react';

class UserClass extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      userInfo :{
        name : 'dummy',
        location: 'chennai dummy'
      }
    }
  }
  async componentDidMount(){
    const data = await fetch('https://api.github.com/users/srinath-shankar');
    const json = await data.json();
    this.setState({
      userInfo : json
    })
   
  }
  render() {
    const { name,location,avatar_url} = this.state.userInfo;
    return (
      <div>
        <h1>User Class Component {name}</h1>
        <p>This is a {location}</p>
        <img src={avatar_url}/>
      </div>
    );
    
  }
}

export default UserClass;
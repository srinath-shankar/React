import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
    constructor(props){
        super(props);
        console.log('parent constructor');

    }
    componentDidMount(){
        console.log('parent componentDidMount');
    }
    render(){
        console.log('parent render');
        return(
            <div>
                <h1>about</h1>
                {/* <User name={'srinath'}/> */}
                <UserClass name={'srinath class'} location={'chn'}/>
            </div>
        )
        
    }
}


export default About;
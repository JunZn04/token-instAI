import React from "react";
import {Route, Redirect} from 'react-router-dom';

export default function Authroute({component:component, ...rest}){
    return(
        <Route 
        {...rest}
        render={(props)=>{
            let token = localStorage.getItem("token");

            if(!token){ //if token isn't exist
                return(
                    <Redirect 
                        to={{
                            pathname : '/login', //redirect to login page 
                            state : {
                                from : props.location.pathname
                            }
                        }}
                    ></Redirect>
                )
            }
            return <Component {...props}></Component>
        }}
        ></Route>

    );

}

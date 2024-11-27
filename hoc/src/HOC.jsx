import React from "react";

const WithLoader=(WrappedComponent)=>{
    return function WithLoaderComponent({isLoading,...props}){
        if(isLoading){
            return <h1>wait a second....</h1>
        }
        return <WrappedComponent {...props}/>
    }
}
export default WithLoader 
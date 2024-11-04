import React from "react";


class Labels extends React.Component{
    render(){
        const {isActive}=this.props;
        const style=isActive?{backgroundColor:"green"}:{backgroundColor:"orange"}
        return(
     <span style={style}>{isActive?"Active":"Not Active"}</span>
        )
    }
}

export default Labels;
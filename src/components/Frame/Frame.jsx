import React from "react";

const container = {
    padding: "10px",
}
const Frame = ({children}) => {

    return (
        <div style={container}>
            {children}
        </div>
    )
}
export default Frame;


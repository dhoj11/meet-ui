import React from "react";
const SinglePage = ({children}) => {

    let isLogin = false;
    // TODO : isLogin = 로그인 여부

    return(
        <>
            {/*TODO : 로그인시 헤더를 사용할 경우 isLogin && <Header /> */}
            {children}
        </>
    )
}
export default SinglePage
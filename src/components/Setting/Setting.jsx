import React from "react";
import styles from "./Setting.module.css";
import Picker from "./Picker/Picker";
import Info from "./Info/Info";

const Setting = () => {
    return(
        <div className={styles.container}>
            <Picker/>
            <Info/>
        </div>
    )
}
export default Setting

import React from "react";
import styles from "./MeetingRoom.module.css";
import Setting from "../../components/Setting/Setting";
import Scheduler from "../../components/Scheduler/Scheduler";

const MeetingRoom = () => {
    return(
        <div className={styles.container}>
            <Setting/>
            <Scheduler/>
        </div>
    )
}
export default MeetingRoom

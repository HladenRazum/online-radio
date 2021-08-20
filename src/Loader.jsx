import React from "react";
import styles from "./Loader.module.css";

const Loader = () => {
    return (
        <div className={styles.loader}>
            <h2>Loading stations...</h2>
        </div>
    );
};

export default Loader;

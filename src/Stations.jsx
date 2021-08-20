import React from "react";
import SingleStation from "./SingleStation";
import styles from "./Stations.module.css";

const Stations = (props) => {
    const stationsList = props.stations.map((station) => (
        <SingleStation
            key={station.id}
            name={station.name}
            tags={station.tags}
            url={station.url}
        />
    ));

    return (
        <section>
            <ul className={styles["stations-list"]}>{stationsList}</ul>
        </section>
    );
};

export default Stations;

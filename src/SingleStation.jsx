import React from "react";
import Tags from "./Tags";
import AudioPlayer from "react-h5-audio-player";
import { GoPrimitiveSquare, GoPlay } from "react-icons/go";
import { BsFillVolumeMuteFill, BsFillVolumeUpFill } from "react-icons/bs";
import styles from "./SingleStation.module.css";
import "react-h5-audio-player/lib/styles.css";

const SingleStation = (props) => {
    const { name, tags, url } = props;
    // clear whitespaces from the start in some of the headings
    const updatedName = name.trim();
    return (
        <li className={styles["single-station-item"]}>
            <div className={styles["single-station-inner"]}>
                <div>
                    <h3>{updatedName}</h3>
                    <Tags tags={tags} />
                </div>
                <AudioPlayer
                    showJumpControls={false}
                    src={url}
                    autoPlay={false}
                    customIcons={{
                        play: <GoPlay />,
                        pause: <GoPrimitiveSquare />,
                        volume: <BsFillVolumeUpFill />,
                        volumeMute: <BsFillVolumeMuteFill />,
                    }}
                />
            </div>
        </li>
    );
};

export default SingleStation;

import React from "react";
import classes from "./InfoSection.module.css";

const InfoSection = (props) => {
    return (
        <section className={classes.infosection}>
            <p className={classes.infotext}>
                Due to the old verstion of the API, to be able to fetch radio
                stations, you'll need to{" "}
                <a
                    className={classes.link}
                    href="https://experienceleague.adobe.com/docs/target/using/experiences/vec/troubleshoot-composer/mixed-content.html?lang=en"
                >
                    enable Mixed Content{" "}
                </a>{" "}
                in your browser for this page.
            </p>
            <button
                className={classes.closeBtn}
                onClick={props.closeInfoSection}
            >
                OK
            </button>
        </section>
    );
};

export default InfoSection;

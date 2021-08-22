import React from "react";
import classes from "./InfoSection.module.css";

const InfoSection = (props) => {
    return (
        <section className={classes.infosection}>
            <p className={classes.infotext}>
                Due to the old verstion of radio API, to be able to fetch radio
                stations you'll need to{" "}
                <strong>enable Mixed Content on your browser </strong>
                for this page. You can see how to do it{" "}
                <a
                    className={classes.link}
                    href="https://experienceleague.adobe.com/docs/target/using/experiences/vec/troubleshoot-composer/mixed-content.html?lang=en"
                    target="blank"
                >
                    here
                </a>
            </p>
            <button
                className={classes.closeBtn}
                onClick={props.closeInfoSection}
            >
                close
            </button>
        </section>
    );
};

export default InfoSection;

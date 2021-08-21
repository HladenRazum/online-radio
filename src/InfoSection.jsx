import React from "react";
import classes from "./InfoSection.module.css";

const InfoSection = (props) => {
    return (
        <section className={classes.infosection}>
            <p className={classes.infotext}>
                To be able to use the app, you'll need to enable Mixed content
                on this page. You can see how to do it{" "}
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

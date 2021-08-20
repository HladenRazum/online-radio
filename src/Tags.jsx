import React from "react";
import classes from "./Tags.module.css";

const Tags = (props) => {
    // remove empty tags
    const tags = props.tags;
    let newTags = [];
    let updatedTags;
    if (tags) {
        // some stations have lots of tags (3-10) - in such case we return first 3 available tags
        if (tags.length > 3) {
            newTags = tags.splice(0, 3);
        } else if (tags[0] === "undefined") {
            newTags = ["onine radio"];
        } else if (tags.length === 0) {
            newTags = ["onine radio"];
        } else {
            newTags = [...tags];
        }
        updatedTags = newTags.map((tag, index) => (
            <li className={classes.tag} key={index}>
                {tag}
            </li>
        ));
    }

    return <ul>{updatedTags}</ul>;
};

export default Tags;

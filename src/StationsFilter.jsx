import React, { useRef } from "react";
import styles from "./StationsFilter.module.css";

const StationsFilter = (props) => {
    const genreRef = useRef();
    const countryRef = useRef();

    return (
        <header className={styles.filter}>
            {/* message informing the uers how to fixed mixed content error */}
            <article>
                <p className={styles.info}>
                    To be able to use the app, you'll need to allow insecure
                    content and reload the page.
                </p>
                <a href="https://experienceleague.adobe.com/docs/target/using/experiences/vec/troubleshoot-composer/mixed-content.html?lang=en">
                    See how to allow insecure content here.
                </a>
            </article>

            <p>filters:</p>
            <div>
                <button
                    className={styles.action}
                    onClick={props.getAllStations}
                >
                    all music
                </button>
                <select
                    defaultValue="default"
                    name="genre"
                    id="genre"
                    ref={genreRef}
                    onChange={() => {
                        console.log(genreRef.current.values);
                        props.getStationsByGenre(genreRef.current.value);
                    }}
                >
                    <option disabled value="default">
                        filter by genre
                    </option>
                    <option value="rock">Rock</option>
                    <option value="metal">Metal</option>
                    <option value="jazz">Jazz</option>
                    <option value="trap">Trap</option>
                    <option value="dance">Dance</option>
                    <option value="electro">Electro</option>
                    <option value="minimal">Minimal</option>
                </select>
                <select
                    onChange={() => {
                        props.getStationsByLanguage(countryRef.current.value);
                    }}
                    defaultValue="default"
                    name="country"
                    id="country"
                    ref={countryRef}
                >
                    <option disabled value="default">
                        filter by country
                    </option>
                    <option value="bulgarian">Bulgaria</option>
                    <option value="english">USA</option>
                    <option value="spanish">Spain</option>
                    <option value="greek">Greece</option>
                    <option value="serbian">Serbia</option>
                    <option value="deutsch german">Germany</option>
                    <option value="nederlands">Netherlands</option>
                    <option value="russian">Russia</option>
                    <option value="italian">Italy</option>
                </select>
            </div>
        </header>
    );
};

export default StationsFilter;

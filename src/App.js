import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import { RadioBrowserApi } from "radio-browser-api";
import StationsFilter from "./StationsFilter";
import Stations from "./Stations";

const STATIONS_LIMIT = 80;

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [stations, setStations] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        getAllStations();
    }, []);

    // get stations by language
    const getStationsByLanguage = async (language) => {
        setIsLoading(true);

        try {
            const api = new RadioBrowserApi("online radio with react");

            const data = await api.searchStations({
                language: language, // filter by language
                limit: STATIONS_LIMIT, // number of stations displayed
                offset: 0,
            });

            const stations = data.map((station) => {
                const newStation = {
                    id: station.id,
                    name: station.name,
                    language: station.language,
                    tags: station.tags ? station.tags : [],
                    url: station.urlResolved,
                };

                return newStation;
            });
            // console.log(stations);

            setStations(stations);
            setIsLoading(false);
        } catch (error) {
            console.error(error);
            setError(true);
            return;
        }
    };

    // get stations by genre
    const getStationsByGenre = async (genre) => {
        setIsLoading(true);

        try {
            const api = new RadioBrowserApi("online radio with react");

            const data = await api.searchStations({
                tag: genre, // filter by genre
                limit: STATIONS_LIMIT, // number of stations displayed
                offset: 0,
            });

            const stations = data.map((station) => {
                const newStation = {
                    id: station.id,
                    name: station.name,
                    language: station.language,
                    tags: station.tags ? station.tags : [],
                    url: station.urlResolved,
                };

                return newStation;
            });

            setStations(stations);
            setIsLoading(false);
        } catch (error) {
            console.error(error);
            setError(true);
            return;
        }
    };

    // get all stations
    const getAllStations = async () => {
        setIsLoading(true);

        try {
            const api = new RadioBrowserApi("online radio with react");

            const data = await api.searchStations({
                limit: STATIONS_LIMIT, // number of stations displayed
                offset: 0,
            });

            const stations = data.map((station) => {
                const newStation = {
                    id: station.id,
                    name: station.name,
                    language: station.language,
                    tags: station.tags ? station.tags : [],
                    url: station.urlResolved,
                };

                return newStation;
            });

            setStations(stations);
            setIsLoading(false);
        } catch (error) {
            console.error(error);
            setError(true);
            return;
        }
    };

    return (
        <>
            {!isLoading && error && (
                <main>
                    <h2>Something went wrong.</h2>
                </main>
            )}

            {isLoading && (
                <main>
                    <StationsFilter getAllStations={getAllStations} />
                    <Loader />
                </main>
            )}

            {!isLoading && (
                <main>
                    <StationsFilter
                        getAllStations={getAllStations}
                        getStationsByLanguage={getStationsByLanguage}
                        getStationsByGenre={getStationsByGenre}
                    />
                    <Stations stations={stations} />
                </main>
            )}
        </>
    );
}

export default App;

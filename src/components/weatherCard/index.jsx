import React, { useEffect, useState } from 'react'
import './weather.scss'
import weatherService from '../../services/weatherService';
import Skeleton from '../skeleton';

const WeatherCard = () => {

    const [weather, setWeather] = useState({
        data: null,
        loading: true,
        error: null
    });

    useEffect(() => {
        if (!navigator.geolocation) {
            setWeather({
                data: null,
                loading: false,
                error: 'Geolocation is not supported by this browser.',
            });
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;

                // Pass current location coordinates to the API instead of static data
                weatherService.getWeather('', latitude, longitude)
                    .then((data) => {
                        setWeather({ data: data.data, loading: false, error: null });
                    })
                    .catch((err) => {
                        setWeather({ data: null, loading: false, error: err });
                    });
            },
            (error) => {
                setWeather({
                    data: null,
                    loading: false,
                    error: error.message || 'Unable to retrieve your location.',
                });
            }
        );
    }, []);

    return (
        <div className="card">
            <section className="content-section">
                {weather?.loading ? (
                    <>
                        <div className="weather-info">
                            <div className="left-side">
                                <div className="icon">
                                    <Skeleton style={{ height: "40px", width: "40px", borderRadius: "20px" }} />
                                </div>
                                <Skeleton style={{ height: "20px", width: "100px", borderRadius: "20px", marginTop: "10px" }} />
                            </div>
                            <div className="right-side">
                                <Skeleton style={{ height: "40px", width: "100px", borderRadius: "20px" }} />
                                <Skeleton style={{ height: "20px", width: "100px", borderRadius: "20px", marginTop: "10px" }} />
                            </div>
                        </div>
                        <div className="forecast">
                            <Skeleton style={{ height: "20px", width: "100%", borderRadius: "20px", marginBottom: "10px" }} />
                            <Skeleton style={{ height: "20px", width: "100%", borderRadius: "20px", marginBottom: "10px" }} />
                            <Skeleton style={{ height: "20px", width: "100%", borderRadius: "20px", marginBottom: "10px" }} />
                        </div>
                    </>
                ) : !weather?.data ? (
                    <div className="error-message">
                        <p>{weather?.error?.message || "No weather data available"}</p>
                    </div>
                ) : (
                    <>
                        <div className="weather-info">
                            <div className="left-side">
                                <div className="icon">
                                    {weather?.data?.current?.iconUrl ? <img src={weather?.data?.current?.iconUrl} alt="weather icon" /> : (
                                        <svg
                                            stroke="#000000"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
                                            <g
                                                strokeLinejoin="round"
                                                strokeLinecap="round"
                                                id="SVGRepo_tracerCarrier"
                                            ></g>
                                            <g id="SVGRepo_iconCarrier">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeWidth="1.5"
                                                    stroke="#000"
                                                    d="M22 14.3529C22 17.4717 19.4416 20 16.2857 20H11M14.381 9.02721C14.9767 8.81911 15.6178 8.70588 16.2857 8.70588C16.9404 8.70588 17.5693 8.81468 18.1551 9.01498M7.11616 11.6089C6.8475 11.5567 6.56983 11.5294 6.28571 11.5294C3.91878 11.5294 2 13.4256 2 15.7647C2 18.1038 3.91878 20 6.28571 20H7M7.11616 11.6089C6.88706 10.9978 6.7619 10.3369 6.7619 9.64706C6.7619 6.52827 9.32028 4 12.4762 4C15.4159 4 17.8371 6.19371 18.1551 9.01498M7.11616 11.6089C7.68059 11.7184 8.20528 11.9374 8.66667 12.2426M18.1551 9.01498C18.8381 9.24853 19.4623 9.60648 20 10.0614"
                                                ></path>
                                            </g>
                                        </svg>
                                    )}
                                </div>
                                <p>{weather?.data?.current?.condition || "--"}</p>
                            </div>
                            <div className="right-side">
                                <div className="location">
                                    <div>
                                        <svg
                                            version="1.0"
                                            id="Layer_1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="64px"
                                            height="64px"
                                            viewBox="0 0 64 64"
                                            fill="#000"
                                            stroke="#000"
                                        >
                                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                            <g
                                                id="SVGRepo_tracerCarrier"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            ></g>
                                            <g id="SVGRepo_iconCarrier">
                                                <path
                                                    fill="#000"
                                                    d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24 C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24 C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"
                                                ></path>
                                            </g>
                                        </svg>
                                        <span>{weather?.data?.location?.city || "--"}</span>
                                    </div>
                                </div>
                                <p>{weather?.data?.current?.dateLabel || "--"}</p>
                                <p className="temperature">{weather?.data?.current?.temperature || "--"}</p>
                            </div>
                        </div>
                        <div className="forecast">
                            {weather?.data?.upcoming?.map((item, index) => (
                                <div key={index}>
                                    <p>{item.label || "--"}</p>
                                    <p>{item.temperature || "--"}</p>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </section>
        </div>
    )
}

export default WeatherCard
import React, { useState, useEffect, useCallback } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import background from '../assets/solarPanel.jpg';
import otherImage from '../assets/mountainRange.jpg';
import secondImage from '../assets/download.jpeg';


const containerStyle = {
    width: '100px',
    height: '100px'
};

const center = {
    lat: 32.99352921142714,
    lng: -96.7521324973148,
};

function LandingPage() {
    const navigate = useNavigate();
    const [address, setAddress] = useState("");
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "YOUR_API_KEY"
    });

    const [map, setMap] = useState(null);

    const onLoad = useCallback((map) => {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
        setMap(map);
    }, []);

    const onUnmount = useCallback((map) => {
        setMap(null);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Perform your API request here
        } catch (error) {
            console.error('Error: ', error);
        }
        navigate('/outputPage', { state: { address } });
    };

    const handleChange = (e) => {
        setAddress(e.target.value);
    };

    return isLoaded ? (
        <div className="home">
            <img src={background} className="backgroundImage" alt="solar panel background" 
            width={400}
            height={400}
            ></img>
        <img
            src={otherImage}
            className="otherImage"
            alt="another image"
            width={400}
            height={400}
        />
        <img
            src={secondImage}
            className="secondImage"
            alt="another image"
            width={400}
            height={400}
        />
            <form onSubmit={handleSubmit}>
                <input
                    className="addressField"
                    id="address"
                    type="text"
                    placeholder="Enter your address"
                    value={address}
                    onChange={handleChange}
                />
                <input className="submitAddress" type="submit" value="Submit" />
            </form>
            <div className="map">
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={5}
                    onLoad={onLoad}
                    onUnmount={onUnmount}
                />
            </div>
        </div>
    ) : <></>;
}

export default LandingPage;
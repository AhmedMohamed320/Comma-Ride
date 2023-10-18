"use client";
import L from "leaflet";
import MarkerIcon from "../../node_modules/leaflet/dist/images/marker-icon.png";
import MarkerShadow from "../../node_modules/leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useEffect, useState } from "react";

const Map = () => {
    const [showMap, setShowMap] = useState(false);

    useEffect(() => {
        setShowMap(true);
    }, []);
    const locations = [
        {
            position: [30.586466, 31.491874],
            content: "مندوب 1 تم التحديث الساعه 01:00",
        },
        { position: [30.587749, 31.486327], content: "مندوب 2" },
        { position: [30.594408, 31.49579], content: "مندوب 3" },
        { position: [30.590446, 31.505912], content: "مندوب 4" },
    ];

    const popupStyle = {
        fontSize: "1.3rem",
    };

    return (
        <div>
            {showMap && (
               <p>test</p>
            )}
        </div>
    );
};

export default Map;

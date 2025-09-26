import React, { useRef, useEffect, useState, useCallback } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css'; // Import MapLibre GL CSS
import { LocateFixed } from 'lucide-react'; // Icon for the locate button

const MapComponent: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);
  const markerRef = useRef<maplibregl.Marker | null>(null);
  const [geolocationError, setGeolocationError] = useState<string | null>(null);

  // Function to get user's current location and update the map
  const getUserLocation = useCallback(() => {
    setGeolocationError(null); // Clear any previous errors
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          
          if (mapRef.current) {
            // Fly to the user's location
            mapRef.current.flyTo({ center: [longitude, latitude], zoom: 14 });

            // Add or update marker at user's location
            if (markerRef.current) {
              markerRef.current.setLngLat([longitude, latitude]);
            } else {
              markerRef.current = new maplibregl.Marker()
                .setLngLat([longitude, latitude])
                .addTo(mapRef.current);
            }
          }
        },
        (error) => {
          console.error("Error getting geolocation:", error);
          let errorMessage = "Unable to retrieve your location.";
          if (error.code === error.PERMISSION_DENIED) {
            errorMessage = "Location access denied. Please enable location services in your browser settings.";
          } else if (error.code === error.POSITION_UNAVAILABLE) {
            errorMessage = "Location information is unavailable.";
          } else if (error.code === error.TIMEOUT) {
            errorMessage = "The request to get user location timed out.";
          }
          setGeolocationError(errorMessage);
        },
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 } // Options for geolocation
      );
    } else {
      setGeolocationError("Geolocation is not supported by your browser.");
    }
  }, []);

  useEffect(() => {
    if (mapRef.current) return; // Initialize map only once

    if (mapContainerRef.current) {
      mapRef.current = new maplibregl.Map({
        container: mapContainerRef.current,
        style: 'https://demotiles.maplibre.org/style.json', // Example style
        center: [-74.0060, 40.7128], // Default to New York City coordinates
        zoom: 10,
      });

      mapRef.current.addControl(new maplibregl.NavigationControl(), 'top-right');

      // Attempt to get user location on initial load
      getUserLocation();
    }

    // Clean up map on component unmount
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [getUserLocation]); // Re-run effect if getUserLocation callback changes

  return (
    <div className="relative w-full h-[500px] rounded-lg shadow-lg">
      <div ref={mapContainerRef} className="w-full h-full rounded-lg" />
      <button
        onClick={getUserLocation}
        className="absolute bottom-4 right-4 bg-yellow-400 text-black p-3 rounded-full shadow-md hover:bg-yellow-500 transition-colors z-10"
        aria-label="Find my location"
      >
        <LocateFixed className="w-5 h-5" />
      </button>
      {geolocationError && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-red-500 text-white px-4 py-2 rounded-md shadow-lg z-10">
          {geolocationError}
        </div>
      )}
    </div>
  );
};

export default MapComponent;
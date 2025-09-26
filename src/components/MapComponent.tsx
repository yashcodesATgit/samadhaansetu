import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Map, View, Feature } from 'ol';
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import OSM from 'ol/source/OSM';
import Point from 'ol/geom/Point';
import Geolocation from 'ol/Geolocation';
import { Style, Icon, Fill, Stroke, Circle } from 'ol/style';
import { fromLonLat, toLonLat } from 'ol/proj';
import 'ol/ol.css'; // Import OpenLayers CSS
import { LocateFixed } from 'lucide-react'; // Icon for the locate button

const MapComponent: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<Map | null>(null);
  const geolocationRef = useRef<Geolocation | null>(null);
  const positionFeatureRef = useRef<Feature | null>(null);
  const [geolocationError, setGeolocationError] = useState<string | null>(null);

  const createGeolocationFeature = useCallback(() => {
    const feature = new Feature({
      geometry: new Point([0, 0]),
    });
    feature.setStyle(
      new Style({
        image: new Circle({
          radius: 6,
          fill: new Fill({
            color: '#FFD600', // Yellow color for the fill
          }),
          stroke: new Stroke({
            color: '#000000', // Black color for the stroke
            width: 2,
          }),
        }),
      })
    );
    return feature;
  }, []);

  const getUserLocation = useCallback(() => {
    setGeolocationError(null); // Clear any previous errors
    if (geolocationRef.current) {
      geolocationRef.current.setTracking(true); // Start tracking
    } else {
      setGeolocationError("Geolocation is not supported or initialized.");
    }
  }, []);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    // Initialize map only once
    if (!mapRef.current) {
      const initialView = new View({
        center: fromLonLat([-74.0060, 40.7128]), // Default to New York City coordinates
        zoom: 10,
      });

      const map = new Map({
        target: mapContainerRef.current,
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
        ],
        view: initialView,
      });
      mapRef.current = map;

      // Initialize Geolocation
      const geolocation = new Geolocation({
        trackingOptions: {
          enableHighAccuracy: true,
        },
        projection: initialView.getProjection(),
      });
      geolocationRef.current = geolocation;

      // Handle geolocation changes
      geolocation.on('change:position', () => {
        const coordinates = geolocation.getPosition();
        if (coordinates) {
          const lonLat = toLonLat(coordinates);
          map.getView().animate({
            center: coordinates,
            zoom: 14,
            duration: 1000,
          });

          if (!positionFeatureRef.current) {
            positionFeatureRef.current = createGeolocationFeature();
            const vectorSource = new VectorSource({
              features: [positionFeatureRef.current],
            });
            const vectorLayer = new VectorLayer({
              source: vectorSource,
            });
            map.addLayer(vectorLayer);
          }
          (positionFeatureRef.current.getGeometry() as Point).setCoordinates(coordinates);
          setGeolocationError(null); // Clear error if location is found
        }
        geolocation.setTracking(false); // Stop tracking after finding location once
      });

      // Handle geolocation errors
      geolocation.on('error', (error) => {
        console.error("Geolocation error:", error);
        let errorMessage = "Unable to retrieve your location.";
        if (error.code === 1) { // PERMISSION_DENIED
          errorMessage = "Location access denied. Please enable location services in your browser settings.";
        } else if (error.code === 2) { // POSITION_UNAVAILABLE
          errorMessage = "Location information is unavailable.";
        } else if (error.code === 3) { // TIMEOUT
          errorMessage = "The request to get user location timed out.";
        }
        setGeolocationError(errorMessage);
        geolocation.setTracking(false); // Stop tracking on error
      });

      // Attempt to get user location on initial load
      getUserLocation();
    }

    // Clean up map on component unmount
    return () => {
      if (mapRef.current) {
        mapRef.current.setTarget(undefined);
        mapRef.current = null;
      }
      if (geolocationRef.current) {
        geolocationRef.current.setTracking(false);
        geolocationRef.current.un('change:position', () => {});
        geolocationRef.current.un('error', () => {});
        geolocationRef.current = null;
      }
    };
  }, [createGeolocationFeature, getUserLocation]);

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
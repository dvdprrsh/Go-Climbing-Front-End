import React, { useState, useEffect } from "react";
import Map from "./Map";
import usersLocation from "../services/usersLocation";

export const MapView = toFind => {
  const [position, setPosition] = useState({});

  useEffect(() => {
    const fetchPosition = async () => {
      try {
        setPosition(await usersLocation());
      } catch (e) {}
    };
    fetchPosition();
  }, []);

  return (
    <Map location={{ lat: position.lat, lng: position.lng }} toFind={toFind} />
  );
};

import React, { useState, useEffect } from "react";
import Map from "./Map";
import { Loading } from "./Loading";
import usersLocation from "../services/usersLocation";

export const MapView = toFind => {
  const [position, setPosition] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const fetchPosition = async () => {
      try {
        setPosition(await usersLocation());
      } catch (e) {
        setErrorMessage(e.message);
      }
    };
    fetchPosition();
  }, []);

  return errorMessage || position !== undefined ? (
    <Map location={{ lat: position.lat, lng: position.lng }} toFind={toFind} />
  ) : (
    <Loading />
  );
};

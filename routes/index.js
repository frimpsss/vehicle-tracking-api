import express from "express";
import {
  setGPSX,
  createData,
  getGPSX,
  setGPSY,
  getGPSY,
  getAlarm,
  getDate,
  getTime,
  getIgnition,
  getFuel,
  getSpeed,
  setAlarm,
  setDate,
  setTime,
  setIgnition,
  setFuel,
  setSpeed,
} from "../controller/index.js";
const Router = express.Router();

// init
Router.post("/init", createData);

// gps x
Router.patch("/gpsx", setGPSX);
Router.get("/gpsx", getGPSX);

//gps y
Router.patch("/gpsy", setGPSY);
Router.get("/gpsy", getGPSY);

//alarm
Router.patch("/alarm", setAlarm);
Router.get("/alarm", getAlarm);

//date
Router.patch("/date", setDate);
Router.get("/date", getDate);

//time
Router.patch("/time", setTime);
Router.get("/time", getTime);

//ignition
Router.patch("/ignition", setIgnition);
Router.get("/ignition", getIgnition);

//fuel
Router.patch("/fuel", setFuel);
Router.get("/fuel", getFuel);

//speed
Router.patch("/speed", setSpeed);
Router.get("/speed", getSpeed);
export default Router;

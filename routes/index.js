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
Router.get("/set/gpsx", setGPSX);
Router.get("/gpsx", getGPSX);

//gps y
Router.get("/set/gpsy", setGPSY);
Router.get("/gpsy", getGPSY);

//alarm
Router.get("/set/alarm", setAlarm);
Router.get("/alarm", getAlarm);

//date
Router.get("/set/date", setDate);
Router.get("/date", getDate);

//time
Router.get("/set/time", setTime);
Router.get("/time", getTime);

//ignition
Router.get("/set/ignition", setIgnition);
Router.get("/ignition", getIgnition);

//fuel
Router.get("/set/fuel", setFuel);
Router.get("/fuel", getFuel);

//speed
Router.get("/set/speed", setSpeed);
Router.get("/speed", getSpeed);
export default Router;

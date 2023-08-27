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
Router.get("/setgpsx", setGPSX);
Router.get("/gpsx", getGPSX);

//gps y
Router.get("/setgpsy", setGPSY);
Router.get("/gpsy", getGPSY);

//alarm
Router.get("/setalarm", setAlarm);
Router.get("/alarm", getAlarm);

//date
Router.get("/setdate", setDate);
Router.get("/date", getDate);

//time
Router.get("/settime", setTime);
Router.get("/time", getTime);

//ignition
Router.get("/setignition", setIgnition);
Router.get("/ignition", getIgnition);

//fuel
Router.get("/setfuel", setFuel);
Router.get("/fuel", getFuel);

//speed
Router.get("/setspeed", setSpeed);
Router.get("/speed", getSpeed);
export default Router;

import dataModel from "../models/data.model.js";
export async function createData(req, res) {
  try {
    const created = await dataModel.create({
      gpsX: 0,
      gpsY: 0,
      alarm: 0,
      date: "",
      time: "",
      ignition: 0,
      fuel: 0,
      speed: 0,
    });
    res.status(200).send(created);
  } catch (error) {
    return res.status(500).send(String(error));
  }
}
export async function setGPSX(req, res) {
  try {
    const { id, value } = req.query;
    if (!id || !value) {
      return res.status(400).send("Pass correct query");
    }
    const found = await dataModel.findById(id);
    if (!found) {
      return res.status(404).send("Not Found");
    }
    await dataModel.findByIdAndUpdate(found?._id, {
      gpsX: value,
    });

    res.status(200).send(200);
  } catch (error) {
    return res.status(500).send(String(error));
  }
}
export async function getGPSX(req, res) {
  try {
    const id = req.query["id"];
    if (!id) {
      return res.status(400).send("pass id");
    }
    const found = await dataModel.findById(id);
    if (!found) {
      return res.status(404).send("not found");
    }

    res.status(200).send(String(found.gpsX));
  } catch (error) {
    console.log(error);
    return res.status(500).send(String(error));
  }
}
export async function setGPSY(req, res) {
  try {
    const { id, value } = req.query;
    if (!id || !value) {
      return res.status(400).send("Pass correct query");
    }
    const found = await dataModel.findById(id);
    if (!found) {
      return res.status(404).send("Not Found");
    }
    await dataModel.findByIdAndUpdate(found?._id, {
      gpsY: value,
    });

    res.status(200).send(200);
  } catch (error) {
    return res.status(500).send(String(error));
  }
}

export async function setAlarm(req, res) {
  try {
    const { id, value } = req.query;
    if (!id) {
      return res.status(400).send("Pass correct query");
    }
    const found = await dataModel.findById(id);
    if (!found) {
      return res.status(404).send("Not Found");
    }
    await dataModel.findByIdAndUpdate(found?._id, {
      alarm: value,
    });

    res.status(200).send(200);
  } catch (error) {
    return res.status(500).send(String(error));
  }
}
export async function setDate(req, res) {
  try {
    const { id, value } = req.query;
    if (!id) {
      return res.status(400).send("Pass correct query");
    }
    const found = await dataModel.findById(id);
    if (!found) {
      return res.status(404).send("Not Found");
    }
    await dataModel.findByIdAndUpdate(found?._id, {
      date: value,
    });

    res.status(200).send(200);
  } catch (error) {
    return res.status(500).send(String(error));
  }
}
export async function setTime(req, res) {
  try {
    const { id, value } = req.query;
    if (!id) {
      return res.status(400).send("Pass correct query");
    }
    const found = await dataModel.findById(id);
    if (!found) {
      return res.status(404).send("Not Found");
    }
    await dataModel.findByIdAndUpdate(found?._id, {
      time: value,
    });

    res.status(200).send(200);
  } catch (error) {
    return res.status(500).send(String(error));
  }
}
export async function setIgnition(req, res) {
  try {
    const { id, value } = req.query;
    if (!id) {
      return res.status(400).send("Pass correct query");
    }
    const found = await dataModel.findById(id);
    if (!found) {
      return res.status(404).send("Not Found");
    }
    await dataModel.findByIdAndUpdate(found?._id, {
      ignition: value,
    });

    res.status(200).send(200);
  } catch (error) {
    return res.status(500).send(String(error));
  }
}
export async function setFuel(req, res) {
  try {
    const { id, value } = req.query;
    if (!id) {
      return res.status(400).send("Pass correct query");
    }
    const found = await dataModel.findById(id);
    if (!found) {
      return res.status(404).send("Not Found");
    }
    await dataModel.findByIdAndUpdate(found?._id, {
      fuel: value,
    });

    res.status(200).send(200);
  } catch (error) {
    return res.status(500).send(String(error));
  }
}
export async function setSpeed(req, res) {
  try {
    const { id, value } = req.query;
    if (!id) {
      return res.status(400).send("Pass correct query");
    }
    const found = await dataModel.findById(id);
    if (!found) {
      return res.status(404).send("Not Found");
    }
    await dataModel.findByIdAndUpdate(found?._id, {
      speed: value,
    });

    res.status(200).send(200);
  } catch (error) {
    return res.status(500).send(String(error));
  }
}
export async function getGPSY(req, res) {
  try {
    const id = req.query["id"];
    if (!id) {
      return res.status(400).send("pass id");
    }
    const found = await dataModel.findById(id);
    if (!found) {
      return res.status(404).send("not found");
    }

    res.status(200).send(String(found?.gpsY));
  } catch (error) {
    return res.status(500).send(String(error));
  }
}
export async function getAlarm(req, res) {
  try {
    const id = req.query["id"];
    if (!id) {
      return res.status(400).send("pass id");
    }
    const found = await dataModel.findById(id);
    if (!found) {
      return res.status(404).send("not found");
    }

    res.status(200).send(String(found.alarm));
  } catch (error) {
    return res.status(500).send(String(error));
  }
}
export async function getDate(req, res) {
  try {
    const id = req.query["id"];
    if (!id) {
      return res.status(400).send("pass id");
    }
    const found = await dataModel.findById(id);
    if (!found) {
      return res.status(404).send("not found");
    }

    res.status(200).send(String(found.date));
  } catch (error) {
    return res.status(500).send(String(error));
  }
}

export async function getTime(req, res) {
  try {
    const id = req.query["id"];
    if (!id) {
      return res.status(400).send("pass id");
    }
    const found = await dataModel.findById(id);
    if (!found) {
      return res.status(404).send("not found");
    }

    res.status(200).send(String(found?.time));
  } catch (error) {
    return res.status(500).send(String(error));
  }
}

export async function getIgnition(req, res) {
  try {
    const id = req.query["id"];
    if (!id) {
      return res.status(400).send("pass id");
    }
    const found = await dataModel.findById(id);
    if (!found) {
      return res.status(404).send("not found");
    }

    res.status(200).send(String(found?.ignition));
  } catch (error) {
    return res.status(500).send(String(error));
  }
}
export async function getFuel(req, res) {
  try {
    const id = req.query["id"];
    if (!id) {
      return res.status(400).send("pass id");
    }
    const found = await dataModel.findById(id);
    if (!found) {
      return res.status(404).send("not found");
    }

    res.status(200).send(String(found?.fuel));
  } catch (error) {
    return res.status(500).send(String(error));
  }
}

export async function getSpeed(req, res) {
  try {
    const id = req.query["id"];
    if (!id) {
      return res.status(400).send("pass id");
    }
    const found = await dataModel.findById(id);
    if (!found) {
      return res.status(404).send("not found");
    }

    res.status(200).send(String(found?.speed));
  } catch (error) {
    return res.status(500).send(String(error));
  }
}

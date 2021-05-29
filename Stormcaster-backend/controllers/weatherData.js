const db = require("../models");

const index = async (req, res) => {
  console.log(req.query);
  const allLocations = await db.user.findOne({
    where: { id: req.query.user },
    include: [
      {
        model: db.location,
      },
    ],
  });

  if (!allLocations)
    return res.json({
      message: "No location data found.",
    });

  res.status(200).json({ locations: allLocations });
};

const show = async (req, res) => {
  const localeData = await db.user.findOne({
    where: {
      id: req.query.user,
    },
    include: [
      {
        model: db.location,
        where: {
          zipcode: req.query.location,
        },
      },
    ],
  });

  if (Object.keys(localeData).length === 0 || !localeData)
    return res.json({
      message: "No location data found",
    });

  res.status(200).json({ location: localeData });
};

//working
const create = async (req, res) => {
  const newLocale = await db.location.create({
    city: req.body.city,
    state: req.body.state,
    zipcode: req.body.zipcode,
    coords: req.body.coords,
  });

  const user = await db.user.findOne({
    where: { id: req.body.user },
  });

  await user.addLocation(newLocale);

  if (res.status === 401)
    return res.json({
      message: "Unable to create new location",
    });

  res.status(200).json({ location: newLocale });
};

//not sure need to get show page working first
const update = async (req, res) => {
  const location = await db.location.find({
    where: { id: req.params.id },
  });

  if (!location) return res.json({ message: "Unable to find location" });

  location.update(
    {
      ...req.body,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );

  res.status(200).json({ location: updatedLocation });
};

//not sure
const destroy = async (req, res) => {
  const { city, state, zipcode, user } = req.query;
  const location = await db.location.destroy({
    where: {
      city: city,
      state: state,
      zipcode: zipcode,
    },
  });

  const assoc = await db.userLocations.destroy({
    where: {
      userId: user,
    },
  });

  if (location && assoc) {
    res.status(200);
  } else {
    res.status(401);
  }

  console.log(location, "\n", assoc);
};

module.exports = {
  index,
  show,
  create,
  update,
  destroy,
};

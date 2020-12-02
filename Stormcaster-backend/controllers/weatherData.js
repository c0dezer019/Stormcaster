const db = require('../models');


const index = async ( res) => {
	const allLocations = await db.location.findAll();

	if (!allLocations)
		return res.json({
			message: 'No location data found.',
		});

	res.status(200).json({ locations: allLocations });
};

const show = async (req, res) => {
	const localeData = await db.location.findByPk(req.params.id);

	if (Object.keys(localeData).length === 0 || !localeData)
		return res.json({
			message: 'No location data found',
		});

	res.status(200).json({ location: localeData });
};

//working
const create = async (req, res) => {
    const newLocale = await db.location.create(req.body);
    
    const user = db.user.find({
        where: { username: req.user.username }
    })

	if (res.status === 401)
		return res.json({
			message: 'Unable to create new location',
		});

	res.status(200).json({ location: newLocale });
};

//not sure need to get show page working first
const update = async (req, res) => {
    const location = await db.location.find({
        where: { id: req.params.id }
    })

    if (!location) return res.json({ message: "Unable to find location" });
    
    location.update(
        {
            ...req.body
        },
        {
            where: {
                id: req.params.id
            }
        }
    )

	res.status(200).json({ location: updatedLocation });
};

//not sure
const destroy = (req, res) => {
	db.game
		.destroy({
			where: { id: req.params.id },
		})
		.then(() => {
			res.status(200);
		});
};

module.exports = {
	index,
	show,
	create,
	update,
	destroy,
};

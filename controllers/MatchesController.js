const { getMatches } = require('../services/getMatches');
const { jsonStringify } = require('../functions/jsonStringify');

exports.findMatches = async (req, res, query, getBy) => {

    const played = 'played';
    const upcoming = 'upcoming';
    const dataPlayed = 'result_played.csv';
    const dataUpcoming = 'result_upcoming.csv';
    const names = query.name ? query.name.replace(/^\[|\]$/g, "").split(",") : [];

    switch (true) {

        case query.status && query.status === played:
            const getPlayed = await getMatches(names, getBy, dataPlayed);
            res.end(jsonStringify({ [played]: getPlayed }));
            break;

        case query.status && query.status === upcoming:
            const getUpcoming = await getMatches(names, getBy, dataUpcoming);
            res.end(jsonStringify({ [upcoming]: getUpcoming }));
            break;

        // Fetch all matches
        default:
            Promise.all([
                getMatches(names, getBy, dataPlayed),
                getMatches(names, getBy, dataUpcoming)
            ]).then((data) => {
                res.end(jsonStringify({ [played]: data[0], [upcoming]: data[1] }));
            });
            break;
    }
}
const fs = require('fs').promises;
const path = require('path');

exports.getMatches = async (names, getBy, dataType) => {

    const matches = [];

    if (names.length) {

        try {

            let data = await fs.readFile(path.join(__dirname, '..',  'data', dataType));
            data = data.toString().split('\r\n').map(line => line.split(','));

            names = names.map(name => name.trim().toLowerCase());

            for (let i = 1; i < data.length; i++) {
                
                const temp = {};

                for (let j = 0; j < data[i].length; j++) {
                    temp[[ data[0][j] ]] = data[i][j];
                }

                if (
                    (getBy === 'team' && (names.indexOf(temp['home_team'].toLowerCase()) !== -1 || names.indexOf(temp['away_team'].toLowerCase()) !== -1))
                    || (getBy === 'tournament' && names.indexOf(temp['tournament'].toLowerCase()) !== -1)
                ) {
                    matches.push(temp);
                }
            }
        }

        catch (err) {
            console.log(err);
        }
    }

    return matches;
}
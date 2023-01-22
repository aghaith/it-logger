import dotenv from 'dotenv';

dotenv.config();

module.exports = {
    env: {
        REACT_APP_BASE_URL: `${process.env.REACT_APP_BASE_URL}`,
    },
}
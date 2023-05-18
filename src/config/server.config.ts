import dotenv from 'dotenv';

if (process.env.ENV === 'local') {
  dotenv.config();
}

const name = process.env.NAME;
const port = process.env.PORT;

export { name, port };

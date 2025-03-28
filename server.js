const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const app = require('./app');

process.on('uncaughtException', (err) => {
    // eslint-disable-next-line no-console
    console.log(err.name, err.message);
    process.exit(1);
});

// console.log(process.env);
const DB = process.env.DATABASE.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD,
);

mongoose
    .connect(DB, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
    // eslint-disable-next-line no-console
    .then(() => console.log('DB connection successful!'));

// START SERVER
const port = 3000;
const server = app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Example app listening at http://localhost:${port}`);
});

process.on('unhandledRejection', (err) => {
    // eslint-disable-next-line no-console
    console.log(err.name, err.message);
    server.close(() => process.exit(1));
});

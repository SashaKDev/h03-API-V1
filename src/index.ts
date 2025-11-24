import express from 'express';
import {setupApp} from "./setup-app";
import {runDb} from "./db/mongo.db";

const bootsTrap = async () => {

    const app = express();
    setupApp(app);

    await runDb('mongodb://localhost:27017/testdb');

    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => console.log(`Listening on ${PORT}`));

    return app;

}

bootsTrap();


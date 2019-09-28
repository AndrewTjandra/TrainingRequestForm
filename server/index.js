const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Server Started, listening on port ${port}`));

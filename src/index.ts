import * as dotenv from 'dotenv';
dotenv.config();

import { buildServer } from './build';
let PORT = process.env.PORT || 4000;

let server = buildServer();
server.listen(PORT, () => {
  console.info(`Server is running on port: ${PORT}`);
});
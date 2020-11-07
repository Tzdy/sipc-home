import express from "express";
import getGlobal from "./Utils/global";
import router from './Router/index'
const { port } = getGlobal();

const app = express();
app.use(express.json());

router(app);

app.listen(port, () => {
  console.log(`http://localhost:${20004}`);
});

const express =require("express")

const config = require("config")
const mongoose = require("mongoose")

const PORT = config.get("port")

const mainRouter =require("./routes/index")


const app = express();
app.use(express.json());

app.use("/api", mainRouter);

async function start() {
  try {
    await mongoose.connect(config.get("dbUri"));
    app.listen(PORT, () => {
      console.log(`server started at: http:localhost:${PORT}`);
    });
  } catch (error) {
    console.log("ulanishda xatolik");
  }
}

start();
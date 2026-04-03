import './src/config/env.js'
import app from "./src/app.js";

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`PORT is running ${PORT}`)
})
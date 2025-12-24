import app from "../src/app.js";
import initDB from "../src/config/db.js";
let isAppInitialized = false;
const handler = async (req, res) => {
  try {
    if (!isAppInitialized) {
      await initDB();
      isAppInitialized = true;
      console.log("Database initialized successfully.");
    }
    app(req, res);
  } catch (error) {
    console.error("Error during database initialization:", error);
  }
  return app(req, res);
};
export default handler;

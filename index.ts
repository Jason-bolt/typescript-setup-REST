import app from "./src/config/express";
import logger from "./src/config/logger";
import db from "./src/config/database";
import appRouter from "./src/routes";

const PORT = process.env.PORT ?? 3003;

app.use("/api", appRouter);

db.connect()
  .then(() => {
    logger.info("Database connected");
    app.listen(PORT, () => {
      logger.info(
        `Server is running on port ${PORT}, url = http://localhost:${PORT}`,
      );
    });
  })
  .catch((err) => {
    logger.error(err);
  });

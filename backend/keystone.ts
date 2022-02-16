import "dotenv/config";
import { config, createSchema } from "@keystone-next/keystone/schema";

const databaseURL =
  process.env.DATABASE_URL || "mongodb://localhost/sickfits-menn";

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 30, // how long user stays signed in
  secret: process.env.COOKIE_SECRET,
};

export default config({
  server: {
    cors: {
      origin: [process.env.FRONTEND_URL],
      credentials: true,
    },
  },
  db: {
    adapter: "mongoose",
    url: databaseURL,
    // TODO: Add Data Seeding
  },
  lists: createSchema({
    // TODO: Schema Items
  }),
  ui: {
    // TODO: Change this for roles
    isAccessAllowed: () => true,
  },
  // TODO: Add session value here
});

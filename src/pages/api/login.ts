import passport from "../../../src/lib/layout/passport-google-auth";
import nextConnect from "next-connect";

export default nextConnect()
  .use(passport.initialize())
  .get(
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );
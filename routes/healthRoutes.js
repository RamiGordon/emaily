module.exports = (app) => {
  app.get("/api/health", (req, res) => {
    res.send("OK");
  });
};

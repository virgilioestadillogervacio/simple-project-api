module.exports = {
  async up(db, client) {
    await db.collection("albums").updateMany({}, { $set: { released_date: new Date().getDate() } });
  },

  async down(db, client) {
    await db.collection("albums").drop();
  },
};

module.exports = {
  async up(db, client) {
    await db.createCollection("albums");
    await db.collection("albums").insertOne({ name: "My New Album" });
  },

  async down(db, client) {
    await db.collection("albums").drop();
  },
};

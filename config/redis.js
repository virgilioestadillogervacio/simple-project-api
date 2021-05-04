const redis = require("redis");
const debugRedis = require("debug")("app:redis");

let client = null;

if(process.env.NODE_ENV === "development") {
  client = redis.createClient({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
  });
} else {
  client = redis.createClient({
    url: process.env.REDIS_URL,
    auth_pass: process.env.REDIS_AUTH_PASS
  });
}

client.on("connect", () => {
  debugRedis("Client connected to redis.");
});

client.on("ready", () => {
  debugRedis("Client connected to redis and ready to use.");
});

client.on("error", (err) => {
  debugRedis(err.message);
});

client.on("end", () => {
  debugRedis("Client disconnected from redis.");
});

module.exports = client;

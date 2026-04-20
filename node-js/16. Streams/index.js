import { createReadStream } from "fs";

const stream = createReadStream("./test.txt", { encoding: "utf8" });

stream.on("data", (data) => {
  console.log(data);
});

stream.on("error", (err) => console.log(err));

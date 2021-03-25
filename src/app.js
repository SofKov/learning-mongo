require("./db/connection");

const { Task } = require("./models/Task");

const app = async () => {
    // const person = new Person({name: "Sofia", email: "sof@kov.com", age: 27, likesPizza: true});
    // await person.save();
    const task = new Task({todo: "buy milk", taskComplete: false});
    await task.save();
};

app();
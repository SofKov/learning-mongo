require("./db/connection");

const { Person } = require("./models/Person");
const { Task } = require("./models/Task");

const app = async () => {
    try {
        const person = new Person({name: "Bob", email: "bob@email.com", age: 27, likesPizza: true});
        await person.save();
        const task = new Task({todo: "buy bread", taskComplete: true});
        await task.save();
    } catch (err) {
        console.log(err);
    }
};

app();
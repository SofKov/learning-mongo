require("./db/connection");

const { Person } = require("./models/Person");

const app = async () => {
    const person = new Person({name: "Sofia", email: "sof@kov.com", age: 27, likesPizza: true});
    await person.save();
};

app();
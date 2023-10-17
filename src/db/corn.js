const mongoose = require("mongoose");

mongoose.connect("mongodb://0.0.0.0:27017/PortData", {

    useNewUrlParser: true
    

}).then(() => {
    console.log(`Connection successfull`);
}).catch((err) => {
    console.log(`no connection${err}`);
})


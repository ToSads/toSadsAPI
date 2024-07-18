const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://tosads057:lAaAU9P2MaripNfz@tosadscluster.917g6my.mongodb.net/?retryWrites=true&w=majority&appName=tosadsCluster")
.then(()=>console.log("connected"))
.catch(()=>console.log("error"))
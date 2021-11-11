const mongoose = require("mongoose") 
const mangoSchema = mongoose.Schema({ 
mango_type: String, 
mango_season: String, 
cost: Number 
}) 
 
module.exports = mongoose.model("mango",mangoSchema) 

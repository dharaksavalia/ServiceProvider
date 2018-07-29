const mongoose = require ('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    cousrseName : String,
    created : String
});

mongoose.model('course',userSchema);
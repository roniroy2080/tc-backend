const { mongoose } = require("mongoose");

const User_Schema = {
  User_Schema_details() {
    const Mongodb_Schema = mongoose.Schema;
    let mongo_schema = new Mongodb_Schema(
        {
            admin_password: String,
            Number_6 : Number,
            Number_7 : Number,
            Number_8 : Number,
            Number_9 : Number,
            Number_10 : Number
        },
        { versionKey: false }
        );
        return (
            mongoose.models.tclottery || mongoose.model("tclottery", mongo_schema, "tclottery")
        );
    },
};


module.exports = User_Schema
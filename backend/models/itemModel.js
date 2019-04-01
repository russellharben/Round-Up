let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let itemSchema = new Schema({

  //item id auto generated by mongo
  item: {
    itemName: {
      type: String,
      trim: true
    },
    itemURL: {
      type: String,
      trim: true
    },
    itemPrice: {
      type: Number,
      trim: true
    },
    itemPhoto: {
      type: String,
      trim: true
    },
    userID: {
      type: String,
      trim: true
    }
  }
});

let Item = mongoose.model("Item", itemSchema);

module.exports = Item;

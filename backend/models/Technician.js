const mongoose = require('mongoose')

const Schema = mongoose.Schema


const TechnicianSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: [true, "Please provide your name"],
        maxlength: [100, "Name can not be more than 100 characters"],
      },
      description: {
        type: String,
        required: [true, "Please provide a little description of you and your shop"],
        maxlength: [1000, "Description can not be more than 1000 characters"],
      },
      imageProfile: { type: String },
      shop: { type: String, required: [true, "Please provide your shop name"] },
      shopImages: {
        type: [String],
        required: [true, "Please provide at least one shop image"],
        validate: {
          validator: function(images) {
            return images.length <= 5;
          },
          message: "Shop images can not be more than 5",
        },
      },
      averageRating: {
        type: Number,
        default: 0,
      },
      numOfReviews: {
        type: Number,
        default: 0,
      },
},  { timestamps: true })

// This virtual field allows the reviews associated with a technician to be accessed in a more convenient way, without having to manually search the 'Review' model for reviews with a matching technicianID.

TechnicianSchema.virtual('reviews', {
    ref: 'Review',
    localField: '_id',
    foreignField: 'technician',
    justOne: false,
  });


  //preventing orphaned reviews from being left in the database.
TechnicianSchema.pre('remove', async function (next) {
    await this.model('Review').deleteMany({ technician: this._id });
  });
  

  const Technician = mongoose.model('Technician', TechnicianSchema)

  module.exports = Technician
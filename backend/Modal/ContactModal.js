import mongoose from "mongoose";
const Schema = mongoose.Schema;

const contactSchema = new Schema(
  {
    Name: {
      type: String,
      required: [true, " Name is required!"],
    },

    Phone: {
      type: String,
      required: [true, "Contact Number is required!"],
    },
    Email: {
      type: String,
      required: [true, "email is required"],
    },
    Destination: {
      type: String,
      required: [true, "Destination is required"],
    },
    Weight: {
      type: String,
      required: [true, "Weight is required"],
    },
    Departure: {
      type: String,
      required: [true, "Departure is required"],
    },
    Freight_Type: {
      type: String,
      required: [true, "Departure is required"],
    },
  },
  {
    timestamps: true,
  }
);

const contactModal = mongoose.model("clientForm", contactSchema);
export default contactModal;

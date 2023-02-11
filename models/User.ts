import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: "Please enter your full name.",
    },
    email: {
      type: String,
      required: "Please enter your email address.",
      trim: true,
      unique: true,
    },
    password: {
      type: mongoose.SchemaTypes.String,
      required: '"Please enter a password.',
    },
    role: {
      type: mongoose.SchemaTypes.String,
      default: "user",
    },
    image: {
      type: mongoose.SchemaTypes.String,
      default:
        "https://res.cloudinary.com/dmhcnhtng/image/upload/v1664642478/992490_b0iqzq.png",
    },
    emailVerified: {
      type: Boolean,
      default: false,
    },
    defaultPaymentMethod: {
      type: mongoose.SchemaTypes.String,
      default: "",
    },
    address: [
      {
        firstName: {
          type: mongoose.SchemaTypes.String,
        },
        lastName: {
          type: mongoose.SchemaTypes.String,
        },
        phoneNumber: {
          type: mongoose.SchemaTypes.String,
        },
        address1: {
          type: mongoose.SchemaTypes.String,
        },
        address2: {
          type: mongoose.SchemaTypes.String,
        },
        city: {
          type: mongoose.SchemaTypes.String,
        },
        zipCode: {
          type: mongoose.SchemaTypes.String,
        },
        state: {
          type: mongoose.SchemaTypes.String,
        },
        country: {
          type: mongoose.SchemaTypes.String,
        },
        active: {
          type: Boolean,
          default: false,
        },
      },
    ],
    wishlist: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: "Product",
        },
        style: {
          type: mongoose.SchemaTypes.String,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;

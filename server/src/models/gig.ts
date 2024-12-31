import { Schema, model, Types } from "mongoose";

// 1) Create Types  for Gig Doc.
export interface IGig {
  _id: string;
  user: Types.ObjectId;
  title: string;
  description: string;
  reviewCount: number;
  starCount: number;
  category: string;
  coverImage: string;
  images: string[];
  package_title: string;
  package_description: string;
  package_price: number;
  package_features: string[];
  package_duration: number;
  package_revisions: number;
  createdAt: string;
  updatedAt: string;
}

// 2) Create Schema
const gigSchema = new Schema<IGig>(
  {
    user: {
      type: Schema.ObjectId,
      ref: "User",
    },
    title: {
      type: String,
      required: [true, "Type title"],
    },
    description: {
      type: String,
      required: [true, "Type description"],
      minlength: [10, " characters min. 10"],
      maxlength: [500, " characters max. 500"],
    },
    reviewCount: {
      type: Number,
      default: 0,
    },
    starCount: {
      type: Number,
      default: 0,
    },
    coverImage: {
      type: String,
      required: [true, "Type cover image"],
    },
    images: {
      type: [String],
      required: [true, "Type images"],
    },
    category: {
      type: String,
      required: [true, "Type category"],
    },
    package_title: {
      type: String,
      required: [true, "Type Package Title"],
    },
    package_description: {
      type: String,
      required: [true, "Type Package Description"],
    },
    package_price: {
      type: Number,
      required: [true, "Type Package Price"],
    },
    package_features: {
      type: [String],
      required: [true, "Type Package Features"],
    },
    package_duration: {
      type: Number,
      required: [true, "Type Package Duration"],
    },
    package_revisions: {
      type: Number,
      required: [true, "Type Package Revisions"],
    },
  },
  {
    timestamps: true,
  }
);

//3) Create Model
const Gig = model<IGig>("Gig", gigSchema);

//4) export this model
export default Gig;

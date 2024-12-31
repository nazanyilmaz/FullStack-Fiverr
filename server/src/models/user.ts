import { Schema, model } from "mongoose";

// 1) hizmet belgesinin tipini olustur
export interface IUser {
  username: string | null;
  email: string;
  password: string | undefined;
  photo: string;
  country: string;
  isSeller: boolean;
  phone?: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
  _id: string;
}

// 2) Schema olusturuyroruz
const userSchema = new Schema<IUser>(
  {
    username: {
      type: String,
      unique: true,
      required: [true, "Type your Username"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Type your email address"],
    },
    password: {
      type: String,
      required: [true, "Type your password"],
    },
    country: {
      type: String,
      required: [true, "Type your country name"],
    },
    photo: {
      type: String,
      default:
        "https://as1.ftcdn.net/v2/jpg/02/42/38/06/1000_F_242380676_MgcF84njOboTScGtP3rSwccsrkLSnVCz.jpg",
    },
    phone: {
      type: String,
    },
    description: {
      type: String,
    },
    isSeller: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

//3) Model olusturuyoruz
const User = model<IUser>("User", userSchema);

//4) olusturdugumu bu modeli export edelim
export default User;

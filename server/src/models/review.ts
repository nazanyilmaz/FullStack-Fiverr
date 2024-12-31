import { Schema, model } from "mongoose";

// 1) hizmet belgesinin tipini olustur
export interface IReview {
  title: string;
}

// 2) Schema olusturuyroruz
const reviewSchema = new Schema<IReview>({
  title: {
    type: String,
  },
});

//3) Model olusturuyoruz
const Review = model<IReview>("Review", reviewSchema);

//4) olusturdugumu bu modeli export edelim
export default Review;

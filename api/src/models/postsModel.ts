import mongoose, { Document, Schema } from "mongoose";

export interface IPost extends Document {
  description: string;
  imageUrl: string;
  userId: mongoose.Types.ObjectId;
}

const postSchema = new Schema<IPost>({
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

export default mongoose.model<IPost>("Post", postSchema);

import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    PostId: {type: String, unique: true, required: true},
    PostName: {type: String, required: true}
})

const Post = mongoose.model("Post", postSchema);
export default Post;
import Post from "../models/Post.js";

export const addPost = async (req, res) => {
    try {
     const newPost = new Post(req.body);
     const {PostId}= newPost;
     const existPost = await Post.findOne({PostId});
     if(existPost) return req.status(400).json({msg: "Already exist"});
     const savedOne = await newPost.save();
     res.status(201).json(savedOne);   
    } catch (error) {
   res.status(500).json({errMsg: error.message});     
    }
}

export const getAllPost = async (req, res) => {
    try {
      const foundData = await Post.find();
      res.status(200).json(foundData);  
    } catch (error) {
        res.status(500).json({errMsg: error.message});     
         }
}

export const getPostById = async (req, res) => {
    try {
    const {id} = req.params;
    const foundId = await Post.findById(id);
    res.status(200).json(foundId);    
    } catch (error) {
        res.status(500).json({errMsg: error.message});     
         }
}

export const deletePost = async (req, res) => {
    try {
     const {id} = req.params;
     const deleteOne = await Post.findByIdAndDelete(id);
     if(!deleteOne){
        return res.status(404).json({msg: "Nothing to delete"});
     }
     res.status(200).json({msg: "Something deleted well"});   
    } catch (error) {
        res.status(500).json({errMsg: error.message});     
         }
}

export const updatePost = async (req, res) => {
    try {
     const {id} = req.params;
     const updateOne = await Post.findByIdAndUpdate(id, req.body, {new: true});
     res.status(201).json(updateOne);    
    } catch (error) {
        res.status(500).json({errMsg: error.message});     
         }
}
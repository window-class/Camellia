import express from 'express';
import { addPost,
         getAllPost,
         getPostById,
         deletePost,
         updatePost
 } from '../controllers/PostCont.js';

 const postRoute = express.Router();

     postRoute.post("/addPost", addPost);
     postRoute.get("/getAllPost", getAllPost);
     postRoute.get("/getPostById/:id", getPostById);
     postRoute.delete("/deletePost/:id", deletePost);
     postRoute.put("/updatePost/:id", updatePost);

     export default postRoute;
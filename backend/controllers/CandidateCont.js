import Candidate from "../models/Candidate.js";

export const addCandidate = async (req, res) => {
    try {
     const newCandidate = new Candidate(req.body);
     const {CNI}= newCandidate;
     const existCandidate = await Candidate.findOne({CNI});
     if(existCandidate) return req.status(400).json({msg: "Already exist"});
     const savedOne = await newCandidate.save();
     res.status(201).json(savedOne);   
    } catch (error) {
   res.status(500).json({errMsg: error.message});     
    }
}

export const getAllCandidate = async (req, res) => {
    try {
      const foundData = await Candidate.find();
      res.status(200).json(foundData);  
    } catch (error) {
        res.status(500).json({errMsg: error.message});     
         }
}

export const getCandidateById = async (req, res) => {
    try {
    const {id} = req.params;
    const foundId = await Candidate.findById(id);
    res.status(200).json(foundId);    
    } catch (error) {
        res.status(500).json({errMsg: error.message});     
         }
}

export const deleteCandidate = async (req, res) => {
    try {
     const {id} = req.params;
     const deleteOne = await Candidate.findByIdAndDelete(id);
     res.status(200).json({msg: "Something deleted well", deleteOne});   
    } catch (error) {
        res.status(500).json({errMsg: error.message});     
         }
}

export const updateCandidate = async (req, res) => {
    try {
     const {id} = req.params;
     const updateOne = await Candidate.findByIdAndUpdate(id, req.body, {new: true});
     res.status(201).json(updateOne);    
    } catch (error) {
        res.status(500).json({errMsg: error.message});     
         }
}
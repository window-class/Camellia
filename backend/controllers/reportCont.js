import Candidate from '../models/Candidate.js';

export const report = async (req, res) => {
    try {
    const report = await Candidate.find()
                   .populate("PostId", "PostId PostName");
    const result = report.map(item =>({
                 PostId: item.PostId?.PostId,
                 PostName: item.PostId?.PostName,

                 CNI: item.CNI,
                 Fname: item.Fname,
                 Lname: item.Lname,
                 Gender: item.Gender,
                 DOB: item.DOB,
                 ExamDate: item.ExamDate,
                 PNumber: item.PNumber,
                 Marks: item.Marks
    }));
    res.status(200).json(result);                   
    } catch (error) {
   res.status(500).json({msg: "Internal server error"});     
    }
}
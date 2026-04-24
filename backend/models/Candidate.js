/*CandidatesResult (CandidateNationalId, FirstName, LastName, Gender, DateOfBirth, 
    PostId(FK), ExamDate, PhoneNumber, Marks) */
import mongoose from "mongoose";

const candidateSchema = new mongoose.Schema({
    CNI:{type: String, unique: true, required: true},
    Fname: {type: String, required: true},
    Lname: {type: String, required: true},
    Gender: {type: String, required: true},
    DOB: {type: String, required: true},
    PostId: {type: mongoose.Schema.Types.ObjectId, ref:'Post', required: true},
    ExamDate: {type: String, required: true},
    PNumber: {type: String, required: true},
    Marks: {type: String, required: true},
})

const Candidate = mongoose.model("Candidate", candidateSchema);

export default Candidate;
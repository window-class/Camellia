import express from 'express';

import {
    addCandidate,
    getAllCandidate,
    getCandidateById,
    deleteCandidate,
    updateCandidate
} from '../controllers/CandidateCont.js';

const candRoute = express.Router();

     candRoute.post("/addCandidate", addCandidate);
     candRoute.get("/getAllCandidate", getAllCandidate);
     candRoute.get("/getCandidateById/:id", getCandidateById);
     candRoute.delete("/deleteCandidate/:id", deleteCandidate);
     candRoute.put("/updateCandidate/:id", updateCandidate);

     export default candRoute;
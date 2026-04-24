import express from 'express';

import { report } from '../controllers/reportCont.js';

const reportRoute = express.Router();
      
       reportRoute.get("/report", report);
       export default reportRoute;

//Link: http://localhost:8785/api/report       
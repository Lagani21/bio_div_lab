const express = require('express');
const router = express.Router();

const projectData = [
  {
    title: "Camera Trap Analysis",
    description: "AI models to detect and classify animals in camera trap footage.",
    details: "Using YOLOv8 for detection, DeepLabCut for pose estimation, and custom scripts to automate labeling. Deployed on AWS Lambda with S3 integration."
  },
  {
    title: "Citizen Science Data Pipeline",
    description: "Clean and integrate observations submitted by citizen scientists.",
    details: "Validated via a custom module and stored in PostgreSQL/PostGIS, with Tableau dashboards."
  },
  {
    title: "Environmental DNA Matching",
    description: "Match eDNA samples with known genetic fingerprints.",
    details: "We use BLAST and hybrid ML models to classify ambiguous DNA samples."
  }
];

router.get('/', (req, res) => {
  res.render('projects', { title: "Projects – Biodiversity Lab", projects: projectData });
});

module.exports = router;

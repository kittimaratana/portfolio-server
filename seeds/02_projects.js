/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('projects').del();
  
  await knex('projects').insert([
    {
      id: 1,
      project_title: 'Video Player',
      description: "Create video player website to upload and watch new recommended videos",
      tech_stack: "React, JavaScript, HTML, SCSS, REST, Node, Express, Knex, SQL, JSON, Multer, Git",
      image: '../public/images/brainflix.jpg'
    },
    {
      id: 2,
      project_title: 'Drivers License',
      description: "Create video player website to upload and watch new recommended videos",
      tech_stack: "Python, CNN, Feature Extraction, Neural Networks",
      image: '../public/images/license.jpg'
    },
    {
      id: 3,
      project_title: 'Travel Site',
      description: "Create video player website to upload and watch new recommended videos",
      tech_stack: "HTML, JavaScript, CSS",
      image: '../public/images/travel.jpg'
    },
    {
      id: 4,
      project_title: 'Clustering Analysis',
      description: "Create video player website to upload and watch new recommended videos",
      tech_stack: "Python, Docker, GCP, SQL, Git",
      image: '../public/images/clusters.jpg'
    },
    {
      id: 5,
      project_title: 'Inventory Management System',
      description: "Create video player website to upload and watch new recommended videos",
      tech_stack: "React, JavaScript, HTML, SCSS, REST, Node, Express, Knex, SQL, JSON, Multer, Git",
      image: '../public/images/inventory.jpg'
    },
    {
      id: 6,
      project_title: 'Text Generator',
      description: "Create video player website to upload and watch new recommended videos",
      tech_stack: "Python, RNN, Neural Networks, GenAI, GCP, SQL",
      image: '../public/images/generator.jpg'
    },
    {
      id: 7,
      project_title: 'Activites Website',
      description: "Create video player website to upload and watch new recommended videos",
      tech_stack: "JavaScript, HTML, CSS, Web APIs, JSON, Git",
      image: '../public/images/activities.jpg'
    },
    {
      id: 8,
      project_title: 'Cost Predictions',
      description: "Create video player website to upload and watch new recommended videos",
      tech_stack: "Python, Regression, GCP, SQL",
      image: '../public/images/prediction.jpg'
    },
    {
      id: 9,
      project_title: 'Flyers Extraction',
      description: "Create video player website to upload and watch new recommended videos",
      tech_stack: "Python, Tesseract OCR, Feature Detection, Sentiment Analysis",
      image: '../public/images/flyers.jpg'
    }
  ]);

};
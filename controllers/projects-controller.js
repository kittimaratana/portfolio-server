const knex = require("knex")(require("../knexfile"));

//get projects
const index = async (req, res) => {

    try {
      const projectsResponse = await knex("projects")
  
      res.status(200).json(projectsResponse);
    } catch (error) {
      console.error(error);
    }
}

module.exports = {
    index
};

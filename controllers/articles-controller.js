const knex = require("knex")(require("../knexfile"));

//get projects
const index = async (req, res) => {

    try {
      const articlesResponse = await knex("articles")
  
      res.status(200).json(articlesResponse);
    } catch (error) {
      console.error(error);
    }
}

module.exports = {
    index
};

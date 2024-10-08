/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('articles').del();
    
    await knex('articles').insert([
      {
        id: 5,
        date: '2024-07-01',
        article_title: 'Popular Tech Stacks',
        description: "Most common tech stacks organizations use to build their web and mobile application.",
        link: 'https://stackshare.io/stacks',
        image: '/images/articles/article5.jpg'
      },
      {
        id: 4,
        date: '2024-06-26',
        article_title: 'Prompt-Engineering-Guide',
        description: "As large language models continue to disrupt the AI industry, it's important to tailor your AI output to make the model more versatile and useful to your applications",
        link: 'https://github.com/dair-ai/Prompt-Engineering-Guide',
        image: '/images/articles/article4.jpg'
      },
      {
        id: 3,
        date: '2023-07-13',
        article_title: 'System Design Blogs that will make you a Pro',
        description: 'List of best systems design blogs that will make you design architecture like a pro',
        link: 'https://ghumare64.medium.com/system-design-blogs-that-will-make-you-a-pro-f2f2d20401ca',
        image: '/images/articles/article3.jpg'
      },
      {
        id: 2,
        date: '2020-11-02',
        article_title: 'Attention is all you need: Discovering the Transformer paper',
        description: 'Great summary article on how the Transformer model is built in Tensorflow, which is the building block for ChatGPT',
        link: 'https://towardsdatascience.com/attention-is-all-you-need-discovering-the-transformer-paper-73e5ff5e0634',
        image: '/images/articles/article2.jpg'
      },
      {
        id: 1,
        date: '2019-09-19',
        article_title: 'Continuous Delivery for Machine Learning',
        description: 'Automating the end-to-end lifecyle of Machine Learning practices',
        link: 'https://martinfowler.com/articles/cd4ml.html',
        image: '/images/articles/article1.jpg'
      }
    ]);
  
  };
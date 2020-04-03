const _ = require(`lodash`);
const path = require(`path`);
const slash = require(`slash`);

const projects = require('./src/temporary/data/projects.json');

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
exports.createPages = ({ actions }) => {
  const { createPage } = actions;

  const template = path.resolve('./src/temporary/projectTemplate.js');

  projects.forEach(proj => {
    createPage({
      path: `/projects/${proj.id}`,
      component: template,
      context: proj
    });
  });

  const eggTemplate = path.resolve('./src/temporary/eggTemplate.js')
  createPage({
    path:'/eggs',
    component: eggTemplate,
    context: {}
  })
};

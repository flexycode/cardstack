module.exports = function (cardContext) {
  return [{
    path: '/:type/:id',
    query: { filter: { type: ':type', id: { exact: ':id' } } }
  },{
    path: '/',
    query: { filter: { type: cardContext.data.type, id: { exact: cardContext.data.id } } }
  }];
};
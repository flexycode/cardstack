const { declareInjections } = require('@cardstack/di');


module.exports = declareInjections({
  currentSchema: 'hub:current-schema'
},

class Plugins {
  async active() {
    let schema = await this.currentSchema.forControllingBranch();
    return schema.plugins;
  }
});

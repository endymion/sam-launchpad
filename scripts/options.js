const getAllApps  = require('./get-all-apps');
const colors      = require('colors');

function options(opts){

  let { args, apps, config } = opts;

  args = args || {};
  args.environment = args.environment || 'dev';

  apps = apps || [];
  if(args['all-apps']) apps = getAllApps(config.base_path);
  if(apps.length < 1){
    console.log("The provided array of app names is empty.".bgYellow.black);
  }

  return { args, apps, config };

}

module.exports = options;

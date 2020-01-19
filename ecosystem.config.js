module.exports = {
  apps : [{
    name        : "vue-cli-service",
    script      : "./node_modules/@vue/cli-service/bin/vue-cli-service.js"
    watch       : true,
    instances   : 5,
    exec_mode   : "cluster",
    env: {
      "NODE_ENV": "development",
    },
    env_production : {
       "NODE_ENV": "production"
    }
  },{
    name       : "main-app",
    script     : "./src/main.js",
    watch      : true,
    instances  : 4,
    exec_mode  : "cluster"
  }]
}

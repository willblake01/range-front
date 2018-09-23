module.exports = {
  apps: [{
    name: 'range-front',
    script: 'server.js',
    instances: 'max',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy: {
    production: {
      user: 'node',
      host: '212.83.163.1',
      ref: 'origin/master',
      repo: 'git@github.com:willblake01/range-front.git',
      path: '/var/www/range-front.herokuapp.com',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};

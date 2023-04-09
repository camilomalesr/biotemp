module.exports = {
  type: 'mysql',
  host: 'containers-us-west-63.railway.app',
  port: 7862,
  username: 'root',
  password: 'MGPQ9ujsokjB29orX5bg',
  database: 'railway',
  entities: [
    'src_back/entities/**/*.js'
  ],
  migrations: [
    'src_back/migrations/**/*.js'
  ],
  cli: {
    entitiesDir: 'src_back/entities',
    migrationsDir: 'src_back/migrations'
  }
}
  
module.exports = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'camilo',
  password: '123456',
  database: 'biotemp',
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
  
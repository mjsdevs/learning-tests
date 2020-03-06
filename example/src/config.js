import convict from 'convict';

export default convict({
  env: {
    docs: 'The application environment',
    formt: ['production', 'test', 'development'],
    default: 'development',
    env: 'NODE_ENV',
  },
  ip: {
    doc: 'The application IP addres',
    format: 'ipaddress',
    default: '127.0.0.1',
    env: 'IP_ADDRESS',
  },
  port: {
    doc: 'The port to bind.',
    format: 'port',
    default: 3000,
    env: 'PORT',
  },
  db: {
    name: {
      doc: 'The database instance name',
      format: String,
      env: 'DATABASE_NAME',
    },
    host: {
      doc: 'The database host',
      format: String,
      default: 'localhost',
      env: 'DATABASE_HOST',
    },
    port: {
      doc: 'The database port',
      format: 'port',
      default: 27017,
      env: 'DATABASE_PORT',
    },
    username: {
      doc: 'The database user username',
      format: String,
      sensitive: true,
      env: 'DATABASE_USERNAME',
    },
    password: {
      doc: 'The database user password',
      format: String,
      sensitive: true,
      env: 'DATABASE_PASSWORD',
    },
  },
  secret: {
    doc: 'Secret used for hash generation',
    format: '*',
    default: '',
    sensitive: true,
    env: 'APP_SECRET',
  },
});

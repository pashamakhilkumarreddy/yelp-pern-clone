import pg from 'pg';
import constants from '../utils/constants/index.js';
import config from '../config/index.js';

const { Pool } = pg;

const {
  PGHOST, PGPORT, PGDATABASE, PGUSER, PGPASSWORD,
} = config.db;

class BaseModel {
  /**
   * Define base model constructor
   */
  constructor() {
    this._hasTimestamps = false;
    this._dbReseach = constants.DB.DB_RESEARCH;
    this.config = {
      host: PGHOST,
      port: PGPORT,
      database: PGDATABASE,
      user: PGUSER,
      password: PGPASSWORD,
    };
  }

  /**
   * Get the table used for the model
   * @returns {string} The database table used
   */

  static get table() {
    return this._table;
  }

  /**
   * Set the table used for the model
   * @param {string} t The database table to be used
   */
  static set table(t) {
    this._table = t;
  }

  /**
   * Get the hasTimestamps used for this model
   * @return {boolean} The hasTimestamps setting
   */
  static get hasTimestamps() {
    return this._hasTimestamps;
  }

  /**
   * Set the hasTimestamps setting
   * @param {boolean} t The hasTimestamps setting
   */
  static set hasTimestamps(t) {
    this._hasTimestamps = t;
  }

  /**
   *
   * @returns DB connection object
   */
  async _initDbConnectionPool() {
    try {
      const pool = new Pool(this.config);
      await pool.connect();
      return pool;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
}

export default BaseModel;

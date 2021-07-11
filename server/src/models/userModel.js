import constants from '../utils/constants/index.js';
import BaseModel from './baseModel.js';

/**
 * Class representing a restaurant model
 */
class UserModel extends BaseModel {
  /**
   * Constructor
   * @param {Object} props
   */
  constructor(opts) {
    super(opts);
    this._table = constants.DB_TABLES.TBL_USERS;
    this._hasTimestamps = false;
  }

  /**
   *
   * @param {*} params
   * @returns Newly added user
   */
  async addNewUser(params) {
    try {
      const conn = await this._initDbConnectionPool();
      const { rows } = await conn.query(
        `INSERT INTO ${this._table} VALUES (?, ?, ?, ?, ?)`,
        params,
      );
      return rows;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  /**
   *
   * @param {*} params
   * @returns User Details
   */
  async getUserDetails(params) {
    try {
      const conn = await this._initDbConnectionPool();
      const { rows } = await conn.query(
        `SELECT * FROM ${this._table} WHERE id ?`,
        params,
      );
      return rows;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  /**
   *
   * @param {*} params
   * @returns Updated User Details
   */
  async updateUserDetails(params) {
    try {
      const conn = await this._initDbConnectionPool();
      const { rows } = await conn.query(
        `UPDATE ${this._table} WHERE id ? `,
        params,
      );
      return rows;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  /**
   *
   * @param {*} params
   * @returns Delete user info
   */
  async deleteUser(params) {
    try {
      const conn = await this._initDbConnectionPool();
      const { rows } = await conn.query(
        `DELETE FROM ${this._table} WHERE id ? `,
        params,
      );
      return rows;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
}

export default UserModel;

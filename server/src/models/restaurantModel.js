import constants from "../utils/constants/index.js";
import BaseModel from "./baseModel.js";

/**
 * Class representing a restaurant model
 */
class RestaurantModel extends BaseModel {
  /**
   * Constructor
   * @param {*} opts
   */
  constructor(opts) {
    super(opts);
    this._table = constants.DB_TABLES.TBL_RESTAURANTS;
    this._hasTimestamps = false;
  }

  /**
   *
   * @param {*} params
   * @returns Newly added restaurant
   */
  async addNewRestaurant(params) {
    try {
      const conn = await this._initDbConnectionPool();
      const { rows } = await conn.query(
        `INSERT INTO ${this._table} (restaurant_id, name, location, price_range) VALUES ($1, $2, $3, $4)`,
        params
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
   * @returns All restaurants
   */
  async getAllRestaurants(params) {
    const conn = await this._initDbConnectionPool();
    try {
      const { rows } = await conn.query(
        `SELECT * FROM ${this._table} OFFSET $1 LIMIT $2`,
        params
      );
      console.info(rows);
      return rows;
    } catch (err) {
      console.error(err);
      throw err;
    } finally {
      conn.end();
    }
  }

  /**
   *
   * @param {*} params
   * @returns Restaurant Data
   */
  async getRestaurantDetails(params) {
    try {
      const conn = await this._initDbConnectionPool();
      const { rows } = await conn.query(
        `SELECT * ${this._table} WHERE id = $1`,
        params
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
   * @returns Updated Restaurant Data
   */
  async updateRestaurant(params) {
    try {
      const conn = await this._initDbConnectionPool();
      const { rows } = await conn.query(
        `UPDATE ${this._table} SET name = $1 location = $2 price_range = $3 WHERE id = $4`,
        params
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
   * @returns Deleted Restaurant Data
   */
  async deleteRestaurant(params) {
    try {
      const conn = await this._initDbConnectionPool();
      const { rows } = await conn.query(
        `DELETE FROM ${this._table} WHERE id = $1`,
        params
      );
      return rows;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
}

export default RestaurantModel;

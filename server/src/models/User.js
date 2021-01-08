const { hash, compare } = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Sequelize } = require('sequelize');

const {
  JWT_SECRET, REFRESH_TOKEN_EXPIRY, ACCESS_TOKEN_EXPIRY, JWT_ISSUER,
} = require('../config').jwt;

const hashPassword = async (user) => {
  try {
    if (!user.changed('password')) {
      return;
    }
    const hashedPassword = await hash(user.password, 12);
    user.setDataValue('password', hashedPassword);
  } catch (err) {
    console.error(err);
    throw err;
  }
};

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      unique: true,
      trim: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      trim: true,
      validate: {
        isEmail: true,
        notEmpty: true,
        isLowercase: true,
        notNull: {
          msg: 'Email is required',
        },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.ENUM(['male', 'female']),
      default: null,
      trim: true,
      validate: {
        notEmpty: true,
        isLowercase: true,
      },
    },
    dob: {
      type: DataTypes.DATE,
      defaultValue: null,
    },
    doj: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      field: 'is_admin',
    },
    isUserVerified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      field: 'isis_user_verified_admin',
    },
    isUserPremium: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      field: 'is_user_premium',
    },
    isUserArchived: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      field: 'is_user_archived',
    },
    lastLogin: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      field: 'last_login',
      trim: true,
    },
    referralCode: {
      type: DataTypes.STRING,
      field: 'referral_code',
      trim: true,
    },
    refererCode: {
      type: DataTypes.STRING,
      defaultValue: null,
      field: 'referer_code',
    },
  }, {
    hooks: {
      // beforeCreate: hashPassword,
      beforeUpdate: hashPassword,
      beforeSave: hashPassword,
    },
    timestamps: true,
  });

  User.prototype.comparePassword = async function comparePassword(password) {
    try {
      return await compare(password, this.password);
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  User.prototype.genRefreshToken = async function genRefreshToken() {
    try {
      const payload = {
        id: this.id,
        username: this.username,
        email: this.email,
        isAdmin: this.isAdmin,
      };
      const token = jwt.sign(payload, JWT_SECRET, {
        algorithm: 'HS384',
        expiresIn: REFRESH_TOKEN_EXPIRY,
        issuer: JWT_ISSUER,
      });
      return token;
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  User.prototype.genAccessToken = async function genAccessToken() {
    try {
      const payload = {
        id: this.id,
        username: this.username,
        email: this.email,
        isAdmin: this.isAdmin,
      };
      const token = jwt.sign(payload, JWT_SECRET, {
        algorithm: 'HS384',
        expiresIn: ACCESS_TOKEN_EXPIRY,
        issuer: JWT_ISSUER,
      });
      return token;
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  return User;
};

const database = {
  DB_RESEARCH: 'research',
};

const constants = {
  DB: {
    ...database,
  },
  DB_TABLES: {
    TBL_USERS: `${database.DB_RESEARCH}.users`,
    TBL_RESTAURANTS: `${database.DB_RESEARCH}.restaurants`,
  },
};

export default constants;

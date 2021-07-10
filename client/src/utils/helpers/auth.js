class Auth {
  constructor() {
    this._isAuthenticated = false;
  }

  login(cb) {
    this._isAuthenticated = true;
    cb();
  }

  logout(cb) {
    this._isAuthenticated = false;
    cb();
  }

  get isAuthenticated() {
    return this._isAuthenticated; 
  }
}

export default new Auth();

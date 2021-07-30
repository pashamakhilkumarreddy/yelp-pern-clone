import { memo, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import clsx from "clsx";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  header: {
    width: "100vw",
    borderBottom: "1px solid #ddd",
    boxShadow: `0 0 0.25rem 1px rgba(0, 0, 0, 0.1)`,
  },
});

const Header = () => {
  const [display, setDisplay] = useState(false);
  const styles = useStyles();
  const { isLoggedIn } = useSelector((state) => state.user);

  const handleLogout = () => {
    try {
      localStorage.clear();
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <header className={styles.header}>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <img src="/" alt="Logo" loading="lazy" decoding="async" />
          </Link>

          <span
            role="button"
            className={clsx("navbar-burger", { "is-active": display })}
            aria-label="menu"
            aria-expanded="false"
            data-target="mainNavbar"
            onClick={() => setDisplay((display) => !display)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </span>
        </div>

        <div
          id="mainNavbar"
          className={clsx("navbar-menu", { "is-active": display })}
        >
          <div className="navbar-start">
            <Link to="/home" className="navbar-item">
              Home
            </Link>
          </div>

          <div className="navbar-end">
            <div className="navbar-item pr-5">
              <div className="buttons">
                {isLoggedIn ? (
                  <button
                    type="button"
                    className="button is-light is-danger"
                    onClick={handleLogout}
                  >
                    Log Out
                  </button>
                ) : (
                  <>
                    <Link to="/login" className="button is-info">
                      <strong>Login</strong>
                    </Link>

                    <Link to="/register" className="button is-light is-link">
                      Register
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default memo(Header);

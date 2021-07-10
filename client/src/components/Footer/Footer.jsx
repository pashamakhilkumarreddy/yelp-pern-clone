import { memo } from "react";
import clsx from "clsx";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  footer: {
    position: "absolute",
    width: "100vw",
    border: `1px solid #ddd`,
    bottom: "-6rem",
    padding: "1.5rem",
  },
});

const Footer = () => {
  const styles = useStyles();
  return (
    <footer className={clsx("footer", styles.footer)}>
      <div className="content has-text-centered">
        <p className="title is-4">&copy; React Koa Yelp Clone 2021</p>
      </div>
    </footer>
  );
};

export default memo(Footer);

import style from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={style.containerFooter}>
        <a
          target="_blank"
          href="https://github.com/FelipeGPellegrini"
          rel="noreferrer"
        >
          <h2>GitHub</h2>
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/felipepellegrini/"
          rel="noreferrer"
        >
          <h2>Linkedin</h2>
        </a>
      </div>
      <div className={style.credits}>
        Desenvolvido por &copy;Felipe Pellegrini{" "}
      </div>
    </>
  );
};

export default Footer;

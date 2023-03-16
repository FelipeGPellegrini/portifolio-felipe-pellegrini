import styles from "./SecondScreen.module.css";

const SecondScreen = () => {
  return (
    <div className={styles.containerSecondScreen}>
      <div className={styles.profileImage}>
        <img
          width={200}
          src="https://avatars.githubusercontent.com/u/107892258?v=4"
          alt="Imagem de Perfil"
        />
      </div>
      <div className={styles.info}>
        <p>
          A tecnologia sempre esteve presente na minha vida e em junho de 2021
          comecei a estudar programação buscando ingressar no mercado de
          trabalho. Desde então fui adquirindo conhecimento e evoluindo na área,
          já realizei alguns trabalhos freelancers e outros projetos pessoais.
        </p>
        <h2>Tecnologias</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>React DOM</li>
          <li>React Native</li>
          <li>SASS</li>
          <li>CSS Modules</li>
          <li>Node JS</li>
          <li>Firebase</li>
          <li>Git</li>
          <li>GitHub</li>
        </ul>
        <h2>Projetos</h2>
        <div className={styles.containerProject}>
          <p>
            <span>Anjinhos de Pelo - PetShop</span> Projeto freelancer, para
            realizá-lo utilizei HTML, CSS e JavaScript. Sempre buscando a
            harmonia nas cores e nas animações.
            <p>
              <a
                target="_blank"
                href="https://anjinhosdepelo.netlify.app/"
                rel="noreferrer"
              >
                Visitar o site
              </a>
            </p>
          </p>
        </div>
        <div className={styles.containerProject}>
          <p>
            <span>Conversor de Moedas</span>
            Para realizar esse projeto precisei utilizar meus conhecimentos em
            React, JavaScript, CSS e HTML. (O conversor atualiza os preços das
            moedas automaticamente, pois está consumindo uma API).
            <p>
              <a
                target="_blank"
                href="https://felipegpellegrini.github.io/conversor-moedas/"
                rel="noreferrer"
              >
                Visitar o site
              </a>
            </p>
          </p>
        </div>
        <div className={styles.containerProject}>
          <p>
            <span>Buscador de CEP</span>
            Esse é um projeto feito utilizando React, que consome uma API
            gratuita, que tem a função de retornar o endereço correspondente com
            o CEP digitado.
            <p>
              <a
                target="_blank"
                href="https://felipegpellegrini.github.io/buscador-de-cep/"
                rel="noreferrer"
              >
                Visitar o site
              </a>
            </p>
          </p>
        </div>
        <div className={styles.containerProject}>
          <p>
            <span>Calculadora de IMC</span>
            Projeto realizado com a tecnologia React, nesse projeto fornecendo
            peso e altura recebemos o Índice de Massa Corporal.
            <p>
              <a
                target="_blank"
                href="https://felipegpellegrini.github.io/Calculo-IMC/"
                rel="noreferrer"
              >
                Visitar o site
              </a>
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SecondScreen;

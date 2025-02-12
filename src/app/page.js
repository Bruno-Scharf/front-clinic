

import Image from "next/image";
import styles from "./page.module.css";


export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.recepiçao}>
        <h1 className={styles.title}>Bem vindo a Clínica Saúde & Bem-Estar: Seu cuidado, nossa prioridade.</h1>
        <p className={styles.text}>Bem-vindo(a) à nossa clínica! Agendar sua consulta é fácil: acesse nosso site, escolha a especialidade, o profissional e o horário que melhor te convêm. Em poucos cliques, você estará pronto para cuidar da sua saúde com praticidade e segurança.</p>
        <button className={styles.button}>Agendar Consulta</button>
      </div>
    </div>
  );
}


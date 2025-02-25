import styles from "./teste.module.css";
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className={styles.page}>

        <h1 className={styles.titulo}>Bem vindo a Clínica Saúde & Bem-Estar: Seu cuidado, nossa prioridade.</h1>
        <p className={styles.subtitulo}>Bem-vindo(a) à nossa clínica! Agendar sua consulta é fácil: acesse nosso site, escolha a especialidade, o profissional e o horário que melhor te convêm. Em poucos cliques, você estará pronto para cuidar da sua saúde com praticidade e segurança.</p>
        <div className={styles.botaoContainer}>
          <button className={styles.botao}>
            <Link className={styles.linka} href='/componentes/agendamento/'>Agendar Consultas</Link>
          </button>
        </div>
      </div>
    </>
  );
}

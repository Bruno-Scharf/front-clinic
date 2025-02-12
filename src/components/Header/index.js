"use client"
import Link from "next/link"
import styles from "./Header.module.css";
import { useState } from "react";
import Image from "next/image";


export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <header className={styles.header}>
      <nav aria-label="Menu de navegação">
      <div className={styles.logo}>
        <Image src="/public_img/sample_0.jpg" alt="Logo da Aplicação" width={50} height={50} />
      </div>
        
        <div className={styles.menuHamburguer} onClick={toggleMenu}>
          <span className={menuAberto ? styles.open : ''}></span>
          <span className={menuAberto ? styles.open : ''}></span>
          <span className={menuAberto ? styles.open : ''}></span>
        </div>

        <ul className={`${styles.lista} ${menuAberto ? styles.ativo : ''}`}>
          <li>
            <Link href="/" aria-label="Ir para a página inicial"><h2>home</h2></Link>
          </li>
          <li>
            <Link href="" aria-label="Ir para a página inicial"><h2>Medico</h2></Link>
          </li>
          <li>
            <Link href="" aria-label="Ir para a página Sobre"><h2>Paciente</h2></Link>
          </li>
          <li>
            <Link href="" aria-label="Ir para a página contato"><h2>Consulta</h2></Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}


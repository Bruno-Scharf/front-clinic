import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import styles from "./page.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Tarefa-Front",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className={styles.container}>
          <header className={styles.header}>
            <div className={styles.logoContainer}>
              <span className={styles.logoText}>Policlínica</span>
            </div>
            <nav className={styles.navbar}>
              <ul className={styles.navItems}>
                <li className={styles.navItem}>
                  <Link className={styles.navLink} href="/">HOME</Link>
                </li>
                <li className={styles.navItem}>
                  <span className={styles.navLink}>MÉDICO</span>
                  <div className={styles.dropdownMenu}>
                    <ul className={styles.dropdownItems}>
                      <li><Link className={styles.navLink} href="/componentes/medico/">Listar</Link></li>
                      <li className={styles.navLink}>Adicionar</li>
                      <li className={styles.navLink}>Editar</li>
                      <li className={styles.navLink}>Excluir</li>
                    </ul>
                  </div>
                </li>
                <li className={styles.navItem}>
                  <span className={styles.navLink}>PACIENTE</span>
                  <div className={styles.dropdownMenu}>
                    <ul className={styles.dropdownItems}>
                      <li><Link className={styles.navLink} href="/componentes/paciente/">Listar</Link></li>
                      <li className={styles.navLink}>Adicionar</li>
                      <li className={styles.navLink}>Editar</li>
                      <li className={styles.navLink}>Excluir</li>
                    </ul>
                  </div>
                </li>
                <li className={styles.navItem}>
                  <span className={styles.navLink}>CONSULTA</span>
                  <div className={styles.dropdownMenu}>
                    <ul className={styles.dropdownItems}>
                      <li><Link className={styles.navLink} href="/componentes/consul/">Listar</Link></li>
                      <li className={styles.navLink}>Adicionar</li>
                      <li className={styles.navLink}>Editar</li>
                      <li className={styles.navLink}>Excluir</li>
                    </ul>
                  </div>
                </li>
              </ul>
            </nav>
          </header>

          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
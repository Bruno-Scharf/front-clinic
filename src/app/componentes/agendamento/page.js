'use client'
import { useState } from "react";
import styles from "./agendamento.module.css";

export default function Agendamento() {
    const [consultas, setConsultas] = useState([]);
    const [nomeMedico, setNomeMedico] = useState('');
    const [nomePaciente, setNomePaciente] = useState('');
    const [especialidade, setEspecialidade] = useState('');
    const [tipo, setTipo] = useState('');
    const [dataConsulta, setDataConsulta] = useState('');


    const adicionarConsulta = (e) => {
        e.preventDefault(); 
        if (!nomeMedico || !nomePaciente || !especialidade || !tipo || !dataConsulta) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        const novaConsulta = {
            id: consultas.length + 1,
            nomeMedico,
            nomePaciente,
            especialidade,
            tipo,
            dataConsulta
        };

        setConsultas([...consultas, novaConsulta]);
        
       
        setNomeMedico('');
        setNomePaciente('');
        setEspecialidade('');
        setTipo('');
        setDataConsulta('');
    };

    return (
      <>
        <div className={styles.medicosConteiner}>
            <h1 className={styles.medicosTitulo}>Agendar Consulta</h1>

        
            <div className={styles.formularioContainer}>
                <form onSubmit={adicionarConsulta} className={styles.formulario}>
                    <div className={styles.inputContainer}>
                        <label htmlFor="medico" className={styles.inputLabel}>Médico</label>
                        <input
                            id="medico"
                            type="text"
                            placeholder="Nome do médico"
                            value={nomeMedico}
                            onChange={(e) => setNomeMedico(e.target.value)}
                            className={styles.inputField}
                        />
                    </div>
                    <div className={styles.inputContainer}>
                        <label htmlFor="paciente" className={styles.inputLabel}>Paciente</label>
                        <input
                            id="paciente"
                            type="text"
                            placeholder="Nome do paciente"
                            value={nomePaciente}
                            onChange={(e) => setNomePaciente(e.target.value)}
                            className={styles.inputField}
                        />
                    </div>
                    <div className={styles.inputContainer}>
                        <label htmlFor="especialidade" className={styles.inputLabel}>Especialidade</label>
                        <input
                            id="especialidade"
                            type="text"
                            placeholder="Especialidade"
                            value={especialidade}
                            onChange={(e) => setEspecialidade(e.target.value)}
                            className={styles.inputField}
                        />
                    </div>
                    <div className={styles.inputContainer}>
                        <label htmlFor="tipo" className={styles.inputLabel}>Tipo de Consulta</label>
                        <input
                            id="tipo"
                            type="text"
                            placeholder="Tipo de consulta (Ex: Rotina, Urgente)"
                            value={tipo}
                            onChange={(e) => setTipo(e.target.value)}
                            className={styles.inputField}
                        />
                    </div>
                    <div className={styles.inputContainer}>
                        <label htmlFor="data" className={styles.inputLabel}>Data da Consulta</label>
                        <input
                            id="data"
                            type="datetime-local"
                            value={dataConsulta}
                            onChange={(e) => setDataConsulta(e.target.value)}
                            className={styles.inputField}
                        />
                    </div>
                    <div className={styles.buttonContainer}>
                        <button type="submit" className={styles.botaoAgendar}>Agendar Consulta</button>
                    </div>
                </form>
            </div>

          
            
        </div>
      </>
    );
}

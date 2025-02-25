'use client'
import { useEffect, useState } from "react";
import styles from "./pacient.module.css";

export default function Afis() {
    let [nome, setNome] = useState('');  
    let [pacientes, setPacientes] = useState([{
        "id": 1,
        "nome": "Alice Alves Nogueira",
        "telefone": "(69) 99932-9014",
        "email": "alice@exemplo.com",
        "cpf": "123.456.789-00"
    }, {
        "id": 2,
        "nome": "Penis Silva",
        "telefone": "(99) 99999-9999",
        "email": "penis@exemplo.com",
        "cpf": "987.654.321-00"
    }]);

    const getPacientes = async () => {
        const response = await fetch('https://api-clinica-2a.onrender.com/pacientes');
        if (!response.ok) {
            throw new Error('Deu ruim buscando os dados ' + response.statusText);
        }
        const data = await response.json();
        setPacientes(data);
    };

    useEffect(() => {
        getPacientes();
    }, []);


    const pacientesFiltrados = pacientes.filter(paciente =>
        paciente.nome.toLowerCase().includes(nome.toLowerCase())
    );

    return (
      <>
        <div className={styles.medicosConteiner}>
            <h1 className={styles.medicosTitulo}>Lista de Pacientes</h1>
            
            <div className={styles.buscarPaciente}>
                <input
                    type="text"
                    placeholder="Buscar paciente por nome..."
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}  
                    className={styles.inputBusca}
                />
            </div>
            <div className={styles.medicoCentralizado}>
                <table className={styles.medicosTabela}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Telefone</th>
                            <th>Email</th>
                            <th>CPF</th>
                        </tr>
                    </thead>
                    <tbody>
                    {pacientesFiltrados.map((paciente) => (
                        <tr key={paciente.id}>
                            <td>{paciente.id}</td>
                            <td>{paciente.nome}</td>
                            <td>{paciente.telefone}</td>
                            <td>{paciente.email}</td>
                            <td>{paciente.cpf}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
      </>
    );
}

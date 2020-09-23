import React, { useState, FormEvent } from "react";
import { FiChevronRight } from "react-icons/fi";
import api from "../../services/api";

import logoImg from "../../assets/logo.svg";

import { Title, Form, Repositories } from "./styles";

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState("");
  const [repositories, setRepositories] = useState([]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();

    const response = await api.get(`repos/${newRepo}`);

    const repository = response.data;

    setRepositories([...repositories, repository]);
  }

  return (
    <>
      <img src={logoImg} alt="GitHub Explorer" />
      <Title>Explore repositórios no GitHub</Title>

      <Form onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
          placeholder="Digite o nome do repositório"
        />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://xesque.rocketseat.dev/users/avatar/profile-db27254b-0432-4f77-a157-852603420f70-1597772278861.jpg"
            alt="Teresa Celeri"
          />
          <div>
            <strong>Teste</strong>
            <p>Descrição do Teste</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;

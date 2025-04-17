import React, { useState } from 'react';
import styles from './Search.module.css';
import perfilGithub from "../assets/perfil.png";

const Search = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");

  const buscarUsuario = () => {
    if (username === "") return;

    fetch(`https://api.github.com/users/${username}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Usuário não encontrado");
        }
        return response.json();
      })
      .then((data) => {
        setUserData(data);
        setError("");
      })
      .catch((err) => {
        setUserData(null);
        setError(err.message);
      });
  };

  return (

    <div className={styles.container}>
      <div className={styles.title}>
        <img src={perfilGithub} alt="" />
        <div className="buscar-container">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Digite o usuário"
            className={styles.input}
          />
          <button onClick={buscarUsuario} >
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        {error && <p className={styles.error}>{error}</p>}

        {userData && (
          <div className={styles.result}>
            <img
              src={userData.avatar_url}
              alt="Avatar"
              className={styles.img}
            />
            <div className={styles["result-content"]}>
              <h2>{userData.name}</h2>
              <p>{userData.bio}</p>
              <p>
                <strong>Repositórios públicos:</strong> {userData.public_repos}
              </p>
              <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
                Ver perfil
              </a>
            </div>
          </div>
        )}
        </div>
    </div>
  );
};

export default Search;

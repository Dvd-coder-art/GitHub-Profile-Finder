# 📱 GitHub Profile Finder

Um projeto simples em **React** que consome a API pública do **GitHub** para buscar informações de usuários a partir do seu nome de usuário. A aplicação exibe informações como foto de perfil, nome, bio, número de repositórios públicos e link direto para o perfil.

---

## 🚀 Tecnologias

- ⚛️ React
- 🎨 CSS Modules
- 🌐 Fetch API (consumindo [GitHub REST API v3](https://docs.github.com/pt/rest/users/users#get-a-user))

---

## 📦 Instalação

1️⃣ Clone o repositório:
```bash
git clone https://github.com/Dvd-coder-art/github-profile-finder.git
```

2️⃣ Acesse a pasta do projeto:
```bash
cd github-profile-finder
```

3️⃣ Instale as dependências:
```bash
npm install
```

4️⃣ Inicie o projeto:
```bash
npm run dev
```

---

## ⚙️ Como funciona

- Digite o nome de usuário do GitHub no campo de busca.
- Clique no botão de pesquisa.
- A aplicação irá buscar os dados através da API do GitHub e exibir na tela:
  - Foto de perfil
  - Nome
  - Bio
  - Número de repositórios públicos
  - Link para o perfil

---

## 📌 Exemplo de requisição:

```http
GET https://api.github.com/users/{username}
```

**Exemplo:**
```http
GET https://api.github.com/users/octocat
```

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 📬 Contato

Feito com 💙 por David (https://github.com/seu-usuario)

---

**Feito com 🍵 e 💻**
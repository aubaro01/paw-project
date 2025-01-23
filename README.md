# README.md

## Problemas Identificados na Página Principal do Website Doctoralia.com

Este documento descreve os problemas de acessibilidade e usabilidade encontrados na página principal do website Doctoralia.com, juntamente com recomendações para os corrigir. Use a estrutura abaixo para adicionar novos problemas que possam ser identificados.

---

## Estrutura do Sistema

A arquitetura do sistema está organizada em quatro camadas principais:

**1. Frontend (UI/UX)**

- **Objetivo:** Interface gráfica acessível e intuitiva para os utilizadores.
- **Páginas principais:**
  - `/book-appointment` - Agendamento de consultas.
  - `/profile/:id` - Visualização de perfis de usuários.
  - `/messages` - Sistema de mensagens entre utilizadores.

**2. Middleware**

- **Objetivo:** Camada intermediária para comunicação entre o frontend e o backend.
- **Endpoints principais:**
  - `/api/messages/send` - Envio de mensagens.
  - `/api/appointments` - Gerenciamento de consultas.
  - `/api/users/auth` - Autenticação de utilizadores.

**3. Backend**

- **Objetivo:** Lógica de negócios e manipulação de dados.
- **Serviços principais:**
  - `/api/users` - Gestão de contas de utilizadores.
  - `/api/appointments` - Gestão de marcações.
  - `/api/reviews` - Avaliações de consultas.

**4. Banco de Dados**

- **Objetivo:** Armazenamento estruturado e seguro dos dados do sistema.
- **Tabelas principais:**
  - `users` - Dados dos utilizadores.
  - `appointments` - Informações sobre marcações.
  - `messages` - Histórico de mensagens.

---

## Estrutura para Novos Problemas

Cada novo problema deve ser documentado utilizando o seguinte formato:

### Categoria do Problema

- **Descrição:** Breve explicação do problema encontrado.
- **Caminho:** Onde o problema ocorre no código ou na interface.
- **Detalhes Técnicos:** Informações adicionais (como código HTML ou CSS relevante).
- **Impacto:** Como este problema afeta os utilizadores.
- **Solução Proposta:** Passos sugeridos para corrigir o problema.

---

## Problemas Atuais

### 1. Atributos ARIA Não Permitidos

- **Descrição:** Uso de atributos ARIA não permitidos, como `aria-expanded`.
- **Caminho:**
  - `.query-dropdown > .dropdown-toggle[aria-haspopup="true"]` 
  - `.city-col > .search-autocomplete-dropdown.dp-dropdown.dropdown > .dropdown-toggle[aria-haspopup="true"]`
- **Detalhes Técnicos:**
  ```html
  <div aria-haspopup="true" aria-expanded="false" class="dropdown-toggle">
  ```
- **Impacto:** Atributos inválidos podem confundir tecnologias assistivas.
- **Solução Proposta:** Remova ou substitua os atributos ARIA para valores permitidos.

### 2. Problemas de Contraste de Cor

- **Descrição:** Contraste inadequado entre texto e fundo.
- **Caminhos:**
  - `a[title="Privacidade dos dados"]`
  - `.ml-0-5[data-v-714bdc06=""]`
- **Detalhes Técnicos:**
  ```css
  background-color: #008571;
  color: #ffffff;
  ```
- **Impacto:** Dificulta a legibilidade para utilizadores com deficiências visuais.
- **Solução Proposta:** Ajustar cores para atender aos padrões de contraste.

### 3. Atributos Alt Faltando

- **Descrição:** Imagens sem atributos `alt` adequados.
- **Caminho:** `img[loading="lazy"]`
- **Detalhes Técnicos:**
  ```html
  <img src="image.webp" loading="lazy">
  ```
- **Impacto:** Usuários com leitores de ecrã não conseguem interpretar as imagens.
- **Solução Proposta:** Adicionar descrições `alt` relevantes.

### 4. Links com Contraste e Estilo Insuficientes

- **Descrição:** Links pouco diferenciados do texto circundante.
- **Caminho:**
  - `figure[itemtype="http://schema.org/Question"]:nth-child(2) > .media > .media-body > figcaption > p[itemprop="text"] > a`
- **Detalhes Técnicos:**
  ```css
  text-decoration: underline;
  ```
- **Impacto:** Usuários podem não identificar os links corretamente.
- **Solução Proposta:** Melhorar o contraste e adicionar estilos visuais.

---

## Recomendações Gerais

1. **Teste Regular de Acessibilidade:** Utilize ferramentas como Lighthouse ou Axe para manter conformidade com WCAG.
2. **Educação da Equipa:** Sensibilizar os desenvolvedores para boas práticas de acessibilidade.
3. **Verificação de Contraste:** Implementar testes automáticos de contraste durante o desenvolvimento.
4. **Documentação Clara:** Assegurar que cada elemento tenha documentação apropriada para futuras revisões.
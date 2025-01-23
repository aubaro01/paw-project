# README.md

## Problemas Identificados na Página Principal do Website Doctoralia.com

Este documento descreve os problemas de acessibilidade e usabilidade encontrados na página principal do website Doctoralia.com, juntamente com recomendações para os corrigir. Use a estrutura abaixo para adicionar novos problemas que possam ser identificados.

---

### Estrutura para Novos Problemas

Cada novo problema deve ser adicionado utilizando o seguinte formato:

#### Categoria do Problema

- **Descrição:** Breve explicação do problema encontrado.
- **Caminho:** Onde o problema ocorre no código ou na interface.
- **Detalhes Técnicos:** Informações adicionais (como código HTML ou CSS relevante).
- **Impacto:** Como este problema afeta os utilizadores.
- **Solução Proposta:** Passos sugeridos para corrigir o problema.

---

### Problemas Atuais

#### 1. **Atributos ARIA Não Permitidos**

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

#### 2. **Problemas de Contraste de Cor**

- **Descrição:** Contraste insuficiente entre texto e fundo.
- **Caminhos:**
  - `a[title="Privacidade dos dados"]`
  - `.ml-0-5[data-v-714bdc06=""]`
- **Detalhes Técnicos:**
  - Contraste atual: 2.24:1
  - Recomendado: 4.5:1
  - Exemplo:
    ```css
    background-color: #008571;
    color: #ffffff;
    ```
- **Impacto:** Dificulta a legibilidade, especialmente para utilizadores com deficiências visuais.
- **Solução Proposta:** Ajustar as cores de fundo e texto para atender ao contraste mínimo.

#### 3. **Atributos Alt Faltando**

- **Descrição:** Imagens sem atributos `alt` ou equivalentes.
- **Caminho:** `img[loading="lazy"]`
- **Detalhes Técnicos:**
  ```html
  <img src="image.webp" loading="lazy">
  ```
- **Impacto:** Usuários de leitores de ecrã não conseguem entender o conteúdo das imagens.
- **Solução Proposta:** Adicione um atributo `alt` descritivo ou use `role="presentation"`.

#### 4. **Links com Contraste e Estilo Insuficientes**

- **Descrição:** Links com baixo contraste ou sem diferenciação visual.
- **Caminhos:**
  - `figure[itemtype="http://schema.org/Question"]:nth-child(2) > .media > .media-body > figcaption > p[itemprop="text"] > a`
- **Detalhes Técnicos:**
  - Contraste atual: 2.59:1
  - Exemplo de estilo ausente:
    ```css
    text-decoration: none;
    ```
- **Impacto:** Dificulta a identificação de links, prejudicando a navegação.
- **Solução Proposta:** Aumentar o contraste e adicionar sublinhado ou outro estilo visual.

#### 5. **Elementos sem Texto Acessível**

- **Descrição:** Elementos interativos sem texto acessível para leitores de ecrã.
- **Caminhos:**
  - `a[data-test-id="dp-logo"]`
  - `.mx-sm-0`
- **Detalhes Técnicos:**
  ```html
  <a href="/" class="logo"></a>
  ```
- **Impacto:** Usuários com deficiência visual não conseguem identificar a funcionalidade do elemento.
- **Solução Proposta:** Adicione um atributo `aria-label` ou texto visível.

#### 6. **Meta Viewport Não Acessível**

- **Descrição:** Impede o zoom em dispositivos móveis.
- **Caminho:** `<meta name="viewport">`
- **Detalhes Técnicos:**
  ```html
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  ```
- **Impacto:** Usuários móveis não conseguem aumentar o tamanho do conteúdo.
- **Solução Proposta:** Remova `user-scalable=no`.

---

## Recomendações Gerais

1. **Teste Regular de Acessibilidade:** Utilize ferramentas como Lighthouse ou Axe para verificar regularmente a conformidade com as normas WCAG.
2. **Educação da Equipa:** Certifique-se de que os desenvolvedores compreendem as boas práticas de acessibilidade.
3. **Revisão de Contraste:** Implementar verificações automáticas de contraste durante o desenvolvimento.
4. **Documentação Clara:** Garanta que cada elemento tenha a documentação necessária para corrigir ou evitar problemas semelhantes no futuro.
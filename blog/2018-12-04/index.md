---
date: "2018-12-04"
title: "Menu Hamburguer Puro CSS"
category: "CSS"
---

Olá pessoal, Tudo bem!

Segue um pequeno tutorial que eu gosto muito de aplicar em meus projetos.

Um menu hamburguer feito somente com css, isso mesmo que você leu somente css e nadinha de Javascript.

### Vamos para o codigo - Let's go

---

#### A Estrutura HTML

Primeiro vamos definir um _container_ para componetizar nosso menu. Como filho deste componente usaremos um **input, label** e **nav**.

O **input** tipo checkbox usaremos para pega o estado :checked para animar o butão hambumber e nossa lista de link do menu, no **label** criaremos nossos botão humburguer com animação e por ultimo nossa tag **nav** que vai ter nossa lista de links do menu.

_<small>Veja como ficara nosso componente:</small>_

```html
<div class="navigation-main">
  <input class="input" type="checkbox" id="menuToggle" />

  <label class="label" for="menuToggle">
    <span class="span">&nbsp;</span>
  </label>

  <nav class="menu-nav">
    <ul class="list">
      <li class="item"><a class="link" href="#">Home</a></li>
      <li class="item"><a class="link" href="#">About</a></li>
      <li class="item"><a class="link" href="#">Portfolio</a></li>
      <li class="item"><a class="link" href="#">Contato</a></li>
    </ul>
  </nav>
</div>
```

---

#### A Estilização CSS

Para começa nosso **css** apliquei um reset bem basico zerando o pading e margin de todos os elementos e adicionando o valor _border-box_ no **box-sizing** para não crescer o box quando aplicado pading ou margin.

```css
*,
*::before,
*::after {
  box-sizing: inherit;
  padding: 0;
  margin: 0;
}

html {
  box-sizing: border-box;
}

body {
  background-color: #7159c1;
  font-family: sans-serif;
  color: #ffffff;
}

...
```

> Escodemos o **input** checkbox pois só precisaremos do seu estado.
>
> No label aqui criamos o botão hamburguer com o **span** adicionado um after e before para termos 3 traços.

```css
.navigation-main > .input {
  display: none;
  visibility: hidden;
  z-index: -999;
}

.navigation-main > .label {
  width: 50px;
  height: 40px;

  position: absolute;
  top: 20px;
  right: 20px;

  cursor: pointer;
  z-index: 10;
}

.navigation-main .span {
  width: 40px;
  height: 2px;
  background-color: #eee;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.navigation-main .span::before,
.navigation-main .span::after {
  content: "";
  display: block;
  position: absolute;
  width: 40px;
  height: 2px;
  background-color: #eee;
  transform-origin: center center;
  transition: all 400ms linear;
}

.navigation-main .span::before {
  bottom: 8px;
}

.navigation-main .span::after {
  top: 8px;
}
```

A mágica toda começa por aqui!

> Usei o **_seletor ~_** conhecido como seletor irmão para adicionar o transform rotate
> no span quando o input checkbox estive como :checked. Assim que animamos nosso botão.
> Simple não eh?

```css
.input:checked ~ .label .span {
  background-color: transparent;
}

.input:checked ~ .label .span::before {
  transform: rotate(135deg);
  bottom: 0;
}

.input:checked ~ .label .span::after {
  transform: rotate(-135deg);
  top: 0;
}
```

> Aqui apliquei estilo a lista de links do menu, e coloquei como fixed e com width: 100vw e heigth: 100vh para ocupar 100% da tela, centralizei todo os link com o flex-box e escondi todo conteudo com o **translate**

```css
.menu-nav {
  background: #70db93;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  transition: transform 600ms ease;

  transform: translate(0, -100%);
}

.menu-nav > .list {
  list-style: none;
}

.menu-nav .item {
  padding: 10px;
  text-align: center;
}

.menu-nav .link {
  color: #fff;
  font-size: 10vh;
  text-decoration: none;
  text-transform: uppercase;
}

.menu-nav .link:hover {
  color: tomato;
}
```

> Para finalizar a animação utilizei novamente o seletor irmão **~** para que quando o input checkbox estiver :checked o menu aparecerar na tela.

```css
.input:checked ~ .menu-nav {
  transform: translate(0, 0);
}
```

---

## :) Veja o resultado.

<iframe height='339' scrolling='no' title='Menu Hamburgue Puro CSS' src='//codepen.io/alexandrersantos/embed/KrYrGX/?height=339&theme-id=dark&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/alexandrersantos/pen/KrYrGX/'>Menu Hamburgue Puro CSS</a> by Alexandre Ramos | Creative Front-End Developer (<a href='https://codepen.io/alexandrersantos'>@alexandrersantos</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Conclusão

Existe divesas maneira de criar um menu como este! Mas eu adotei este codigo para a maioria do meus projetos por causa de sua simplicidade.

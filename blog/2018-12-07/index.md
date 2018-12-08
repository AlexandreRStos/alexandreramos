---
date: "2018-12-07"
title: "React Higher-Order Components (HOCs) para Iniciantes"
category: "React"
---

A tradução deste artigo faz parte da minha forma de aprendizado. Acredito que traduzindo alguns textos enquanto eu aprendo a desenvolver com React/Redux e derivados, eu estou ampliando meu conhecimento e ajudando outros devs que queiram entender mais sobre o assunto também.

> artigo original pode ser lido [aqui](https://hackernoon.com/higher-order-components-hocs-for-beginners-25cdcf1f1713), e foi escrito brilhantemente pelo Brandon Newton, ele se auto intitula um “Engenheiro Frontend fazendo coisas divertidas em São Francisco”.

## Prefácio

Estou escrendo isso porque todos os outros artigos-incluindo a documentação oficial o React sobre componentes de ordem superior me confundiram demais. Eu entendi que Componentes de ordem superior eram uma coisa, mas não entendi como eram úteis. Este artigo tem como objetivo esclarecr essa confusão sobre estes componentes.

## Breve introdução às Arrow Functions do ES6

Este artigo mostrará exemplos exclusivamente usando as arrow functions do ES6. SE vocÊ nunca viu uma arrow function antes, eles são essencialmente equivalentes a expressões de função normais. O código abaixo mostra as diferenças entre funcões normais e arrow functions.

```js
function () {
  return 42
}

// o mesmo que
() => 42

// que é o mesmo que
() => {
  return 42
}

function person(name) {
  return { name: name }
}

// o mesmo que
const person = (name) => {
  return { name: name }
}

// que é o mesmo que
const person = (name) => { name: name }
```

<small>Leia a documentação das arrow function no [MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions) para uma compreensão mais completa.</small>

### Funções com Valores e Aplicação Parcial

Assim como Números, Strings, Booleanos, etc., as _funções são valores_. Isso significa que você passar funções por aí como qualquer outro Dado. Você pode passar uma função como um argumento para outra função:

```javascript
const executa = umaFuncao => {
  return umaFuncao();
};

executa(() => console.log("Executado"));
```

E você pode retornar uma função apartir de uma função.

```js
const obterUm = () => () => 1;

obterUm()();
```

A razão pela qual temos dois `()` depois do obterUm é que a primeira aplicação da função retorna outra. Veja:

```js
const obterUm = () => () => 1;

obterUm;
//=> () => () => 1

obterUm();
//=> () => 1

obterUm()();
//=> 1
```

O útil sobre retornar funções em funções é que podemos escrever funções que acompanham a entrada inicial. Por exemplo, a função abaixo aceita um número como argumento e retorna uma função que multiplica esse argumento por um novo:

```js
const multiplica = x => y => x * y;

multiplica(5)(20);
```

Este exemplo funciona da mesma forma que obterUm, cada parêntese aplica alguma entrada para a função. Neste caso, estamos atribuindo 5 para **_x_** e 20 para **_y_**.

```js
const multiply = x => y => x * y;

multiply;
//=> (x) => (y) => x * y

multiply(5);
//=> (y) => 5 * y

multiply(5)(20);
//=> 5 * 20
```

Quando chamamos a função, multiplicacom apenas um argumento, estamos parcialmente aplicando a função. Quando chamamos de multiplica(5), obtemos uma função que irá multiplicar sua entrada por 5. Se chamamos de multiplica(7), obtemos uma função que irá multiplicar a entrada por 7 e assim por diante. Podemos usar aplicações parciais para criar novas funções com uma entrada predefinida:

```js
const multiplica = x => y => x * y;

const multiplicaPorCinco = multiplica(5);
const multiplicaPorCem = multiplica(100);

multiplicaPorCinco(20);
//=> 100
multiplica(5)(20);
//=> 100

multiplicaPorCem(5);
//=> 500
multiplica(100)(5);
//=> 500
```

Isso pode não parecer super útil no início. No entanto, você pode usar uma aplicação parcial para escrever um código mais fácil de ler e raciocinar. Por exemplo, podemos substituir a complexas sintaxe de interpolação de funções para [styled-components](https://www.styled-components.com/)por algo bem mais limpo:

```js
// Antes
const Button = styled.button`
  background-color: ${({ theme }) => theme.bgColor}
  color: ${({ theme }) => theme.textColor}
`
<Button theme={themes.primary}>Submit</Button>

// Depois
const fromTheme = (prop) => ({ theme }) => theme[prop]

const Button = styled.button`
  background-color: ${fromTheme("bgColor")}
  color: ${fromTheme("textColor")}
`
<Button theme={themes.primary}>Submit</Button>
```

Criamos uma função que aceita uma string como um parâmetro:  
`fromTheme("textColor")`, que retorna uma função aceitando um objeto com uma propriedade de tema: `({theme}) => theme[prop]`, que então tentamos pesquisar pela string inicial que passamos em **_"textColor"_**. Poderíamos avançar e escrever funções como **_backgroundTextColor_** e **_textColor_** que aplicam parcialmente a função **_fromTheme_** :

```js
const fromTheme = prop => ({ theme }) => theme[prop];
const backgroundColor = fromTheme("bgColor");
const textColor = fromTheme("textColor");

const Button = styled.button`
  background-color: ${backgroundColor}
  color: ${textColor}
`;
```

## Higher-Order Functions

As funções de ordem superior são definidas como funções que aceitam uma função como argumento. Você já pode estar familiarizado com funções de ordem superior e nem saber disso. Se você já usou uma função como o map, então já usou uma HOF. O map é uma função que se desloca e aplica uma função a cada elemento em uma matriz. Por exemplo, você pode colocar uma matriz de números como esta:

```js
const quadrado = x => x * x;

[(1, 2, 3)].map(quadrado);
//=> [ 1, 4, 9 ]
```

Podemos escrever nossa própria versão do **_map_** para ilustrar este conceito:

```js
const map = (fn, array) => {
  const arrayMapeado = [];

  for (let i = 0; i < array.length; i++) {
    arrayMapeado.push(
      // aplica fn com o elemento atual da matriz
      fn(array[i])
    );
  }

  return arrayMapeado;
};
```

Podemos usar o nosso **_map_** para fazer algo como calcular o quadrado em uma série de números:

```js
const quadrado = x => x * x;

console.log(map(quadrado, [1, 2, 3, 4, 5]));
//=> [ 1, 4, 9, 16, 25 ]
```

Ou devolver uma matriz de elementos `<li>` React:

```jsx
const HeroList = ({ heroes }) => (
  <ul>
    {map((hero) => (
      <li key={hero}>{hero}</li>
    ), heroes)}
  </ul>
)

<HeroList heroes=[
  "Wonder Woman",
  "Black Widow",
  "Spider Man",
  "Storm",
  "Deadpool"
]/>
/*=> (
  <ul>
    <li>Wonder Woman</li>
    <li>Black Widow</li>
    <li>Spider Man</li>
    <li>Storm</li>
    <li>Deadpool</li>
  </ul>
)*/
```

## Higher-Order Components

Sabemos que uma função de ordem superior é uma função que aceita uma função como argumento. Em React, qualquer função que retorna [JSX](https://reactjs.org/docs/introducing-jsx.html) é conhecida como Componente _Funcional Sem Estado_, ou somente _Componente Funcional_.  
Um Componente Funcional básico parece com isto aqui:

```jsx
const Title = (props) => <h1>{props.children}</h1>

<Title>Higher-Order Components(HOCs) for React Newbies</Title>
//=> <h1>Higher-Order Components(HOCs) for React Newbies</h1>
```

Um Componente de ordem superior é uma função que aceita um Componente como um argumento e retorna um Componente. Como você vai usar o componente passado, aí já é com você. Você pode até mesmo desconsiderar completamente o componente:

```jsx
// Technically an HOC
const ignore = (anything) => (props) => <h1>:)</h1>

const IgnoreHeroList = ignore(HeroList)

<IgnoreHeroList />
//=> <h1>:)</h1>
```

Você pode escrever um **HOC** que transforma sua entrada em maiúscula:

```jsx
const yell = (PassedComponent) =>
  ({ children, ...props }) =>
    <PassedComponent {...props}>
      {children.toUpperCase()}!
    </PassedComponent>

const Title = (props) => <h1>{props.children}</h1>

const AngryTitle = yell(Title)

<AngryTitle>Whatever</AngryTitle>
//=> <h1>WHATEVER!</h1>
```

Você também pode retornar um Componente Stateful, porque as classes em Javascript são syntax sugar para funções. Isso permite que você se encaixe nos métodos de Lifecycle do React como **_componentDidMount_**. E é aí que os HOCs se tornam realmente úteis. Agora podemos fazer coisas como passar o resultado de uma solicitação HTTP como atributos para um componente funcional:

```jsx
const comGists = (PassedComponent) =>
  class ComGists extends React.Component {
    state = {
      gists: []
    }

    componentDidMount() {
      fetch("https://api.github.com/gists/public")
      .then((r) => r.json())
      .then((gists) => this.setState({
        gists: gists
      }))
    }

    render() {
      return (
        <PassedComponent
          {...this.props}
          gists={this.state.gists}
        />
      )
    }
  }

const Gists = ({ gists }) => (
  <pre>{JSON.stringify(gists, null, 2)}</pre>
)

const GistsList = comGists(Gists)

<GistsList />
//=> Before api request finishes:
// <Gists gists={[]} />
//
//=> After api request finishes:
// <Gists gists={[
//  { /* … */ },
//  { /* … */ },
//  { /* … */ }
// ]} />
```

Você pode chamar **comGists** em qualquer componente e irá passar para baixo o resultado da chamada à API de Gists do GitHub. Você pode ver um exemplo mais detalhado onde isso acontece aqui.

## Conclusão: HOCs são foda

Redux usa um HOC, [connect](https://github.com/reduxjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options) passa os valores do seu estado para os componentes “conectados”. Também faz algumas verificações de erros e otimizações do ciclo de vida do componente que, se feito manualmente, faria com que você escrevesse uma tonelada de código de referência.

Se você se pegar escrevendo muitos códigos em lugares diferentes que fazem a mesma coisa, você poderá refatorar esse código em um **HOC reutilizável** e agregar mais eficiência à sua aplicação.

HOCs são realmente expressivos e você pode construir muitas coisas legais com eles. No entanto, porque eles são tão expressivos, você pode afundar com eles também, tome bastante cuidado.

Tente manter seus HOCs simples e tente escrever um código que não exija que você leia um artigo longo como este para lembrá-lo de como funciona.

> _Gostou? então deixe seu like isso ajuda bastante a continuar escrevendo_

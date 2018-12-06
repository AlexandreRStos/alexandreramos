---
date: "2018-12-05"
title: "Entendendo o Array map"
category: "Javascript"
---

**Uma pequena descrição da função [array.map()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map).**

> "_O método map chama a função callback recebida por parâmetro para cada elemento do Array original, em ordem, e constrói um novo array com base nos retornos de cada chamada. A função callback é chamada apenas para os elementos do array original que tiverem valores atribuídos; os elementos que estiverem como undefined, que tiverem sido removidos ou os que nunca tiveram valores atribuídos não serão considerados._"

## Vamos para o Codígo - Let's go

Considere esse um array

```js
const array = [2, 3, 5, 7, 11, 13];
```

Usando map para criar um novo array com o dobro dos valores.

```js
const novoArray = array.map(function(item) {
  return item * 2;
});

cosole.log("novoArray", novoArray); // [4, 6, 10, 14, 22, 26]
// enquanto o array continuar sendo [2, 3, 5, 7, 11, 13]
```

Como podemos ver, a função map criar um novo array usando as informções do array que estamos interando.

#### Mas como o map faz isso?

Para descobrir como o map funciona por baixo dos pano e entende-lo melhor vamos criar o nosso proprio array.map().

Para isso vou usar o metodo **Prototype** para substuir uma função global do Javascrpt vou chama de meuMap().

```js
Array.prototype.meuMap = function(callback) { ... };
```

Ele vai receber um função com callback que recebera a função que passamos no array.map()

Para o codigo da interação primero vamos declara uma variavel para guarda o novo array Mapeado, logo em seguida usei o **_for_** para interar o array que recebemos pelo **_callback_**, dentro do _for_ temos uma variavel que receberar o valor ou objeto na posição do indice, e no final use o **push** para criar o novo array agora foi bem simple só foi da o return da novo array para utiliza-mos.

Veja como ficou a nossa nova função:

```js
Array.prototype.meuMap = function(callback) {
  const novoArrayMapeado = [];
  for (let indice = 0; indice <= this.lenght - 1; indice++) {
    const resultado = callback(this[indice], indice);
    novoArrayMapeado.push(resultado);
  }
  return novoArrayMapeado;
};
```

Pronto já temos nosso proprio array.map()! Simples não eh. :)

Agora ja podemos usar nosso array.meuMap()

```js
const novoArray = array.meuMap(function(item) {
  return item * 2;
});

cosole.log("novoArray", novoArray); // [4, 6, 10, 14, 22, 26]
// enquanto o array continuar sendo [2, 3, 5, 7, 11, 13]
```

Olha só que legal temos o mesmo resultado!

### Conclusão

Foi bem facil criar nosso proprio metodo array.map() e com isso pode entender melhor como funciona este metodo com isso agora eu sei como melhor aplica-lo em meus proximos projetos.

> _Gostou? então deixe seu like isso ajuda bastante a continuar escrevendo_

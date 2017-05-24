# Teste para estagiários


No Buscapé Company não somos apenas empreendedores por natureza, somos também desenvolvedores por natureza
e adoramos programar.

E como parte do nosso processo de seleção pedimos para você desenvolver um aplicativo que resolva um pequeno problema que
nós temos.


Mas antes, vamos a algunas considerações.

* Divirta-se! :smile: Esse teste foi feito acima de tudo para ser divertido 

* Faça na linguagem que você tenha mais familiaridade e utilize o framework desejado (aqui trabalhamos mais com Java e Spring)

* Ficou com alguma dúvida? Algo não está claro? Vamos considerar a prerrogativa que você assumiu como verdadeira, só a
 adicione no seu código com um comentário ou no README.md

* Testes são sempre uma ótima ideia :wink:

Ah! Uma regra: crie um projeto no seu Github para que possamos verificar o seu raciocínio para a conclusão
do exercício, através dos commits.

Boa sorte!

# Juiz de Jokenpô

Fazemos frequentemente disputas acaloras de jokenpô e precisamos de um juiz imparcial para decidir o vencedor.
O objetivo desse exercício é criar esse juiz.

O sistema deve receber a entrada dos dois jogadores e informar qual jogador foi o vitorioso.

## Regras

As regras do jokenpo são bem simples. Temos dois jogadores que devem escolher entre três armas: 

A Pedra | O Papel | A Tesoura
------- | ------- | ---------
![A Pedra](/estagiario-backend/images/rock.png) | ![O Papel](/estagiario-backend/images/paper.png) | ![A Tesoura](/estagiario-backend/images/scissors.png)


Cada arma ganha e perde das outras duas escolhas, da seguinte forma:

A Pedra ganha da Tesoura, mas perde do Papel

A Tesoura ganha do Papel, mas perde da Pedra

O Papel ganha da Pedra, mas perde da Tesoura

Arma 1 | Arma 2| Vencedor
--------- | ---------|---------
![A Pedra](/estagiario-backend/images/rock.png)| ![O Papel](/estagiario-backend/images/paper.png)|![O Papel](/estagiario-backend/images/paper.png)
![A Tesoura](/estagiario-backend/images/scissors.png)| ![A Pedra](/estagiario-backend/images/rock.png)|![A Pedra](/estagiario-backend/images/rock.png)
![O Papel](/estagiario-backend/images/paper.png)| ![A Tesoura](/estagiario-backend/images/scissors.png)|![A Tesoura](/estagiario-backend/images/scissors.png)

## Entrada:

O Juiz receberá duas linhas como entrada, a arma utilzada pelo Jogador 1 e a arma utilizada pelo Jogador 2

```
PAPEL
TESOURA
```

## Saída:

O Juiz deverá responder qual jogador foi o vencedor: o Jogador 1 ou o Jogador 2

```
Jogador 2
```

## Exemplo:

Dada essa jogada

```
PEDRA
TESOURA
```

A resposta do Juiz deverá ser

```
Jogador 1
```

Para informar que o Jogador 1 foi o vitorioso

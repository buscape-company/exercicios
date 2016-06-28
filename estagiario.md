# Teste para estagiários


No Buscapé Company, não somos apenas empreendedores por natureza, somos também desenvolvedores por natureza
e adoramos programar.

E como parte do nosso processo de seleção pedimos para você desenvolver um aplicativo para resolver um pequeno problema que
nós temos.


Mas antes, vamos a algunas considerações.

* Divirta-se, esse teste foi feito acima de tudo para ser divertido

* Faça na linguagem que você tenha mais familiaridade e utilize o framework desejado (aqui trabalhamos mais com Java e Spring)

* Ficou com alguma dúvida? Algo não está claro? Vamos considerar a prerrogativa que você assumiu como verdadeira, só a
 adicione no seu código com um comentário ou no README.md

* Testes são sempre uma ótima ideia

Ah! Uma regra: crie um projeto no seu Github para que possamos verificar, através dos commits, o seu raciocínio para a conclusão
do exercício.

Boa sorte!

# Juiz de Jokenpô

Fazemos frequentemente disputas acaloras de jokenpô e precisamos de um juiz imparcial para decidir o vencedor.
O objetivo desse exercício é criar esse juiz.

O sistema deve receber a entrada dos dois jogadores e informar qual jogador foi o vitorioso.

 ## Regras
 As regras do jokenpo são bem simples. Temos dois jogadores que devem escolher entre três armas

![A Pedra](/images/rock.png)

![O Papel](/images/paper.png)

![A Tesoura](/images/scissors.png)

Cada arma tem ganha de uma outra arma e também perde de uma.


A Pedra ganha da Tesoura, mas perde do Papel

A Tesoura ganha do Papel, mas perde da Pedra

O Papel ganha da Pedra, mas perde da Tesoura

## Entrada:

O Juiz receberá duas linhas com entrada, a arma utilzada pelo Jogador 1 e a arma utilizada pelo Jogador 2

```
PAPEL
TESOURA
```

## Saída:

O Juiz deverá responder qual jogador foi o vencedor, o Jogador 1 ou o Jogador 2

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
# Teste de programação

Gostaríamos de avaliar o seu estilo de desenvolvimento, para isso pedimos que você faça um pequeno exercício. 

Durante o desenvolvimento, dê preferência para implementação em Java.

Crie um projeto no seu Github para que possamos verificar, através dos commits, o seu raciocínio para a conclusão do exercício.

Ah! Não se esqueça de usar Maven ou Gradle como gerenciador de dependências e de fazer testes unitários :wink:

Caso algo não esteja claro, sinta-se livre para assumir qualquer prerrogativa desejada como verdadeira e desenvolver a solução em cima dela; apenas crie uma documentação explicando-a.

Divirta-se!

# Viagem ao fundo do mar 


Uma equipe de cientista está explorando a fossa das Marianas e para isso utiliza submarinos não tripulados. Os cientistas já mapearam a área a ser explorada e a dividiram em três eixos: X, Y e Z. Esses eixos controlam o posicionamento e profundidade do submarino.

A posição do submarino é representado pela notação (0, 0, 0, NORTE) que indica os pontos X, Y, Z e a direção que o submarino aponta (Norte, Sul, Leste e Oeste).

Os cientistas utilizam uma serie comandos simples para fazer a movimentação do submarino: L, R, para girar o submarino para esquerda ou direita, M para mover o submarino e U e D para subir ou descer o submarino.

Você deve desenvolver um sistema que processe uma série de comandos e faça a navegação desse submarino.

Para simplificar, leve em consideração que o submarino sempre começará no ponto (0, 0, 0, NORTE) e que todo movimento quando o submarino estiver apontada para o NORTE, somará 1 ao eixo Y, todo movimento quando o submarino estiver apontada para o LESTE somará 1 ao eixo X e todo movimento para baixo diminuirá 1 do eixo Z.


## Entrada:

Os cientistas mandarão os comandos agrupados em uma única linha, como no exemplo:
```
LMRDDMMUU
```


## Saída:

A saída deverá conter a coordenada final do submarino junto com sua direção, como no exemplo:

```
-1 2 0 NORTE
```


## Exemplo de execução:


Dado a seguinte entrada:

(Lembrando que a posição inicial do submarino é 0, 0, 0, NORTE)
```
RMMLMMMDDLL
```

A saída esperada é:
```
2 3 -2 SUL
```

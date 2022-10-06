//Criando Array
matriz = new Array();
sim = new Array();

const tabela = document.querySelector(".tabela");

//Criando Matriz 3x3
matriz = [['B','Z','T','J','G','B','H','V','A','M'],
          ['E','X','L','E','N','J','A','A','R','A'],
          ['K','V','Z','D','I','Z','N','D','E','N'],
          ['U','W','A','I','W','G','S','E','K','D'],
          ['L','B','Y','I','X','U','O','R','L','O'],
          ['J','M','O','H','E','G','L','Y','A','F'],
          ['L','R','A','B','T','L','O','J','W','P'],
          ['O','T','B','N','A','W','S','M','Y','R'],
          ['Y','U','C','A','X','I','D','Q','K','R'],
          ['Y','O','D','A','V','G','H','K','S','R']];

sim = [[0,0,0,8,7,0,6,5,0,4],
       [1,0,0,8,7,0,6,5,3,4],
       [1,0,0,8,7,0,6,5,3,4],
       [1,0,9,8,7,0,6,5,3,4],
       [1,10,0,9,7,0,6,5,3,4],
       [0,0,10,0,9,0,6,0,3,0],
       [0,0,0,10,0,9,6,0,3,0],
       [0,0,0,0,10,0,0,0,3,0],
       [0,0,0,0,0,0,0,0,3,0],
       [2,2,2,2,0,0,0,0,3,0]];


//Lendo a matriz
for(linha = 0; linha < 10; linha++)
{   
    tr = document.createElement("tr");
    for(coluna = 0; coluna < 10; coluna++)
    {
        td = document.createElement("td");

        if(sim[linha][coluna] == 1)
        {
            td.style.background = "red";
            td.append(matriz[linha][coluna]);
            tr.append(td);
        }
        else if(sim[linha][coluna] == 2)
        {
            td.style.background = "#8a00d4";
            td.append(matriz[linha][coluna]);
            tr.append(td);
        }
        else if(sim[linha][coluna] == 3)
        {
            td.style.background = "#d527b7";
            td.append(matriz[linha][coluna]);
            tr.append(td);
        }
        else if(sim[linha][coluna] == 4)
        {
            td.style.background = "#f9c46b";
            td.append(matriz[linha][coluna]);
            tr.append(td);
        }
        else if(sim[linha][coluna] == 5)
        {
            td.style.background = "#454d66";
            td.append(matriz[linha][coluna]);
            tr.append(td);
        }
        else if(sim[linha][coluna] == 6)
        {
            td.style.background = "#58b368";
            td.append(matriz[linha][coluna]);
            tr.append(td);
        }
        else if(sim[linha][coluna] == 7)
        {
            td.style.background = "#343090";
            td.append(matriz[linha][coluna]);
            tr.append(td);
        }
        else if(sim[linha][coluna] == 8)
        {
            td.style.background = "#ffff00";
            td.style.color = "black";
            td.append(matriz[linha][coluna]);
            tr.append(td);
        }
        else if(sim[linha][coluna] == 9)
        {
            td.style.background = "#99ff00";
            td.append(matriz[linha][coluna]);
            tr.append(td);
        }
        else if(sim[linha][coluna] == 10)
        {
            td.style.background = "#ffcc00";
            td.append(matriz[linha][coluna]);
            tr.append(td);
        }
        else
        {
            td.append(matriz[linha][coluna]);
            tr.append(td);
        }
    }

    tabela.appendChild(tr);
}

switch(sim[linha][coluna])
{
    case 1:
        td.style.background = "red";
        td.append(matriz[linha][coluna]);
        tr.append(td);
    break;

    case 2:
        td.style.background = "#8a00d4";
        td.append(matriz[linha][coluna]);
        tr.append(td);
    break;

    case 3:
        td.style.background = "#d527b7";
        td.append(matriz[linha][coluna]);
        tr.append(td);
    break;

    case 4:
        td.style.background = "#f9c46b";
        td.append(matriz[linha][coluna]);
        tr.append(td);
    break;

    case 5:
        td.style.background = "#454d66";
        td.append(matriz[linha][coluna]);
        tr.append(td);
    break;

    case 6:
        td.style.background = "#58b368";
        td.append(matriz[linha][coluna]);
        tr.append(td);
    break;

    case 7:
        td.style.background = "#343090";
        td.append(matriz[linha][coluna]);
        tr.append(td);
    break;

    case 8:
        td.style.background = "#ffff00";
        td.style.color = "black";
        td.append(matriz[linha][coluna]);
        tr.append(td);
    break;

    case 9:
        td.style.background = "#99ff00";
        td.append(matriz[linha][coluna]);
        tr.append(td);
    break;

    case 10:
        td.style.background = "#ffcc00";
        td.append(matriz[linha][coluna]);
        tr.append(td);
    break;

    default:
        td.append(matriz[linha][coluna]);
        tr.append(td);
        break 
}
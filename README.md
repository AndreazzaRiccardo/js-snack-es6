### ESERCIZIO:

Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
Snack2
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
Snack Bonus
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
Usiamo i nuovi metodi degli array foreach o filter.

### SNACK 1 

**DATI:**

1. Creo un'array di oggetti (bici) con le proprietà nome e peso;

**LOGICA:**

1. Destrutturo l'array;
2. Individuo la bici con il peso minore;
3. Con un ciclo FOR IN prendo tutti i valori dell'oggetto bici individuato e li stampo a schermo;

### SNACK 2

**DATI:**

1. Creo un'array di ogetti (teams) con le proprietà nome, puntiFatti e falliSubiti;

**LOGICA:**

1. Creo una funzione per generare numeri random;
2. Creo una variabile array da riempire con il mio nuovo array;
3. Con un ciclo forEach prendo singolarmente ogni oggetto e sostituisco puntiFatti e falliSubiti con numero random invocando la mia funzione;
4. Sempre all'interno del ciclo vado a destrutturare ogni oggetto team in modo da avere solo i valori nome e falliSubiti da pushare in un nuovo oggetto, all'interno del mio array vuoto;
5. Faccio consol log di ogni singolo team all'interno del ciclo for e del nuovo array creato;

### SNACK 3

**DATI:**

1. Creo un'array per testare la mia funzione;

**LOGICA:**

1. Creo una funzione che prenda come input 3 parametri, il primo sarà un array, mentre il secondo e il terzo saranno numeri:

    -Creo una variabile array vuota;
    -Con un ciclo forEach scorro l'array inserito nei parametri di funzione;
    -Gli dico che:
        SE l'indice dell'elemento che sto scorrendo è maggiore o uguale al primo numero dei parametri E minore o uguale del secondo:
        allora pushalo nella mia variabile array;
    -Ritorno il mio nuovo array cosi creato;


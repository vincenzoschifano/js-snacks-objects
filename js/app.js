//Snack 3

const animali = 
[
    { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
    { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
    { nome: 'cavallo', famiglia: 'equidi', classe: 'mammiferi'},
    { nome: 'pavone', famiglia: 'fasianidi', classe: 'uccelli'}

  ]
  console.log(animali)

  const mammiferi = []

  for (let i = 0; i < animali.length; i++ ) {
    let animaleCorrente = animali[i] 
    //console.log(animaleCorrente)

    const classe = animaleCorrente.classe

    if(classe === 'mammiferi') {

        mammiferi.push(animaleCorrente)
    }
 }

 console.log(mammiferi)

 //Snack 4 


const persone = 
[

    { name: 'Giovanni', surname: 'Storti', age:25 },
    { name: 'Aldo', surname: 'Baglio', age: 38},
    { name: 'Giacomo', surname: 'Poretti', age: 16 },
    { name: 'Pablo', surname: 'Picasso', age: 18},
    { name: 'Lucio', surname: 'Fontana', age: 14 },
    { name: 'Giuseppe', surname: 'Ungaretti', age: 12}

]
 
const welcome = []

for(let i = 0; i < persone.length; i++ ) {

   let personaCorrente = persone[i]
   console.log(personaCorrente)
   
   let ability = personaCorrente.age

   if(ability >= 18)

    welcome.push('Benvenuto' + ' ' + personaCorrente.name + ' ' + personaCorrente.surname + ', Sei maggiorenne! Tu puoi guidare')

    else

    welcome.push('Benvenuto' + ' ' + personaCorrente.name + ' ' + personaCorrente.surname + ', Sei troppo piccolo per poter guidare' )

}

console.log(welcome)




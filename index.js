//EJERCICIOS RESUELTOS//

//1//


[
    {
      "nombre": "Francisco Ramirez",
      "edad": 29,
      "puesto": "Contable",
      "Emails": [
        "francisco@gmail.com",
        "francisco@hotmail.es",
        "francisco@thebridgeschool.es"
      ]
    },
    {
        "nombre": "Isabel Pérez",
        "edad": 31,
        "puesto": "Profesora",
        "Emails": [
          "isabel@gmail.com",
          "isabel@hotmail.es",
          "isabel@thebridgeschool.es"
        ]
      }
  ]

 const contacto = JSON.parse('{"nombre": "Isabel Pérez","edad": 31,"puesto": "Profesora","Emails": ["isabel@gmail.com","isabel@hotmail.es","isabel@thebridgeschool.es"]}');

  console.log(contacto.Emails[0]);

  //2//

  let a = `{
    "localidade 1": {
    "Continente": "África",
    "País": "Angola",
    "Capital": "Luanda"
    },
    "localidade 2": {
    "Continente": "América do Norte",
    "País": "Estados Unidos",
    "Capital": "Washington DC"
    },
    "localidade 3": {
    "Continente": "América Central",
    "País": "México",
    "Capital": "Cidade do México"
    },
    "localidade 4": {
    "Continente": "América do Sul",
    "País": "Brasil",
    "Capital": "Brasília"
    },
    "localidade 5": {
    "Continente": "Europa",
    "País": "Espanha",
    "Capital": "Madri"
    },
    "localidade 6": {
    "Continente": "Europa",
    "País": "Alemanha",
    "Capital": "Berlim"
    },
    "localidade 7": {
    "Continente": "Oceania",
    "País": "Austrália",
    "Capital": "Camberra"
    },
    "localidade 8": {
    "Continente": "Ásia",
    "País": "Japão",
    "Capital": "Tóquio"
    }
}`

const localidades = JSON.parse(a)

const localidad8 = localidades['localidade 8'].País

 localidades["localidade 9"] = { "Continente": "Europa",
 "País": "España",
 "Capital": "Madrid"} 



 localidades["localidade 4"] = {
    "Continente": "América do Sul",
    "País": "Brasil",
    "Capital": "Brasília",
    "Habitantes": "20.000"}


    let paises = {}

    for(let localidad in localidades){
        paises[localidades[localidad].País] = {
            'Continente': localidades[localidad].Continente,
            'Capital': localidades[localidad].Capital
        }
    }
    
    a = paises
    
    console.log(a)

  //3//

  const desayunos = `{
    "Gofres Belgas": {"Precio": "5.95€", "Descripcion": " ", "Calorias": "650"},
    "Gofres Belgas con fresas": {"Precio": "7.95€", "Descripcion": " ", "Calorias": "900"},
    "Gofres Belgas con frutas del bosque": {"Precio": "8.95€", "Descripcion": " ", "Calorias": "900"},
    "Tostada francesa": {"Precio": "4.50€", "Descripcion": " ", "Calorias": "600"},
    "Desayuno de la casa": {"Precio": "6.95€", "Descripcion": " ", "Calorias": "950"}
  }`

  const desayuno = JSON.parse(desayunos)
  console.log(desayuno)
  
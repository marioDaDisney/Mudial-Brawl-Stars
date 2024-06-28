const { posix } = require('path')
const readline = require('readline')

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

let equipes = []
let partidas = []
let randomNumber
let tmp

let tribe = ({
    equipe: "Tribe",
    jogador1: "Ezlivi", 
    jogador2: "Zoulan",
    jogador3: "TyranStar",
})
equipes.push(tribe)

let Navi = {
    equipe: "Navi",
    jogador1: "Sizuku", 
    jogador2: "Achapi",
    jogador3: "Levi",
}
equipes.push(Navi)

let Zeta = {
    equipe: "Zeta",
    jogador1: "Nowy297", 
    jogador2: "GeRo",
    jogador3: "MeOw",
}
equipes.push(Zeta)

let Totem = {
    equipe: "Totem",
    jogador1: "OscarDC", 
    jogador2: "IKaoss",
    jogador3: "Maru",
}
equipes.push(Totem)

let SKGaming = {
    equipe: "SK Gaming",
    jogador1: "Asta", 
    jogador2: "Kiwii",
    jogador3: "Pedro Guijarro",
}
equipes.push(SKGaming)

let Queso = {
    equipe: "Queso",
    jogador1: "Boss", 
    jogador2: "Rhz",
    jogador3: "Jxcr",
}
equipes.push(Queso)

campeonato()

function campeonato() {
    console.log (`
    1. Equipes participantes
    2. Jogadores e suas estatísticas  
    3. Resultado das partidas
    4. Brawlers mais usados no mundial
    5. Estatistícas de cada brawler
    6. Sair
    ${equipes}
    `)

    rl.question('Escolha uma opção: ', (opcao) => {
        switch (opcao) {
            case '1':
                listaequipes()
                break
            case '2':
                jogadoresStats()
                break
            case '3':
                resultado()
                break
            case '4':
                topbrawlers()
                break
            case '5':
                brawlers()
                break
            case '6':
                rl.close()
                break
            default:
                console.log('Opção inválida, tente novamente.')
				campeonato()
				break
        }
    })
}

function cadastrar() {

    rl.question('Digite o nome da equipe: ', (Nequipe) => {
		rl.question('Digite o nome do primeiro jogador: ', (jogador1) => {
			rl.question('Digite o nome do segundo jogador: ', (jogador2) => {
                rl.question('Digite o nome do terceiro jogador: ', (jogador3) => {
                    equipes.push({ equipe: Nequipe, jogador1: jogador1, jogador2: jogador2, jogador3: jogador3})
                    campeonato()
                    
                })
			})
		})
	})
}

function listaequipes() {

    if (equipes == 0) {
        console.log("Não á equipes listados!")
    } else {
        equipes.forEach((equipe,i)=>{
            console.log(`Equipe ${equipes[i].equipe}
            Jogadores: ${equipes[i].jogador1}, ${equipes[i].jogador2}, ${equipes[i].jogador3}
            `)
        })
        }
       campeonato()

}

function resultado() {
    for(let i = 0; i < equipes.length;i++){
        randomNumber= Math.random()*i-- |0
        tmp = equipes[randomNumber]
        equipes[randomNumber] = equipes[i]
        equipes[i] = tmp
    }
    campeonato()
}

function brawlers() {
    console.log (`
    1. Shelly
    2. Nita
    3. Colt
    4. Bull
    5. Brock
    6. El Primo
    7. Barley
    8. Poco
    9. Rosa
    10. Jessie
    11. Dynamike
    12. Tick
    13. 8-Bit
    14. Rico
    15. Darryl
    16. Penny
    17. Carl
    18. Jacky
    19. Gus
    20. Bo
    21. Emz
    22. Stu
    23. Piper
    24. Pam
    25. Frank
    26. Bibi
    27. Bea
    28. Nani
    29. Edgar
    30. Griff
    31. Grom
    32. Bonnie
    33. Gale
    34. Colette
    35. Belle
    36. Ash
    37. Lola
    38. Sam
    39. Mandy
    40. Maisie
    41. Hank
    42. Pearl
    43. Larry e Lawrie
    44. Angelo
    45. Mortis
    46. Tara
    47. Eugênio
    48. Max
    49. Mister P
    50. Sprout
    51. Byron
    52. Squeak
    53. Lou
    54. Ruffs
    55. Buzz
    56. Fang
    57. Eve
    58. Janet
    59. Otis
    60. Buster
    61. Gray
    62. R-T
    63. Willow
    64. Doug
    65. Chuck
    66. Charlie
    67. Mico
    68. Melodie
    69. Lily
    70. Spike
    71. Crow
    72. Leon
    73. Sandy
    74. Amber
    75. Meg
    76. Surge
    77. Chester
    78. Cordelius
    79. Kit
    80. Draco
    `)
    
    rl.question('Escolha um Brawler saber suas informações: ', (opcao) => {
        switch (opcao) {
            case '1':
                shelly()
                break
            case '2':
                nita()
                break
            case '3':
                colt()
                break
            case '4':
                bull()
                break
            case '5':
                brock()
                break
            case '6':
                elprimo()
                break
            case '7':
                barley()
                break
            case '8':
                poco()
                break
            case '9':
                rosa()
                break 
            case '10':
                jessie()
                break
            case '11':
                dynamike()
                break  
            case '12':
                tick()
                break
            case '13':
                bit()
                break
            case '14':
                rico()
                break
            case '15':
                darryl()
                break
            case '16':
                penny()
                break
            case '17':
                carl()
                break
            case '18':
                jacky()
                break
            case '19':
                gus()
                break
            case '20':
                bo()
                break
            case '21':
                emz()
                break
            case '22':
                stu()
                break
            case '23':
                piper()
                break
            case '24':
                pam()
                break
            case '25':
                frank()
                break
            case '26':
                bibi()
                break
            case '27':
                bea()
                break
            case '28':
                nani()
                break
            case '29':
                edgar()
                break
            case '30':
                griff()
                break
            case '31':
                grom()
                break
            case '32':
                bonnie()
                break
            case '33':
                gale()
                break
            case '34':
                colette()
                break
            case '35':
                belle()
                break
            case '36':
                ash()
                break
            case '37':
                lola()
                break
            case '38':
                sam()
                break
            case '39':
                mandy()
                break
            case '40':
                maisie()
                break
            case '41':
                hank()
                break
            case '42':
                pearl()
                break
            case '43':
                larryelawrie()
                break
            case '44':
                angelo()
                break
            case '45':
                mortis()
                break
            case '46':
                tara()
                break
            case '47':
                eugenio()
                break
            case '48':
                max()
                break
            case '49':
                misterp()
                break
            case '50':
                sprout()
                break
            case '51':
                byron()
                break
            case '52':
                squeak()
                break
            case '53':
                lou()
                break
            case '54':
                ruffs()
                break
            case '55':
                buzz()
                break
            case '56':
                fang()
                break
            case '57':
                eve()
                break
            case '58':
                janet()
                break
            case '59':
                otis()
                break
            case '60':
                buster()
                break
            case '61':
                gray()
                break
            case '62':
                rt()
                break
            case '63':
                willow()
                break
            case '64':
                doug()
                break
            case '65':
                chuck()
                break
            case '66':
                charlie()
                break
            case '67':
                mico()
                break
            case '68':
                melodie()
                break
            case '69':
                lily()
                break
            case '70':
                spike()
                break
            case '71':
                crow()
                break
            case '72':
                leon()
                break
            case '73':
                sandy()
                break
            case '74':
                amber()
                break
            case '75':
                meg()
                break
            case '76':
                surge()
                break
            case '77':
                chester()
                break
            case '78':
                cordelius()
                break
            case '79':
                kit()
                break
            case '80':
                draco()
                break
            case '81':
                campeonato()
                break
            default:
                console.log('Opção inválida, tente novamente.')
				brawlers()
				break
        }
    })

}

function shelly() {
    console.log(`Nome: Shelly
    Raridade: Inicial
    Classe: Destruidora
    Velocida de Movimento: Rápido
    Dano: 5 X 600
    Vida: 7400
    Dano da Super: 9 X 640
    Poder de Estrela: Xeque-Mate | Tônico Revigorante
    Acessório: Fisgador | Pombos de Argila
    HiperCarga: Cano Duplo
    `)
}

function nita() {
    console.log(`Nome: Nita
    Raridade: Raro
    Classe: Destruidora
    Velocida de Movimento: Normal
    Dano: 1920
    Vida: 8000
    Dano da Super: 800
    Poder de Estrela: Amigo-Urso | Urso Hinperativo
    Acessório: Garra de Urso | Pele Protetora
    HiperCarga: Hiper Urso
    `)
}

function colt() {
    console.log(`Nome: Colt
    Raridade: Raro
    Classe: Destruidor
    Velocida de Movimento: Normal
    Dano: 720 x 6
    Vida: 5600
    Dano da Super: 640 x 12
    Poder de Estrela: Botas estilosas | Magnum Especial
    Acessório: Recarga Rápida | Bala de Prata
    HiperCarga: Empunhadura Dupla
    `)
}

function shelly() {
    console.log(`Nome: 
    Raridade:
    Classe:
    Velocida de Movimento:
    Dano:
    Vida:
    Dano da Super:
    Poder de Estrela:
    Acessório:
    HiperCarga:
    `)
}

function shelly() {
    console.log(`Nome: 
    Raridade:
    Classe:
    Velocida de Movimento:
    Dano:
    Vida:
    Dano da Super:
    Poder de Estrela:
    Acessório:
    HiperCarga:
    `)
}

function shelly() {
    console.log(`Nome: 
    Raridade:
    Classe:
    Velocida de Movimento:
    Dano:
    Vida:
    Dano da Super:
    Poder de Estrela:
    Acessório:
    HiperCarga:
    `)
}

function shelly() {
    console.log(`Nome: 
    Raridade:
    Classe:
    Velocida de Movimento:
    Dano:
    Vida:
    Dano da Super:
    Poder de Estrela:
    Acessório:
    HiperCarga:
    `)
}

function shelly() {
    console.log(`Nome: 
    Raridade:
    Classe:
    Velocida de Movimento:
    Dano:
    Vida:
    Dano da Super:
    Poder de Estrela:
    Acessório:
    HiperCarga:
    `)
}

function shelly() {
    console.log(`Nome: 
    Raridade:
    Classe:
    Velocida de Movimento:
    Dano:
    Vida:
    Dano da Super:
    Poder de Estrela:
    Acessório:
    HiperCarga:
    `)
}

function shelly() {
    console.log(`Nome: 
    Raridade:
    Classe:
    Velocida de Movimento:
    Dano:
    Vida:
    Dano da Super:
    Poder de Estrela:
    Acessório:
    HiperCarga:
    `)
}

function shelly() {
    console.log(`Nome: 
    Raridade:
    Classe:
    Velocida de Movimento:
    Dano:
    Vida:
    Dano da Super:
    Poder de Estrela:
    Acessório:
    HiperCarga:
    `)
}

function shelly() {
    console.log(`Nome: 
    Raridade:
    Classe:
    Velocida de Movimento:
    Dano:
    Vida:
    Dano da Super:
    Poder de Estrela:
    Acessório:
    HiperCarga:
    `)
}

function shelly() {
    console.log(`Nome: 
    Raridade:
    Classe:
    Velocida de Movimento:
    Dano:
    Vida:
    Dano da Super:
    Poder de Estrela:
    Acessório:
    HiperCarga:
    `)
}

function shelly() {
    console.log(`Nome: 
    Raridade:
    Classe:
    Velocida de Movimento:
    Dano:
    Vida:
    Dano da Super:
    Poder de Estrela:
    Acessório:
    HiperCarga:
    `)
}

function shelly() {
    console.log(`Nome: 
    Raridade:
    Classe:
    Velocida de Movimento:
    Dano:
    Vida:
    Dano da Super:
    Poder de Estrela:
    Acessório:
    HiperCarga:
    `)
}

function shelly() {
    console.log(`Nome: 
    Raridade:
    Classe:
    Velocida de Movimento:
    Dano:
    Vida:
    Dano da Super:
    Poder de Estrela:
    Acessório:
    HiperCarga:
    `)
}

function shelly() {
    console.log(`Nome: 
    Raridade:
    Classe:
    Velocida de Movimento:
    Dano:
    Vida:
    Dano da Super:
    Poder de Estrela:
    Acessório:
    HiperCarga:
    `)
}

function shelly() {
    console.log(`Nome: 
    Raridade:
    Classe:
    Velocida de Movimento:
    Dano:
    Vida:
    Dano da Super:
    Poder de Estrela:
    Acessório:
    HiperCarga:
    `)
}

function shelly() {
    console.log(`Nome: 
    Raridade:
    Classe:
    Velocida de Movimento:
    Dano:
    Vida:
    Dano da Super:
    Poder de Estrela:
    Acessório:
    HiperCarga:
    `)
}

function shelly() {
    console.log(`Nome: 
    Raridade:
    Classe:
    Velocida de Movimento:
    Dano:
    Vida:
    Dano da Super:
    Poder de Estrela:
    Acessório:
    HiperCarga:
    `)
}

function shelly() {
    console.log(`Nome: 
    Raridade:
    Classe:
    Velocida de Movimento:
    Dano:
    Vida:
    Dano da Super:
    Poder de Estrela:
    Acessório:
    HiperCarga:
    `)
}

function shelly() {
    console.log(`Nome: 
    Raridade:
    Classe:
    Velocida de Movimento:
    Dano:
    Vida:
    Dano da Super:
    Poder de Estrela:
    Acessório:
    HiperCarga:
    `)
}

function shelly() {
    console.log(`Nome: 
    Raridade:
    Classe:
    Velocida de Movimento:
    Dano:
    Vida:
    Dano da Super:
    Poder de Estrela:
    Acessório:
    HiperCarga:
    `)
}

function shelly() {
    console.log(`Nome: 
    Raridade:
    Classe:
    Velocida de Movimento:
    Dano:
    Vida:
    Dano da Super:
    Poder de Estrela:
    Acessório:
    HiperCarga:
    `)
}

function shelly() {
    console.log(`Nome: 
    Raridade:
    Classe:
    Velocida de Movimento:
    Dano:
    Vida:
    Dano da Super:
    Poder de Estrela:
    Acessório:
    HiperCarga:
    `)
}

function shelly() {
    console.log(`Nome: 
    Raridade:
    Classe:
    Velocida de Movimento:
    Dano:
    Vida:
    Dano da Super:
    Poder de Estrela:
    Acessório:
    HiperCarga:
    `)
}

function shelly() {
    console.log(`Nome: 
    Raridade:
    Classe:
    Velocida de Movimento:
    Dano:
    Vida:
    Dano da Super:
    Poder de Estrela:
    Acessório:
    HiperCarga:
    `)
}

function shelly() {
    console.log(`Nome: 
    Raridade:
    Classe:
    Velocida de Movimento:
    Dano:
    Vida:
    Dano da Super:
    Poder de Estrela:
    Acessório:
    HiperCarga:
    `)
}

function shelly() {
    console.log(`Nome: 
    Raridade:
    Classe:
    Velocida de Movimento:
    Dano:
    Vida:
    Dano da Super:
    Poder de Estrela:
    Acessório:
    HiperCarga:
    `)
}

function shelly() {
    console.log(`Nome: 
    Raridade:
    Classe:
    Velocida de Movimento:
    Dano:
    Vida:
    Dano da Super:
    Poder de Estrela:
    Acessório:
    HiperCarga:
    `)
}

function shelly() {
    console.log(`Nome: 
    Raridade:
    Classe:
    Velocida de Movimento:
    Dano:
    Vida:
    Dano da Super:
    Poder de Estrela:
    Acessório:
    HiperCarga:
    `)
}

function shelly() {
    console.log(`Nome: 
    Raridade:
    Classe:
    Velocida de Movimento:
    Dano:
    Vida:
    Dano da Super:
    Poder de Estrela:
    Acessório:
    HiperCarga:
    `)
}

function shelly() {
    console.log(`Nome: 
    Raridade:
    Classe:
    Velocida de Movimento:
    Dano:
    Vida:
    Dano da Super:
    Poder de Estrela:
    Acessório:
    HiperCarga:
    `)
}

function shelly() {
    console.log(`Nome: 
    Raridade:
    Classe:
    Velocida de Movimento:
    Dano:
    Vida:
    Dano da Super:
    Poder de Estrela:
    Acessório:
    HiperCarga:
    `)
}

function shelly() {
    console.log(`Nome: 
    Raridade:
    Classe:
    Velocida de Movimento:
    Dano:
    Vida:
    Dano da Super:
    Poder de Estrela:
    Acessório:
    HiperCarga:
    `)
}

function shelly() {
    console.log(`Nome: 
    Raridade:
    Classe:
    Velocida de Movimento:
    Dano:
    Vida:
    Dano da Super:
    Poder de Estrela:
    Acessório:
    HiperCarga:
    `)
}

function shelly() {
    console.log(`Nome: 
    Raridade:
    Classe:
    Velocida de Movimento:
    Dano:
    Vida:
    Dano da Super:
    Poder de Estrela:
    Acessório:
    HiperCarga:
    `)
}

function shelly() {
    console.log(`Nome: 
    Raridade:
    Classe:
    Velocida de Movimento:
    Dano:
    Vida:
    Dano da Super:
    Poder de Estrela:
    Acessório:
    HiperCarga:
    `)
}

function shelly() {
    console.log(`Nome: 
    Raridade:
    Classe:
    Velocida de Movimento:
    Dano:
    Vida:
    Dano da Super:
    Poder de Estrela:
    Acessório:
    HiperCarga:
    `)
}

function shelly() {
    console.log(`Nome: 
    Raridade:
    Classe:
    Velocida de Movimento:
    Dano:
    Vida:
    Dano da Super:
    Poder de Estrela:
    Acessório:
    HiperCarga:
    `)
}

function shelly() {
    console.log(`Nome: 
    Raridade:
    Classe:
    Velocida de Movimento:
    Dano:
    Vida:
    Dano da Super:
    Poder de Estrela:
    Acessório:
    HiperCarga:
    `)
}

function shelly() {
    console.log(`Nome: 
    Raridade:
    Classe:
    Velocida de Movimento:
    Dano:
    Vida:
    Dano da Super:
    Poder de Estrela:
    Acessório:
    HiperCarga:
    `)
}

function shelly() {
    console.log(`Nome: 
    Raridade:
    Classe:
    Velocida de Movimento:
    Dano:
    Vida:
    Dano da Super:
    Poder de Estrela:
    Acessório:
    HiperCarga:
    `)
}

function shelly() {
    console.log(`Nome: 
    Raridade:
    Classe:
    Velocida de Movimento:
    Dano:
    Vida:
    Dano da Super:
    Poder de Estrela:
    Acessório:
    HiperCarga:
    `)
}

function shelly() {
    console.log(`Nome: 
    Raridade:
    Classe:
    Velocida de Movimento:
    Dano:
    Vida:
    Dano da Super:
    Poder de Estrela:
    Acessório:
    HiperCarga:
    `)
}

function shelly() {
    console.log(`Nome: 
    Raridade:
    Classe:
    Velocida de Movimento:
    Dano:
    Vida:
    Dano da Super:
    Poder de Estrela:
    Acessório:
    HiperCarga:
    `)
}

function shelly() {
    console.log(`Nome: 
    Raridade:
    Classe:
    Velocida de Movimento:
    Dano:
    Vida:
    Dano da Super:
    Poder de Estrela:
    Acessório:
    HiperCarga:
    `)
}

function shelly() {
    console.log(`Nome: 
    Raridade:
    Classe:
    Velocida de Movimento:
    Dano:
    Vida:
    Dano da Super:
    Poder de Estrela:
    Acessório:
    HiperCarga:
    `)
}

function shelly() {
    console.log(`Nome: 
    Raridade:
    Classe:
    Velocida de Movimento:
    Dano:
    Vida:
    Dano da Super:
    Poder de Estrela:
    Acessório:
    HiperCarga:
    `)
}

function shelly() {
    console.log(`Nome: 
    Raridade:
    Classe:
    Velocida de Movimento:
    Dano:
    Vida:
    Dano da Super:
    Poder de Estrela:
    Acessório:
    HiperCarga:
    `)
}

function shelly() {
    console.log(`Nome: 
    Raridade:
    Classe:
    Velocida de Movimento:
    Dano:
    Vida:
    Dano da Super:
    Poder de Estrela:
    Acessório:
    HiperCarga:
    `)
}

function shelly() {
    console.log(`Nome: 
    Raridade:
    Classe:
    Velocida de Movimento:
    Dano:
    Vida:
    Dano da Super:
    Poder de Estrela:
    Acessório:
    HiperCarga:
    `)
}

function shelly() {
    console.log(`Nome: 
    Raridade:
    Classe:
    Velocida de Movimento:
    Dano:
    Vida:
    Dano da Super:
    Poder de Estrela:
    Acessório:
    HiperCarga:
    `)
}

function shelly() {
    console.log(`Nome: 
    Raridade:
    Classe:
    Velocida de Movimento:
    Dano:
    Vida:
    Dano da Super:
    Poder de Estrela:
    Acessório:
    HiperCarga:
    `)
}

function shelly() {
    console.log(`Nome: 
    Raridade:
    Classe:
    Velocida de Movimento:
    Dano:
    Vida:
    Dano da Super:
    Poder de Estrela:
    Acessório:
    HiperCarga:
    `)
}

function shelly() {
    console.log(`Nome: 
    Raridade:
    Classe:
    Velocida de Movimento:
    Dano:
    Vida:
    Dano da Super:
    Poder de Estrela:
    Acessório:
    HiperCarga:
    `)
}

function shelly() {
    console.log(`Nome: 
    Raridade:
    Classe:
    Velocida de Movimento:
    Dano:
    Vida:
    Dano da Super:
    Poder de Estrela:
    Acessório:
    HiperCarga:
    `)
}

function shelly() {
    console.log(`Nome: 
    Raridade:
    Classe:
    Velocida de Movimento:
    Dano:
    Vida:
    Dano da Super:
    Poder de Estrela:
    Acessório:
    HiperCarga:
    `)
}

function shelly() {
    console.log(`Nome: 
    Raridade:
    Classe:
    Velocida de Movimento:
    Dano:
    Vida:
    Dano da Super:
    Poder de Estrela:
    Acessório:
    HiperCarga:
    `)
}

function shelly() {
    console.log(`Nome: 
    Raridade:
    Classe:
    Velocida de Movimento:
    Dano:
    Vida:
    Dano da Super:
    Poder de Estrela:
    Acessório:
    HiperCarga:
    `)
}

function shelly() {
    console.log(`Nome: 
    Raridade:
    Classe:
    Velocida de Movimento:
    Dano:
    Vida:
    Dano da Super:
    Poder de Estrela:
    Acessório:
    HiperCarga:
    `)
}

function shelly() {
    console.log(`Nome: 
    Raridade:
    Classe:
    Velocida de Movimento:
    Dano:
    Vida:
    Dano da Super:
    Poder de Estrela:
    Acessório:
    HiperCarga:
    `)
}

function shelly() {
    console.log(`Nome: 
    Raridade:
    Classe:
    Velocida de Movimento:
    Dano:
    Vida:
    Dano da Super:
    Poder de Estrela:
    Acessório:
    HiperCarga:
    `)
}

function shelly() {
    console.log(`Nome: 
    Raridade:
    Classe:
    Velocida de Movimento:
    Dano:
    Vida:
    Dano da Super:
    Poder de Estrela:
    Acessório:
    HiperCarga:
    `)
}

function shelly() {
    console.log(`Nome: 
    Raridade:
    Classe:
    Velocida de Movimento:
    Dano:
    Vida:
    Dano da Super:
    Poder de Estrela:
    Acessório:
    HiperCarga:
    `)
}

function shelly() {
    console.log(`Nome: 
    Raridade:
    Classe:
    Velocida de Movimento:
    Dano:
    Vida:
    Dano da Super:
    Poder de Estrela:
    Acessório:
    HiperCarga:
    `)
}

function shelly() {
    console.log(`Nome: 
    Raridade:
    Classe:
    Velocida de Movimento:
    Dano:
    Vida:
    Dano da Super:
    Poder de Estrela:
    Acessório:
    HiperCarga:
    `)
}

function shelly() {
    console.log(`Nome: 
    Raridade:
    Classe:
    Velocida de Movimento:
    Dano:
    Vida:
    Dano da Super:
    Poder de Estrela:
    Acessório:
    HiperCarga:
    `)
}

function shelly() {
    console.log(`Nome: 
    Raridade:
    Classe:
    Velocida de Movimento:
    Dano:
    Vida:
    Dano da Super:
    Poder de Estrela:
    Acessório:
    HiperCarga:
    `)
}

function shelly() {
    console.log(`Nome: 
    Raridade:
    Classe:
    Velocida de Movimento:
    Dano:
    Vida:
    Dano da Super:
    Poder de Estrela:
    Acessório:
    HiperCarga:
    `)
}

function shelly() {
    console.log(`Nome: 
    Raridade:
    Classe:
    Velocida de Movimento:
    Dano:
    Vida:
    Dano da Super:
    Poder de Estrela:
    Acessório:
    HiperCarga:
    `)
}

function shelly() {
    console.log(`Nome: 
    Raridade:
    Classe:
    Velocida de Movimento:
    Dano:
    Vida:
    Dano da Super:
    Poder de Estrela:
    Acessório:
    HiperCarga:
    `)
}

function shelly() {
    console.log(`Nome: 
    Raridade:
    Classe:
    Velocida de Movimento:
    Dano:
    Vida:
    Dano da Super:
    Poder de Estrela:
    Acessório:
    HiperCarga:
    `)
}

function shelly() {
    console.log(`Nome: 
    Raridade:
    Classe:
    Velocida de Movimento:
    Dano:
    Vida:
    Dano da Super:
    Poder de Estrela:
    Acessório:
    HiperCarga:
    `)
}

function shelly() {
    console.log(`Nome: 
    Raridade:
    Classe:
    Velocida de Movimento:
    Dano:
    Vida:
    Dano da Super:
    Poder de Estrela:
    Acessório:
    HiperCarga:
    `)
}

function shelly() {
    console.log(`Nome: 
    Raridade:
    Classe:
    Velocida de Movimento:
    Dano:
    Vida:
    Dano da Super:
    Poder de Estrela:
    Acessório:
    HiperCarga:
    `)
}

function shelly() {
    console.log(`Nome: 
    Raridade:
    Classe:
    Velocida de Movimento:
    Dano:
    Vida:
    Dano da Super:
    Poder de Estrela:
    Acessório:
    HiperCarga:
    `)
}

function shelly() {
    console.log(`Nome: 
    Raridade:
    Classe:
    Velocida de Movimento:
    Dano:
    Vida:
    Dano da Super:
    Poder de Estrela:
    Acessório:
    HiperCarga:
    `)
}

function shelly() {
    console.log(`Nome: 
    Raridade:
    Classe:
    Velocida de Movimento:
    Dano:
    Vida:
    Dano da Super:
    Poder de Estrela:
    Acessório:
    HiperCarga:
    `)
}

function shelly() {
    console.log(`Nome: 
    Raridade:
    Classe:
    Velocida de Movimento:
    Dano:
    Vida:
    Dano da Super:
    Poder de Estrela:
    Acessório:
    HiperCarga:
    `)
}
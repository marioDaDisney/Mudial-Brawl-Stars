const readline = require('readline')

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

let equipes = []
let partidas = []

campeonato()

function campeonato() {
    console.log (`
    1. Cadastre sua propria equipe
    2. Equipes participantes
    3. Jogadores e suas estatísticas 
    4. Remova sua equipe 
    5. Resultado das partidas
    6. Brawlers mais usados no mundial
    7. Estatistícas de cada brawler
    8. Sair `)

    rl.question('Escolha uma opção: ', (opcao) => {
        switch (opcao) {
            case '1':
                cadastrar()
                break
            case '2':
                listaequipes()
                break
            case '3':
                jogadoresStats()
                break
            case '4':

                break
            case '5':
                resultado()
                break
            case '6':
                topbrawlers()
                break
            case '7':
                brawlers()
                break
            case '8':
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
                   equipes.push({ equipe: Nequipe, jogador1: jogador1, jogador2: jogador2, jogador3: jogador3 })
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
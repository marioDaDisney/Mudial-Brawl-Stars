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
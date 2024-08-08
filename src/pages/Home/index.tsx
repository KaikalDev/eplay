import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import Game from '../../models/Games'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import starWars from '../../assets/images/star_wars.png'
import zelda from '../../assets/images/zelda.png'
import fifa from '../../assets/images/FIFA.png'
import StreetFighter from '../../assets/images/Street_Fighter.png'

const promocoes: Game[] = [
  {
    category: 'Ação',
    descreption:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    image: resident,
    infos: ['10%', 'R$250,00'],
    system: 'Windows',
    title: 'Resident Evil 4',
    id: 1
  },
  {
    category: 'Ação',
    descreption:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    image: resident,
    infos: ['5%', 'R$290,00'],
    system: 'PS4',
    title: 'Resident Evil 4',
    id: 2
  },
  {
    category: 'Esporte',
    descreption:
      'EA SPORTS™ FIFA 23 traz o Jogo de Todo Mundo aos gramados com a tecnologia HyperMotion2...',
    image: fifa,
    infos: ['50%', 'R$99,00'],
    system: 'Windows',
    title: 'Resident Evil 4',
    id: 3
  },
  {
    category: 'Esporte',
    descreption:
      'EA SPORTS™ FIFA 23 traz o Jogo de Todo Mundo aos gramados com a tecnologia HyperMotion2...',
    image: fifa,
    infos: ['10%', 'R$180,00'],
    system: 'PS5',
    title: 'Resident Evil 4',
    id: 4
  }
]

const emBreve: Game[] = [
  {
    category: 'RPG',
    descreption:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    image: diablo,
    infos: ['05/04'],
    system: 'Windows',
    title: 'Diablo 4',
    id: 1
  },
  {
    category: 'Aventura',
    descreption:
      'Star Wars Jedi: Survivor é um próximo jogo de ação e aventura desenvolvido pela Respawn...',
    image: starWars,
    infos: ['05/04'],
    system: 'PS4',
    title: 'Star Wars Jedi Survivor',
    id: 2
  },
  {
    category: 'Luta',
    descreption:
      'Street Fighter 6 é um próximo jogo de luta desenvolvido e publicado pela Capcom.',
    image: StreetFighter,
    infos: ['05/04'],
    system: 'Windows',
    title: 'Street Fighter 6',
    id: 3
  },
  {
    category: 'RPG',
    descreption:
      'Uma aventura épica pela terra e pelos céus de Hyrule aguarda em The Legend of Zelda™...',
    image: zelda,
    infos: ['05/04'],
    system: 'Switch',
    title: 'The Legend of Zelda - TOK',
    id: 4
  }
]
const Home = () => (
  <>
    <Banner />
    <ProductsList games={promocoes} title="Promoções" background="gray" />
    <ProductsList games={emBreve} title="Em_breve" background="black" />
  </>
)

export default Home

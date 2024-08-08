import ProductsList from '../../components/ProductsList'
import Game from '../../models/Games'
import resident from '../../assets/images/resident.png'
import fifa from '../../assets/images/FIFA.png'

const RPG: Game[] = [
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

const Acao: Game[] = [
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

const Aventura: Game[] = [
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

const Esporte: Game[] = [
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
const Categories = () => (
  <>
    <ProductsList games={RPG} title="RPG" background="gray" />
    <ProductsList games={Acao} title="Acao" background="black" />
    <ProductsList games={Aventura} title="Aventura" background="gray" />
    <ProductsList games={Esporte} title="Esporte" background="black" />
  </>
)

export default Categories

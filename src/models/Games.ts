class Game {
  category: string
  descreption: string
  image: string
  infos: string[]
  system: string
  title: string
  id: number

  constructor(
    category: string,
    descreption: string,
    image: string,
    infos: string[],
    system: string,
    title: string,
    id: number
  ) {
    this.category = category
    this.descreption = descreption
    this.image = image
    this.infos = infos
    this.system = system
    this.title = title
    this.id = id
  }
}

export default Game

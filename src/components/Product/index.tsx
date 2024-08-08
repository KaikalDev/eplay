import Tag from '../Tag'
import { Titulo, Descricao, Card, Infos } from './styles'

type Props = {
  title: string
  category: string
  system: string
  descreption: string
  infos: string[]
  image: string
}

const Product = ({
  category,
  descreption,
  image,
  infos,
  system,
  title
}: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <Titulo>Nome do jogo</Titulo>
    <Tag>{category}</Tag>
    <Tag>{system}</Tag>
    <Descricao>{descreption}</Descricao>
  </Card>
)

export default Product

import Htag from "../components/Htag/Htag";
import Button from "../components/Button/Button";
import Ptag from "../components/Ptag/Ptag";
import Tag from "../components/Tag/Tag";

export default function Home() {
  return (
    <div >
      <Htag tag='h1' children='Приветики'/>
      <Htag tag='h2' children='Приветики'/>
      <Htag tag='h3' children='Приветики'/>
      <Button appearance='primary' className='dataclass' >Кнопка</Button>
      <Button appearance='ghost' arrow='right'>Кнопка</Button>
      <Ptag size='big'>Текст большой </Ptag>
      <Ptag size='medium'>Текст поменбше </Ptag>
      <Ptag size='small'>Текст кроха </Ptag>
      <Tag size='small' color='red'>Текст поменбше </Tag>
      <Tag size='big'>тэг</Tag>
    </div>
  )
}

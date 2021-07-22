import Htag from "../components/Htag/Htag";
import Button from "../components/Button/Button";
import Ptag from "../components/Ptag/Ptag";
import Tag from "../components/Tag/Tag";
import Rating from "../components/Rating/Rating";
import { useState} from "react";
import { withLayout} from "../layout/Layout";
import { MenuItem } from "../interfaces/menu.interface";
import {TopPageModel} from "../interfaces/toppage.interface";
import {GetStaticProps} from "next";
import axios from "axios";
import {Input} from "../components/Input/Input";
import {TextArea} from "../components/TextArea/TextArea";

function Home({menu}: HomeProps): JSX.Element {

  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <Htag tag='h1' children='Приветики'/>
      <Htag tag='h2' children='Приветики'/>
      <Htag tag='h3' children='Приветики'/>
      <Button appearance='primary' className='dataclass' >Кнопка</Button>
      <Button appearance='ghost' arrow='right'>Кнопка</Button>
      <Ptag size='big'>Текст большой </Ptag>
      <Ptag size='medium'>Текст поменбше </Ptag>
      <Ptag size='small'>Текст кроха </Ptag>
      <Tag size='small' color='red'>Текст поменбше </Tag>
      <Tag color='green' size='big'>тэг</Tag>
      <Rating rating={rating} isEditable={true} setRating={setRating}/>
      <Input placeholder="Имя"/>
      <TextArea placeholder="Ваш Текст"/>
    </>
  )
}

export default withLayout(Home)

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory
  });
  return {
    props: {
      menu,
      firstCategory
    }
  };
};

interface HomeProps extends Record<string, unknown>{
  menu: MenuItem[]
  firstCategory: number
}
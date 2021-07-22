import React, {useState} from 'react';
import {SearchProps} from "./Search.props";
import cn from "classnames";
import {Input} from "../Input/Input";
import Button from "../Button/Button";
import style from './Search.module.css'
import GlassIcon from './search.svg'
import {useRouter} from "next/router";

const Search = ({className, ...props}: SearchProps): JSX.Element => {
  const [search, setSearch] = useState<string>('')
  const router = useRouter()

  const goToSearch = () => {
    router.push({
      pathname: '/search',
      query: {
        q: search
      }
    })
  }
  const handleKeyDown = (event: any) => {
    if(event.key == 'Enter') {
      goToSearch()
    }
  }

  return (
    <div className={cn(className, style.search)} {...props}>
      <Input
        className={style.input}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
        value={search}/>
      <Button
        appearance="primary"
        className={style.button}
        onClick={goToSearch}

      >
        <GlassIcon/>
      </Button>
    </div>
  );
};

export default Search;
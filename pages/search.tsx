import React from 'react';
import { withLayout } from '../layout/Layout';
import { MenuItem } from '../interfaces/menu.interface';

function Search(): JSX.Element {

  return (
    <>
      Search
    </>
  );
}

export default withLayout(Search);


interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
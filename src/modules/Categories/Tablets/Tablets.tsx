import React from 'react';

import { MainNavLinks } from '../../../enums/MainNavLinks';
import { Products } from '../Products';

export const Tablets: React.FC = () => (
  <Products query={MainNavLinks.tablets} />
);

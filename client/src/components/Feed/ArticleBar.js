// Core
import React from 'react';
import { NavLink } from 'react-router-dom';
// Instruments 
import { path} from '../../utils/routes';

export const ArticleBar = () => <NavLink to={path.articles}> Articles </NavLink>
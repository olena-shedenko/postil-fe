import React from 'react';
import { NavLink } from 'react-router-dom';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import './Breadcrumbs.scss';

// const routes = [{ path: '/catalog', breadcrumb: 'Catalog' }];

const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs();

  return (
    <div className="bc-container">
      {breadcrumbs.map(({ breadcrumb, match }) => (
        <NavLink key={`${match.url}`} className="bc-item" to={match.url}>
          {breadcrumb}
        </NavLink>
      ))}
    </div>
  );
};

export default Breadcrumbs;

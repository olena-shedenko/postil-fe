import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import ContactUs from './ContactUs';

describe('Contact Us page', () => {
  it('should render properly', () => {
    render(
      <Router>
        <ContactUs />
      </Router>
    );
    const link = screen.getByRole('link');
    const headings = screen.getAllByRole('heading');
    const table = screen.getByRole('table');
    const rowgroup = screen.getAllByRole('rowgroup');
    const columnHeader = screen.getAllByRole('columnheader');
    const cells = screen.getAllByRole('cell');
    const rows = screen.getAllByRole('row');

    expect(link).toBeVisible();
    headings.forEach((heading) => expect(heading).toBeVisible());
    expect(table).toBeVisible();
    rowgroup.forEach((row) => expect(row).toBeVisible());
    columnHeader.forEach((header) => expect(header).toBeVisible());
    cells.forEach((cell) => expect(cell).toBeVisible());
    rows.forEach((row) => expect(row).toBeVisible());
  });
});

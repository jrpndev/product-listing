import React from 'react';
import { render} from '@testing-library/react';
import { fireEvent } from '@testing-library/react';
import { Category } from '@/models/category';
import CategoryFilter from '@/components/CategoryFilter';

const mockCategories: Category[] = [
  { id: 1, name: 'Sneakers' },
  { id: 2, name: 'Running' },
];

describe('CategoryFilter', () => {
  it('renders correctly', () => {
    const { getByText } = render(<CategoryFilter onSelect={() => {}} />);
    
    expect(getByText('Filtrar por Categoria')).toBeTruthy();
    mockCategories.forEach(category => {
      expect(getByText(category.name)).toBeTruthy();
    });
  });

  it('calls onSelect with the correct category when clicked', () => {
    const mockOnSelect = jest.fn();
    const { getByText } = render(<CategoryFilter onSelect={mockOnSelect} />);

    fireEvent.click(getByText('Sneakers'));
    expect(mockOnSelect).toHaveBeenCalledWith(mockCategories[0]);

    fireEvent.click(getByText('Running'));
    expect(mockOnSelect).toHaveBeenCalledWith(mockCategories[1]);
  });
});

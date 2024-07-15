import React from 'react';
import { fireEvent } from '@testing-library/dom';
import { Brand } from '@/models/brand';
import BrandFilter from '@/components/BrandFilter';
import { render } from '@testing-library/react';
const mockBrands: Brand[] = [
  { id: 1, name: 'Nike' },
  { id: 2, name: 'Adidas' },
];

describe('BrandFilter', () => {
  it('renders correctly', () => {
    const { getByText } = render(<BrandFilter onSelect={() => {}} />);
    
    expect(getByText('Filtrar por Marca')).toBeTruthy();
    mockBrands.forEach(brand => {
      expect(getByText(brand.name)).toBeTruthy();
    });
  });

  it('calls onSelect with the correct brand when clicked', () => {
    const mockOnSelect = jest.fn();
    const { getByText } = render(<BrandFilter onSelect={mockOnSelect} />);

    fireEvent.click(getByText('Nike'));
    expect(mockOnSelect).toHaveBeenCalledWith(mockBrands[0]);

    fireEvent.click(getByText('Adidas'));
    expect(mockOnSelect).toHaveBeenCalledWith(mockBrands[1]);
  });
});

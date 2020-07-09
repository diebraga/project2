import { render, fireEvent, wait } from '@testing-library/react';
import React from 'react';
import Input from '../_components/input/index';
import Button from '../_components/button';
import Card from '../_components/card';
import Navbar from '../_components/navbar';
import Footer from '../_components/footer';

jest.mock('react-router-dom', () => {
  return {
    useHistory: jest.fn(),
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

jest.mock('@unform/core', () => {
  return {
    useField() {
      return {
        fieldName: 'email',
        defaltValue: '',
        error: '',
        registerField: jest.fn(),
      };
    },
  };
});

describe('Input element', () => {
  it('should be able to render an input', () => {
    const { getByPlaceholderText } = render(
      <Input name="email" placeholder="E-mail" />,
    );

    expect(getByPlaceholderText('E-mail')).toBeTruthy();
  });

  it('should render highlight on input focus', async () => {
    const { getByPlaceholderText, getByTestId } = render(
      <Input name="email" placeholder="E-mail" />,
    );
    const inputElement = getByPlaceholderText('E-mail');
    const containerElement = getByTestId('input-container');

    fireEvent.focus(inputElement);

    await wait(() => {
      expect(containerElement).toHaveStyle('border-color: tomato');
      expect(containerElement).toHaveStyle('color: tomato');
    });

    fireEvent.blur(inputElement);

    await wait(() => {
      expect(containerElement).not.toHaveStyle('border-color: tomato');
      expect(containerElement).not.toHaveStyle('color: tomato');
    });
  });
});

describe('button element', () => {
  it('should be able to render button', () => {
    const { getByTestId } = render(<Button />);

    const buttonTestId = getByTestId('button-container');

    expect(buttonTestId).toBeTruthy();
  });
});

describe('card element', () => {
  it('should be able to render cards', () => {
    const { getByTestId } = render(<Card />);

    const cardTestId = getByTestId('card-container');

    expect(cardTestId).toBeTruthy();
  });
});

describe('navbar component', () => {
  it('should be able to render navbar correctly', () => {
    const { getByTestId } = render(<Navbar />);

    const navbarTestId = getByTestId('navbar-container');

    expect(navbarTestId).toBeTruthy();
  });
});

describe('footer component', () => {
  it('should be able to render footer correctly', () => {
    const { getByTestId } = render(<Footer />);

    const footerTestId = getByTestId('footer-container');

    expect(footerTestId).toBeTruthy();
  });
});

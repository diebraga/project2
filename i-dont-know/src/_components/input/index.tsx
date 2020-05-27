import React, { InputHTMLAttributes, ComponentType } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ icon: Icon, ...rest }) => {
  return (
    <>
      <Container>
        {Icon && <Icon size={20} />}
        <input {...rest} />
      </Container>
    </>
  );
};

export default Input;

/**
 *   iterface InputProps param give us access to HTML input params.
 *    on input repass all props ex {...props}
 *
 *    using IconBaseProps I cab access all proops of a componebnt
 */

import { LoadMore } from './Button.styled';

export const Button = ({ onClick, children }) => {
  return (
    <LoadMore onClick={onClick} type="button">
      {children}
    </LoadMore>
  );
};


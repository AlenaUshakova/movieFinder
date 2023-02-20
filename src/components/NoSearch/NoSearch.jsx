import { StyledIncomeSmile, StyledIncomeSmileText } from './NoSearch.styled';
import nothing from '../../images/welcome.jpg';

export const NoSearch = ({value}) => {
  return (
    <StyledIncomeSmile>
      <img src={nothing} alt="logo" width={200} />
      <StyledIncomeSmileText>
        {value === 'ru'
          ? 'Начните поск фильма. Введите название фильма или его часть'
          : 'Let start searching movie. Enter the name of the movie or part of it'}
      </StyledIncomeSmileText>
    </StyledIncomeSmile>
  );
};



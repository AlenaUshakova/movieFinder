import { StyledIncomeSmile, StyledIncomeSmileText } from './NoResults.styled';
import logo from '../../images/Sad.png';

export const NoResults = ({ query, value }) => {
  return (
    <StyledIncomeSmile>
      <img src={logo} alt="logo" width={150} />
      <StyledIncomeSmileText>
        {value === 'ru'
          ? 'К сожалению, нет фильмов, соответствующих вашему запросу: '
          : 'Sorry, there are no movies matching your search:'}
        <b>'{query}'</b> <br />
        {value === 'ru' ? 'Попробуйте еще раз...' : 'Please try again...'}
      </StyledIncomeSmileText>
    </StyledIncomeSmile>
  );
};
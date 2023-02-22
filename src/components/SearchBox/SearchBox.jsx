import { Forma, Input, SearchBtn } from './SearchBox.styled';
import { useContext } from 'react';
import { languageContext } from 'context/LanguageContext';


export const SearchBox = ({ onSubmit}) => {
  const { value } = useContext(languageContext);
  const handleSubmit = e => {
    e.preventDefault();
    const { query } = e.target.elements;
    onSubmit(query.value);
    e.target.reset();
  };

  return (
    <div>
      <Forma autoComplete="off" onSubmit={handleSubmit}>
        <label>
          <Input type="text" name="query" />
        </label>
        <SearchBtn type="submit">
          {value === 'ru' ? 'Поиск' : 'Search'}
        </SearchBtn>
      </Forma>
    </div>
  );
};


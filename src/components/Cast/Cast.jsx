import { movieCast } from 'components/services/api-movie';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  CastList,
  CastConteiner,
  CastItem,
  CastImg,
  FilmHero,
} from './Cast.styled';
import { nanoid } from 'nanoid';
import { useContext } from 'react';
import { languageContext } from 'context/LanguageContext';

const BASE_URL = 'https://image.tmdb.org/t/p/w500';
const defoltImg =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJnNH6I8IvZndxspJlJ0BDEyUNHxLvNokyWQ&usqp=CAU';

const Cast = () => {
  const { id } = useParams();
  const [castList, setCastList] = useState();
  const { value } = useContext(languageContext);

  useEffect(() => {
    movieCast(id, value).then(setCastList);
  }, [id, value]);

  if (!castList) {
    return null;
  }

  return (
    <CastConteiner>
      {castList.length === 0 ? (
        <p style={{ margin: '0', textAlign: 'center' }}>
          {value === 'ru'
            ? 'Для этого фильма нет информации по актерскому составу'
            : 'We don"t have any cast for this movie'}
        </p>
      ) : (
        <CastList>
          {castList.map(el => (
            <CastItem key={nanoid()}>
              <CastImg
                src={
                  el.profile_path ? `${BASE_URL}${el.profile_path}` : defoltImg
                }
                alt=""
                width="80"
              />
              <div style={{ padding: '5px' }}>
                <p>{el.name}</p>
                <p>
                  {value === 'ru' ? 'Персонаж: ' : 'Character: '}{' '}
                  <FilmHero>{el.character}</FilmHero>
                </p>
              </div>
            </CastItem>
          ))}
        </CastList>
      )}
    </CastConteiner>
  );
};
export default Cast;

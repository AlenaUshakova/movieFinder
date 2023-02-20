import { movieReviews } from 'components/services/api-movie';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewsList, ReviewsAuthor, ReviewsItem } from './Reviews.styled';

const Reviews = ({ value }) => {
  const { id } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    movieReviews(id, value).then(r => {
      if (r.length === 0) {
       movieReviews(id, 'en').then(setReviews);
      }
      setReviews(r);
    });
  }, [id, value]);

  if (reviews === null) {
    return;
  }

  return (
    <div>
      {reviews.length !== 0 ? (
        <ReviewsList>
          {reviews.map(el => (
            <ReviewsItem key={el.id}>
              <p>
                Author: <ReviewsAuthor>{el.author}</ReviewsAuthor>
              </p>
              <p>{el.content}</p>
            </ReviewsItem>
          ))}
        </ReviewsList>
      ) : (
        <p style={{ textAlign: 'center' }}>
          {value === 'ru'
            ? 'Для этого фильма еще нет отзывов'
            : 'We don"t have any reviews for this movie'}
          
        </p>
      )}
    </div>
  );
};

export default Reviews;

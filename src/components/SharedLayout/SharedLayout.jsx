import { Outlet } from 'react-router-dom';
import { Container, Header, Link } from './SharedLayout.styled';
import { Suspense } from 'react';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Select from 'react-select';
import { Loader } from 'components/Loader/Loader';
import { useContext } from 'react';
import { languageContext } from 'context/LanguageContext';

export const SharedLayout = () => {
    const { selectedOption, setSelectedOption, options, value } =
      useContext(languageContext);
  return (
    <Container>
      <Header>
        <nav>
          {value === 'en' ? (
            <>
              <Link to="/" end>
                Home
              </Link>
              <Link to="/movies">Movies</Link>
            </>
          ) : (
            <>
              <Link to="/" end>
                Главная
              </Link>
              <Link to="/movies">Фильмы</Link>
            </>
          )}
        </nav>
        <div className="wow">
          <Select
            className="dod"
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
          />
        </div>
      </Header>
      <Suspense fallback={<Loader/>}>
        <Outlet />
      </Suspense>
      <ToastContainer position="top-center" autoClose={2000} theme="colored" />
    </Container>
  );
};

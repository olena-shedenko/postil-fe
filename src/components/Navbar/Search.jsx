import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { filterName } from '../../store/actions';
import { filterAndSortOperation } from '../../store/operations';

function Search() {
  const history = useHistory();
  const dispatch = useDispatch();
  const capitalizeWord = (stringToConvert) => {
    const firstCharacter = stringToConvert.substring(0, 1);
    const restString = stringToConvert.substring(1);

    return firstCharacter.toUpperCase() + restString.toLowerCase();
  };

  const capitalize = (stringToConvert) => {
    const wordsArray = stringToConvert.split(' ');
    const convertedWordsArray = wordsArray.map((word) => {
      return capitalizeWord(word);
    });

    return convertedWordsArray.join(' ');
  };
  return (
    <div>
      <input
        type="Search"
        placeholder="Search"
        className="navbar--search"
        onChange={(e) => {
          const value = capitalize(e.target.value);
          dispatch(filterName(value));
          dispatch(filterAndSortOperation());
        }}
        onClick={() => {
          history.push('/catalog');
        }}
      />
    </div>
  );
}

export default Search;

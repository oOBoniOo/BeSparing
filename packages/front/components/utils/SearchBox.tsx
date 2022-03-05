import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import PropTypes from 'prop-types';
import { getMunsMatch } from '../../lib/api/locRequests';
import _ from 'lodash';
export const SearchBox = ({ message }) => {
  const [municipios, setMunicipios] = useState([]);

  const getDataFromAPI = async (e, value) => {
    console.log(value);
    const muns = await getMunsMatch(_.capitalize(e.target.value));
    setMunicipios(muns);
  };

  return (
    <div className='flex justify-center'>
      <div className='mb-3 sm:w-32 md:w-64 xl:w-96'>
        <h3>{message}</h3>
        <Autocomplete
          className='appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
          freeSolo
          autoComplete
          autoHighlight
          options={municipios}
          onInputChange={getDataFromAPI}
          renderInput={(params) => (
            <TextField {...params} onChange={getDataFromAPI} label='Nombre municipio' />
          )}
        />
        <button
          type='submit'
          className='
      w-full
      px-6
      py-2.5
      bg-rose-300
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-gray-900 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out'>
          Actualizar mis datos
        </button>
      </div>
    </div>
  );
};

SearchBox.propTypes = {
  message: PropTypes.string,
};

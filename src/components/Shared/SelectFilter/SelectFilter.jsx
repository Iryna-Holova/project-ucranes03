import React from 'react';
import Select from 'react-select';
import { customStyles } from './customStyles';

const SelectFilter = ({ options, onChange, value, placeholder, name }) => {
  return (
    <Select
      options={options}
      isSearchable
      isClearable
      styles={customStyles}
      onChange={option => onChange(option, { name })}
      value={value}
      placeholder={placeholder}
    />
  );
};

export default SelectFilter;

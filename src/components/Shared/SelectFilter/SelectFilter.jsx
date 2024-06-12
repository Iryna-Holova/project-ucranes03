import Select from 'react-select';

const SelectFilter =({ options, onChange, value, placeholder, name }) => {
  return (
    <Select
      options={options}
      isSearchable
      isClearable
      onChange={(option) => onChange(option, { name })}
      value={value}
      placeholder={placeholder}
      /> 
  );
};
export default SelectFilter;
export const customStyles = {
  control: provided => ({
    ...provided,
    borderRadius: '30px',
    border: '1px solid var(--color-main-20, rgba(5, 5, 5, 0.20))',
    fontFamily: 'Mulish',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '24px',
    letterSpacing: '-0.02em',
    color: 'var(--color-main, #050505)',
    boxShadow: 'none',
    padding: '16px 18px',
    '&:hover': {
      borderColor: 'var(--color-main)',
    },
  }),
  valueContainer: provided => ({
    ...provided,
    padding: 0,
    margin: 0,
  }),
  input: provided => ({
    ...provided,
    padding: 0,
    margin: 0,
  }),
  singleValue: provided => ({
    ...provided,
    color: 'var(--color-main, #050505)',
    padding: '0',
    margin: '0',
  }),
  placeholder: provided => ({
    ...provided,
    color: 'var(--color-main-60, rgba(5, 5, 5, 0.60))',
    fontFamily: 'Mulish',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '24px',
    letterSpacing: '-0.02em',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    transition: 'transform 0.3s ease',
    transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : 'rotate(0deg)',
    color: 'var(--color-main, #050505)',
    padding: 4,
  }),
  clearIndicator: provided => ({
    ...provided,
    padding: 4,
    color: 'var(--color-main, #050505)',
  }),
  menu: provided => ({
    ...provided,
    borderRadius: '0px',
  }),
  option: (provided, state) => ({
    ...provided,
    fontFamily: 'Mulish',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '24px',
    letterSpacing: '-0.02em',
    color: 'var(--color-main, #050505)',
    padding: '0',
    margin: '0',
    backgroundColor: state.isSelected
      ? 'var(--color-main-20, rgba(5, 5, 5, 0.20))'
      : state.isFocused
      ? 'var(--color-main-20, rgba(5, 5, 5, 0.20))'
      : null,
  }),
};

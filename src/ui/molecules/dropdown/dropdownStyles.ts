export const selectStyles = {
  option: (provided: any, state: any) => ({
    ...provided,
    borderBottom: '1px dotted pink',
    fontSize: 16,
    color: 'black',
    backgroundColor: state.isSelected ? '#F5F5F5' : '',
    textAlign: 'left',
    cursor: 'pointer',
  }),
  container: (base: any) => ({
    ...base,
    width: '100%',
  }),
  control(base: any, state: any) {
    return {
      ...base,
      boxShadow: null,
      height: 40,
      minHeight: 40,
      borderRadius: '4px',
      width: '100%',
      textAlign: 'left',
      cursor: 'pointer',
      padding: '0 0 0 15px',
      fontSize: '16px',
      border: '1px solid #858585',

      '&:focus-within': {
        borderColor: '#292929',
      },

      '&:hover': {
        borderColor: null,
      },
    };
  },
  valueContainer: (base: any) => ({
    ...base,
    position: 'relative',
    padding: 0,
  }),
};

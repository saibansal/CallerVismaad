type StatusLabel = {
  [key: number]: {label: string; backgroundColor: string; color: string};
};

export const statusLabels: StatusLabel = {
  '0': {label: 'Inactive', backgroundColor: '#CFCFCF', color: '#000000'},
  '1': {label: 'Active', backgroundColor: '#009688', color: '#ffffff'},
  '2': {
    label: 'Waiting For Batch',
    backgroundColor: '#FF5722',
    color: '#ffffff',
  },
  '3': {label: 'Notice Period', backgroundColor: '#00FFFF', color: '#ffffff'},
  '4': {label: 'Inactive Break', backgroundColor: '#E91E63', color: '#ffffff'},
  '5': {label: 'Active Break', backgroundColor: '#E91919', color: '#ffffff'},
};

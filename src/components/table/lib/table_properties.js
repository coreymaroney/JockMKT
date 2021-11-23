const columns = [
  {
    name: 'playerName',
    label: 'Name',
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: 'position',
    label: 'Position',
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: 'projectedFantasyPoints',
    label: 'Projected fantasy points',
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: 'actualFantasyPoints',
    label: 'Actual fantasy points',
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: 'estimatedPrice',
    label: 'Estimated price ($)',
    options: {
      filter: true,
      sort: true,
    },
  },
];

const options = {
  filterType: 'checkbox',
  print: 'false'
};

export { columns, options };

const combineUrlWithEndpoint = endpoint => {
  // const baseUrl = 'https://easy-lime-seal-toga.cyclic.app';
  const baseUrl = 'https://rcp.codeinsomnia.com';
  // const baseUrl = 'http://localhost:3001';
  if (baseUrl.endsWith('/')) {
    return baseUrl + endpoint;
  } else {
    return baseUrl + '/' + endpoint;
  }
};

const Path = [
  {
    label: 'LoginUser',
    route: '/login',
    key: 'LoginUser',
  },
  {
    label: 'For Get All Menu',
    route: '/menu',
    key: 'For Get All Menu',
  },
  {
    label: 'search',
    route: '/user',
    key: 'my-applications',
  },
  {
    label: 'Find Jobs',
    route: '/user',
    key: 'find-jobs',
  },
  {
    label: 'Browse Companies',
    route: '/user',
    key: 'browse-companies',
  },
  {
    label: 'get Menu By Id',
    route: '/menu',
    key: 'get Menu By Id',
  },
];

module.exports = {
  combineUrlWithEndpoint,
  Path,
};

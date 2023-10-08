// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  // API functions
  URL_ENDPOINT_ADDRESS: 'http://localhost:3000',

  URLPATH_FRONTEND_ROOT: '/',
  URLPATH_FRONTEND_LOGIN: '/login',
  URLPATH_FRONTEND_HOME: '/home',

  URLPATH_ENDPOINT_LOGIN: '/login',
  URLPATH_ENDPOINT_DATA: '/data',
  URLPATH_ENDPOINT_REFRESH: '/refresh',

  // Storage functions
  STORAGE_CLIENT_KEY: 'ClientKey',
  STORAGE_REFRESH_CLIENT_KEY: 'RefreshClientKey',

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

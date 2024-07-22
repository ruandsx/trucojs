const HOME = "/";
const LOGIN_ROUTE = "/login";
const LOGOUT_ROUTE = "/logout";
const LOBBIES = "/lobbies";
const LOBBY = "/lobby/";

const ERROR_404 = "/404";

export const getCoreRoutes = () => ({
  home: HOME,
  login: LOGIN_ROUTE,
  logout: LOGOUT_ROUTE,
  lobbies: LOBBIES,
  lobby: LOBBY,
});

export const unauthenticatedRoutes = [LOGIN_ROUTE, LOGOUT_ROUTE, ERROR_404];

export const PUBLIC_IMAGES_PATH = "/images";

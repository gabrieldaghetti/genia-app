import { RootStackParamList } from '../routes';

export type RootStackParamList = {
  HomePage: undefined;
  LoginPage: undefined;
};

declare global {
  namespace ReactNavigation {
    export interface RootParamList extends RootStackParamList {}
  }
}

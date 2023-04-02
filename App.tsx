import { Routes } from './src/routes';
import {StatusBar} from 'react-native';
import FullLogin from './src/Login';

export default function App() {
  return (
    <>
    <Routes/>
    <StatusBar barStyle="light-content" backgroundColor="transparent" translucent/>
  </>
  );
}


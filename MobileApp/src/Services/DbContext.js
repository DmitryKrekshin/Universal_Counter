import SQLite from 'react-native-sqlite-storage';

export const GetContext = () => {
  return SQLite.openDatabase({name: 'UniversalCounterDb.db', createFromLocation: 1}, () => {console.log('DB opened')}, () => {console.log('Fail open DB')});
}

// This file is created by egg-ts-helper@1.25.2
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportPhoto from '../../../app/model/photo';

declare module 'sequelize' {
  interface Sequelize {
    Photo: ReturnType<typeof ExportPhoto>;
  }
}

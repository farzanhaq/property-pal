// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Purchase, Unit, Screening } = initSchema(schema);

export {
  Purchase,
  Unit,
  Screening
};
import { v4 as uuid } from 'uuid';

function getUniqueHash(): string {
  return uuid();
}

export default getUniqueHash;

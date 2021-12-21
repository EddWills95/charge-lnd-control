import { sha1 } from 'object-hash';

const hashFromString = (input: string): string => {
    return sha1(input);
};

export default hashFromString;

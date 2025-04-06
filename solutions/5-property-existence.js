import _ from 'lodash';

// BEGIN
export default function countWords(sentence) {
    const result = {};
    if (!sentence) {
        return result;
    }

    const words = sentence.toLowerCase().split(/\s+/);

    for (const word of words) {
        if (result[word]) {
            result[word] += 1;
        } else {
            result[word] = 1;
        }
    }

    return result;
}
// END
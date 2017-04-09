import { Map } from 'immutable';

export default function UrlSearchParams(query) {
    let dictionary = Map();

    if (!query) return dictionary;
    if (query.charAt(0) === '?') {
        query = query.slice(1);
    }
    
    for (let
        index, value,
        pairs = query.split('&'),
        i = 0,
        length = pairs.length; i < length; i++
    ) {

        value = pairs[i];
        index = value.indexOf('=');

        if (-1 < index) {
            dictionary = dictionary.set(
                value.slice(0, index),
                value.slice(index + 1)
            );
        } else if (value.length) {
            dictionary = dictionary.set(
                value,
                ''
            );
        }
    }

    return dictionary;
}

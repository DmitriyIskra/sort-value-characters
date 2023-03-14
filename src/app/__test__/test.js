import {objOrigin} from '../app';
import sortObject from '../app';
// import {sortForRules} from '../app';
// import {filteredKeys} from '../app';
// import {sortForAlphabet} from '../app';

const firstProp = ["name", "level"];

const standard = [
    {key: "name", value: "мечник"},
    {key: "level", value: 2},
    {key: "attack", value: 80},
    {key: "defence", value: 40},
    {key: "health", value: 10}
]

test('check sortObject', () => {
    const result = sortObject(objOrigin, firstProp);

    expect(result).toEqual(standard);
})
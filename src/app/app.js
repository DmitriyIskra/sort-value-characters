export const objOrigin = {
  name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
};

export const arrForSort = ['name', 'level'];

export function sortForAlphabet(obj, preFinallyObject, resultLastKeys) {
  resultLastKeys.forEach((el) => {
    for (const key in obj) {
      if (el === key) {
        preFinallyObject.push({ // Добавляем в финальный массив строки в заданном порядке
          key,
          value: obj[key],
        });
      }
    }
  });

  return preFinallyObject;
}

export function filterLastKeys(obj, sortRules) {
  const arrOfKeys = Object.keys(obj);

  sortRules.forEach((el) => arrOfKeys.splice(arrOfKeys.indexOf(el), 1)); // Убираенм лишнее из массива ключей, то что уже добавленно в пред итоговый массив
  arrOfKeys.sort(); // выстраиваем эти свойства в алфавитном порядке

  return arrOfKeys;
}

export function sortForRules(obj, sortRules) {
  let result = null;
  const preFinallyObject = []; // Создаем пред финальный массив

  const resultLastKeys = filterLastKeys(obj, sortRules); // функция получения оставшихся свойств в алфавитном порядке

  sortRules.forEach((el) => { // берем элемент массива сортировки
    for (const key in obj) { // беребираем ключи объекта оригинала и сравниваем с элементом сортировки
      if (el === key) { // если находим то добавляем объект в предфинальный массив
        preFinallyObject.push({
          key,
          value: obj[key],
        });
      }

      if (preFinallyObject.length === sortRules.length) { // Если пред финальный массив той же длинны что и массив с первоначальными установками вызываем функцию
        result = sortForAlphabet(obj, preFinallyObject, resultLastKeys); // передаем в функцию отсортированный массив для второй части
      }
    }
  });

  return result;
}

export default function sortObject(obj, sortRules) { // START
  const result = sortForRules(obj, sortRules);
  return result;
}

// console.log(sortObject(objOrigin, arrForSort))

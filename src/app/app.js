export const objOrigin = {
  name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
};

export function sortForAlphabet(obj, finallyObject, filtereddArr) {
  filtereddArr.forEach((el) => { // Перебираем массив шаблон
    if (obj?.[el]) { // если в оригинальном объекте есть такие собственные свойства
      finallyObject.push({ // добавляем в финальный массив соответствующие объекты
        key: el,
        value: obj[el],
      });
    }
  });

  return finallyObject;
}

export function filteredKeys(obj, sortRules) {
  const filtereddArr = Object.keys(obj).filter((e) => e !== sortRules[0] && e !== sortRules[1]); // создаем массив из оставшихся свойств
  filtereddArr.sort(); // выстраиваем эти свойства в алфавитном порядке
  return filtereddArr;
}

export function sortForRules(obj, sortRules) {
  let result = null;
  const preFinallyObject = []; // Создаем финальный массив

  const resultKeys = filteredKeys(obj, sortRules); // функция получения оставшихся свойств в алфавитном порядке

  sortRules.forEach((el) => { // Перебираем массив по которому будут выстраиваться первые две строки
    if (obj?.[el]) {
      preFinallyObject.push({ // Добавляем в финальный массив строки в заданном порядке
        key: el,
        value: obj[el],
      });
    }

    if (preFinallyObject.length === sortRules.length) { // Если финальный массив той же длинны что и массив с первоначальными установками вызываем функцию
      result = sortForAlphabet(obj, preFinallyObject, resultKeys); // передаем в функцию отсортированный массив для второй части
    }
  });

  return result;
}

export default function sortObject(obj, sortRules) { // START
  const result = sortForRules(obj, sortRules);
  return result;
}

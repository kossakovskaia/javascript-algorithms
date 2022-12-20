/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
 */

function capitalize(str) {
  if (!str || str == " ") {
    return "";
  }

  const newString = str.replace(/\s{2,}/g, " ").replace(/^\s|\s$/g, "");

  const arr = newString.toLowerCase().split(" ");

  const result = arr.map((item) => {
    const upperLetter = item[0].toUpperCase();
    const formattedWord = upperLetter + item.slice(1);

    return formattedWord;
  });

  return result.join(" ");
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize("   молодость всё    простит   ")); // "Молодость Всё Простит"

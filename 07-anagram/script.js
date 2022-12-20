/*
 * Задача 7: «Анаграмма»
 *
 * Два слова называют анаграммами, если они состоят из одних и тех же букв.
 * Напишите функцию, проверяющую, являются ли две строки анаграммами друг друга
 * (регистр букв не имеет значения). Для простоты примите, что в этих строках
 * нет пробелов и знаков препинания.
 *
 */

function anagram(str1, str2) {
  if (!str1 || !str2 || str1 === " " || str2 === " ") {
    return false;
  }

  const formattedString1 = str1
    .replace(/[^а-яА-Яa-zA-Z0-9]/gm, "")
    .toLowerCase();
  const formattedString2 = str2
    .replace(/[^а-яА-Яa-zA-Z0-9]/gm, "")
    .toLowerCase();

  if (formattedString1 === formattedString2) {
    return false;
  }

  const arr1 = formattedString1.split("");
  const arr2 = formattedString2.split("");

  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      return false;
    }
  }

  return true;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(anagram("up", "UP"));

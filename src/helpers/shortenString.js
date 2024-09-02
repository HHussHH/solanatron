export const shortenString = (str,prefixLen) => {
    const maxLength = 37; // максимальная длина строки

    if (str.length <= maxLength) {
        return str; // если длина строки меньше или равна 37 символам, возвращаем строку как есть
    } else {
        const prefixLength = prefixLen; // длина префикса
        const suffixLength = 2; // длина суффикса

        // извлекаем префикс и суффикс из строки
        const prefix = str.slice(0, prefixLength);
        const suffix = str.slice(-suffixLength);

        // считаем количество символов между префиксом и суффиксом, которые должны быть заменены на многоточие
        const ellipsis = "....";

        // возвращаем сокращенную строку
        return `${prefix}${ellipsis}${suffix}`;
    }
}
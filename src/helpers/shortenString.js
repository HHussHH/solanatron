export const shortenString = (str,prefixLen) => {
    const maxLength = 37;

    if (str.length <= maxLength) {
        return str;
    } else {
        const prefixLength = prefixLen;
        const suffixLength = 2;

        const prefix = str.slice(0, prefixLength);
        const suffix = str.slice(-suffixLength);

        const ellipsis = "....";

        return `${prefix}${ellipsis}${suffix}`;
    }
}
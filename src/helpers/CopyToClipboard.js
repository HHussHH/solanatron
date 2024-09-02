
export const сopyToClipboard = (textToCopy) => {
    navigator.clipboard.writeText(textToCopy)
            .catch((err) => {
                console.error('Ошибка при копировании текста: ', err);
            });

}


export const сopyToClipboard = (textToCopy) => {
    navigator.clipboard.writeText(textToCopy).then(() =>{

    })
            .catch((err) => {
                console.error('Ошибка при копировании текста: ', err);
            });

    return Boolean(textToCopy);
}

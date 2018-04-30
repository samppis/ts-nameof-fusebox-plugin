const { replaceInText } = require("ts-nameof");

const TsNameOfPlugin = {
    onTypescriptTransform: (file) => {
        const result =  replaceInText(file.contents);

        if (result.replaced) {
            file.contents = result.fileText;
        }
    }
}

module.exports = TsNameOfPlugin;
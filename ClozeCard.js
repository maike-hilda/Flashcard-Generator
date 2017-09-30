function ClozeCard(text, cloze) {
    if (!(this instanceof ClozeCard)) {
        return new ClozeCard(text, cloze);
    }
    this.cloze = cloze;
    this.partialTextFun = function () {
        if (text.includes(cloze)) {
            return text.replace(cloze, "");
        } else {
            console.log("The cloze you entered does not show up in the text.")
        }
    };
    this.partialText = this.partialTextFun();
    this.fullText = text
}

module.exports = ClozeCard;
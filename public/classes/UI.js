var UI = /** @class */ (function () {
    function UI(houseForm, aptForm, loftForm, studioForm, tipiForm, vilaForm, houseCounter, aptCounter) {
        this.houseForm = houseForm;
        this.aptForm = aptForm;
        this.loftForm = loftForm;
        this.studioForm = studioForm;
        this.tipiForm = tipiForm;
        this.vilaForm = vilaForm;
        this.houseCounter = houseCounter;
        this.aptCounter = aptCounter;
    }
    UI.clearInputs = function (arrOfEls) {
        arrOfEls.forEach(function (el) { return (el.value = ''); });
    };
    return UI;
}());
export { UI };

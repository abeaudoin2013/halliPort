Template.Reading.rendered = function () {
 if(!this._rendered) {
      this._rendered = true;
      $("#reading").addClass("li-selected");
      $("#reading").siblings().removeClass("li-selected");
    }
};
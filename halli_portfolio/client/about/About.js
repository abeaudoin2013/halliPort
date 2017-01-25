Template.About.rendered = function () {
 if(!this._rendered) {
      this._rendered = true;
      $("#about").addClass("li-selected");
      $("#about").siblings().removeClass("li-selected");
    }
};
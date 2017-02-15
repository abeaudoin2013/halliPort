Template.About.rendered = function () {
 if(!this._rendered) {
      this._rendered = true;
      $("#about").addClass("li-selected");
      $("#about").closest("a").siblings().find("li").removeClass("li-selected");
    }
};
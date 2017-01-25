Template.Home.rendered = function () {
 if(!this._rendered) {
      this._rendered = true;
      $("#home").addClass("li-selected");
      $("#home").siblings().removeClass("li-selected");
    }
};

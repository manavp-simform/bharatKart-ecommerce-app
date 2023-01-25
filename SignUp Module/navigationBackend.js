$(document).ready(function() {
  $(function() {
    $("li a").click(function(e) {
      e.preventDefault();
      $("a").removeClass("active");
      $(this).addClass("active");
    });
  });
});

$(function() {
  var current = location.pathname;
  $("#nav li a").each(function() {
    var $this = $(this);
    // if the current path is like this link, make it active
    if ($this.attr("href").indexOf(current) !== -1) {
      $this.addClass("active");
    }
  });
});

let switchNavMenuItem = menuItems => {
  var current = location.pathname;

  $.each(menuItems, (index, item) => {
    $(item).removeClass("active");

    if (
      (current.includes($(item).attr("href")) &&
        $(item).attr("href") !== "/") ||
      ($(item).attr("href") === "/" && current === "/")
    ) {
      $(item).addClass("active");
    }
  });
};

$(document).ready(() => {
  switchNavMenuItem($("#nav li a, #nav li link"));
});

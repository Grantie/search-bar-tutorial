$(".search").on("input", function () {
  const query = $(".search").val();
  $(".items a").each(function () {
    if ($(this).children("div").eq(0).html().includes(query)) {
      $(this).show();
    } else {
      $(this).hide();
    }
  });
});
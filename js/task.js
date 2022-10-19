$(document).ready(function () {
  $(".form1").submit(function (event) {
    event.preventDefault();
    var heading = $(".heading").val();

    console.log(heading);
    $("main").append("<section><h1>" + heading + "</h1></section>");
    // $("#exampleModal").modal('toggle');

    $("option").remove();
    $("main section h1").each(function (index, value) {
      $(".subheadinglist").append("<option value=" + (index + 1) + ">" + $(this).text() + "</option>");


    });

  });

  $(".form2").submit(function (event) {
    event.preventDefault();
    var subheading = $(".subheading").val();
    // $("").remove();
    var $option = $(this).find('option:selected');
    var subheadid = $option.val();
    console.log(subheading);
    $("section:value").append("<div><h4>" + subheading + "</h4></div>");
   
  });
});
  
  
  
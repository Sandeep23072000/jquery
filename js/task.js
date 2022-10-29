$(document).ready(function () {
  $(".form1").submit(function (event) {
    event.preventDefault();
    var heading = $(".heading").val();

    $("main").append("<section><h1>" + heading + "</h1></section>");
    console.log(heading);

    $("option").remove();
    $("main section h1").each(function (index, value) {
      $(".headinglist").append("<option value=" + (index + 1) + ">" + $(this).text() + "</option>");
      // $("#exampleModal").modal('toggle');

    });

  });

  $(".form2").submit(function (event) {
    event.preventDefault();
    var subheading = $(".subheading").val();
    if (subheading == "") {
      alert("This field is required")
      return false;
    }
    else {
      var head = $(".headinglist option:selected").val();
      $("main section:nth-child(" + head + ") ").append("<div><h3>" + subheading + "</h3></div>");
      console.log(subheading);
    }
    $("main div h3").each(function (index, value) {
      $(".subheadinglist").append("<option value=" + (index + 1) + ">" + $(this).text() + "</option>");
      // $("option").remove();

      // $(".listsubheading").append("<option value=" + (index + 1) +">" + $(this).text() + "</option>")
    });

  });
});                                                               



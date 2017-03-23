$(function() {
  $("form").submit(function(event){


    var s1Input = parseInt($("#side1").val());
    var s2Input = parseInt($("#side2").val());
    var s3Input = parseInt($("#side3").val());
    if (s1Input && s2Input && s3Input)
    {
      if ((s1Input + s2Input <= s3Input) || (s2Input + s3Input <= s1Input) || (s3Input + s1Input <= s2Input))
      {
        $("h3").hide();
        $("#no").show();
      }
      else if ((s1Input === s2Input) && (s2Input=== s3Input))
      {
        $("h3").hide();
        $("#equilateral").show();
      }
      else if ((s1Input === s2Input) || (s2Input=== s3Input) || (s1Input === s3Input))
      {
        $("h3").hide();
        $("#isosceles").show();
      }
      else
      {
        $("h3").hide();
        $("#scalene").show();
      }
    }
    else
    {
      alert("Please fill all information")
    }
    event.preventDefault();
  });
});

h1oddhidden = false;
$(function(){
    alert("aha");
    $("h1:first").click(function(){
        if (h1oddhidden) {
            $("h1:odd").show();
            h1oddhidden = false;
        } else if (!h1oddhidden) {
            $("h1:odd").hide();
            h1oddhidden = true;
        } else {
            console.log("err");
        }
    });
});

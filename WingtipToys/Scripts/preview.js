$(document).ready(function () {
    $("#ImagePath").on("change", function () {
        var files = !!this.files ? this.files : [];
        if (!files.length || !window.FileReader) return; 

        if (/^image/.test(files[0].type)) { 
            var reader = new FileReader(); 
            reader.readAsDataURL(files[0]); 

            reader.onloadend = function () { 

                $("#imgtest").attr('src', this.result);
            }
        }

    });
});
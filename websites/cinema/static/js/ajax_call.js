(function() {

    $(document).ready(function() {
        $('select').material_select();
    });

    var selectedDay;
    var selectedMovie;
    window.onload = function () {
        var daySelect = document.getElementById("day");

        daySelect.onchange = function (e) {
            selectedDay = this.options[this.selectedIndex].value;
            showMovies();
        };

        var movieSelected = document.getElementById("movie");
        movieSelected.onchange = function (e) {
            selectedMovie = this.options[this.selectedIndex].value;

            showButton();

        };
    };

    function showMovies() {
        var mEl = document.getElementById("movies");
        mEl.style.display = "block";
    }


    function showButton() {
        var mEl = document.getElementById("check");
        mEl.style.display = "block";
        mEl.onclick = function () {

            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (this.readyState === 4) {

                    var json = JSON.parse(this.responseText);

                    if(json.length === 0) {
                        message.innerHTML = "This movie is not available this day";
                    } else {
                        message.innerHTML = "";
                        json.forEach(function(current) {
                            var time = current.time;
                            var status = current.status === 0 ? "Fully booked" : "Sites available" ;
                            message.innerHTML += current.time + " : " +status +"<br />";
                        });
                    }


                }

            };
            xhr.open("GET", "/cinema/check?day=" + selectedDay + "&movie=" + selectedMovie);
            xhr.send();
        }
    }
})();

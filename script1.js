function displayMessage() {
    alert("Registration Successful");
}
function videoReady() {
    document.getElementById("videoMessage")
        .innerHTML = "Video ready to play";
}
function getLocation() {

    navigator.geolocation.getCurrentPosition(

        function(position) {

            document.getElementById("location")
                .innerHTML =
                "Latitude: " +
                position.coords.latitude +
                "<br>Longitude: " +
                position.coords.longitude;

        },

        function(error) {

            alert("Location access denied");

        },

        {
            enableHighAccuracy: true
        }

    );
}
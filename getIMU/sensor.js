(function () {

    function getAvailability() {
        if ('Accelerometer' in window) {
            // The `Accelerometer` interface is supported by the browser.
            // Does the device have an accelerometer, though?
            myHeading.textContent = "Hello world!";
        return true;
        }
        else {
            myHeading.textContent = "Bye!";
            return false;
        }
    }

    if (window.MobileDevice == undefined) {
        window.MobileDevice = {};
    }

    window.MobileDevice.getAvailability = getAvailability;
})();






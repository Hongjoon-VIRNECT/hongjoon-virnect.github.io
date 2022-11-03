(function () {

    function getAvailability() {
        if ('Accelerometer' in window) {
            // The `Accelerometer` interface is supported by the browser.
            // Does the device have an accelerometer, though?
            textString = "Accelerometer is available!";
        return textString;
        }
        else {
            textString = "Not available!";
            return textString;
        }
    }

    if (window.MobileDevice == undefined) {
        window.MobileDevice = {};
    }

    window.MobileDevice.getAvailability = getAvailability;
})();

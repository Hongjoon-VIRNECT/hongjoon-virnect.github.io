function checkSensors(){
    document.write("This is sensor information available on your device"+'<br>');

    if ('Accelerometer' in window) {
        // The `Accelerometer` interface is supported by the browser.
        // Does the device have an accelerometer, though?
        document.write("Yes, Acc sensor is available."+'<br>');
    }
    else {
        document.write("No, Acc sensor is not available."+'<br>');
    }

    if ('Gyroscope' in window) {
        document.write("Yes, Gyro sensor is avaialble."+'<br>');
    }
    else {
        document.write("No, Gyro sensor is not available."+'<br>');
    }

    if (window.DeviceOrientationEvent) {
        // for debugging message for iOS
        document.write("Yes, DeviceOrientationEvent is possible"+'<br>');
        window.addEventListener("deviceorientation", (event) => {
            const rotateDegrees = event.alpha; // alpha: rotation around z-axis
            const leftToRight = event.gamma; // gamma: left to right
            const frontToBack = event.beta; // beta: front back motion

            handleOrientationEvent(frontToBack, leftToRight, rotateDegrees);
        }, true);
    }

    const handleOrientationEvent = (frontToBack, leftToRight, rotateDegrees) => {
        // when event is occured the display current values
        document.write('<p>Alpha: ' + rotateDegrees + '<br>' + 'Beta: ' + frontToBack + '<br>' + 'Gamma: ' + leftToRight + '</p>');
    };
}

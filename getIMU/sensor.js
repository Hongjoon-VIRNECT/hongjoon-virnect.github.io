function checkSensors(){
    //document.write("This is sensor information available on your device"+'<br>');

    //if ('Accelerometer' in window) {
    //    // The `Accelerometer` interface is supported by the browser.
    //    // Does the device have an accelerometer, though?
    //    document.write("Yes, Acc sensor is available."+'<br>');
    //}
    //else {
    //    document.write("No, Acc sensor is not available."+'<br>');
    //}

    //if ('Gyroscope' in window) {
    //    document.write("Yes, Gyro sensor is avaialble."+'<br>');
    //}
    //else {
    //    document.write("No, Gyro sensor is not available."+'<br>');
    //}

    if (DeviceMotionEvent.requestPermission) {
    //if (typeof(DeviceMotionEvent) !== "undefined" && typeof(DeviceMotionEvent.requestPermission) === "function") {
        DeviceMotionEvent.requestPermission()
            .then(response => {
                if (response == "granted") {
                    window.addEventListener("deviceorientation", (event) => {
                        const rotateDegrees = event.alpha;
                        const leftToRight = event.gamma;
                        const frontToBack = event.beta;

                        handleOrientationEvent(frontToBack, leftToRight, rotateDegrees);
                    }, true);
                    window.addEventListener("devicemotion", (e) => {
                        const accX = e.accelerationIncludingGravity.x;
                        const accY = e.accelerationIncludingGravity.y;
                        const accZ = e.accelerationIncludingGravity.z;
                        handleOrientationEvent(accX, accY, accZ);
                    }, true);
                } else {
                    alert('Device orientation permission not granted');
                }
            }).catch((err) => {console.log(err)});
    } else {
        alert("Device motion permission access method not available");
    }
//    if (window.DeviceOrientationEvent) {
//        window.addEventListener("deviceorientation", (event) => {
//            const rotateDegrees = event.alpha; // alpha: rotation around z-axis
//            const leftToRight = event.gamma; // gamma: left to right
//            const frontToBack = event.beta; // beta: front back motion
//
//            handleOrientationEvent(frontToBack, leftToRight, rotateDegrees);
//        }, true);
//    } else {
//        console.log("Sorry, your browser doens't support Device Orientation");
//    }

    const handleOrientationEvent = (frontToBack, leftToRight, rotateDegrees, accX, accY, accZ) => {
        // when event is occured the display current values
        //document.write('<p>Alpha: ' + rotateDegrees + '<br>' + 'Beta: ' + frontToBack + '<br>' + 'Gamma: ' + leftToRight + '</p>');
        //var sensorValStr = '<p>Alpha: ' + rotateDegrees + '<br>' + 'Beta: ' + frontToBack + '<br>' + 'Gamma: ' + leftToRight + '</p>';
        //document.getElementById('results').innerHTML = sensorValStr;
        var alphaValStr = 'Alpha: ' + rotateDegrees;
        var gammaValStr = 'Gamma: ' + leftToRight;
        var betaValStr = 'Beta: ' + frontToBack;
        var accXStr = 'X: ' + accX;
        var accYStr = 'Y: ' + accY;
        var accZStr = 'Z: ' + accZ;
        //document.getElementById('rotateDegrees_result').value = alphaValStr;
        //document.getElementById('leftToRight_result').value = gammaValStr;
        //document.getElementById('frontToBack_result').value = betaValStr;
        document.getElementById('rotateDegrees_result').innerHTML = alphaValStr;
        document.getElementById('leftToRight_result').innerHTML = gammaValStr;
        document.getElementById('frontToBack_result').innerHTML = betaValStr;
        document.getElementById('acc_x_result').innerHTML = accXStr;
        document.getElementById('acc_y_result').innerHTML = accYStr;
        document.getElementById('acc_z_result').innerHTML = accZStr;
    };
}

function gyroHandler(e) {
    const rotateDegrees = e.alpha;
    const leftToRight = e.gamma;
    const frontToBack = e.beta;
    return { rotateDegrees, leftToRight, frontToBack }
}

function accelerationHandler(e) {
    const accX = e.acceleration.x;
    const accY = e.acceleration.y;
    const accZ = e.acceleration.z;
    const accInterval = e.interval;
    const accTimeStamp = e.timeStamp;
    return { accX, accY, accZ, accInterval, accTimeStamp }
}

function intervalHandler(interval) {
    var accIntStr  = 'measured interval[ms]: ' + interval;
    document.getElementById("measured_timestamp_result").innerHTML = accIntStr;
}

function checkSensors(){
    let lastReadingTimestamp;
    if (DeviceMotionEvent.requestPermission) {
        DeviceMotionEvent.requestPermission()
            .then(response => {
                if (response == "granted") {
                    window.addEventListener("deviceorientation", (e) => {
                        let {rotateDegrees, leftToRight, frontToBack} = gyroHandler(e);
                        handleOrientationEvent(rotateDegrees, leftToRight, frontToBack);
                    }, true);

                    window.addEventListener("devicemotion", (e) => {
                        let {accX, accY, accZ, accInterval, accTimeStamp} = accelerationHandler(e);
                        if (lastReadingTimestamp) {
                            intervalHandler(Math.round(e.timeStamp - lastReadingTimestamp));
                        }
                        lastReadingTimestamp = e.timeStamp
                        handleMotionEvent(accX, accY, accZ, accInterval, accTimeStamp);
                    }, true);
                } else {
                    alert('Device orientation permission not granted');
                }
            }).catch((err) => {console.log(err)});
    } else {
        //call here again since requestPermission is not supported chrome android 17, call them directly without permission grant
        window.addEventListener("deviceorientation", (e) => {
            let {rotateDegrees, leftToRight, frontToBack} = gyroHandler(e);
            handleOrientationEvent(rotateDegrees, leftToRight, frontToBack);

        }, true);

        window.addEventListener("devicemotion", (e) => {
            let {accX, accY, accZ, accInterval, accTimeStamp} = accelerationHandler(e);
            if (lastReadingTimestamp) {
                intervalHandler(Math.round(e.timeStamp - lastReadingTimestamp));
            }
            lastReadingTimestamp = e.timeStamp
            handleMotionEvent(accX, accY, accZ, accInterval, accTimeStamp);
        }, true);
    }

    const handleOrientationEvent = (frontToBack, leftToRight, rotateDegrees) => {
        var alphaValStr = 'Alpha-yaw(deg): ' + rotateDegrees;
        var gammaValStr = 'Gamma-roll(deg): ' + leftToRight;
        var betaValStr = 'Beta-pitch(deg): ' + frontToBack;
        document.getElementById('rotateDegrees_result').innerHTML = alphaValStr;
        document.getElementById('leftToRight_result').innerHTML = gammaValStr;
        document.getElementById('frontToBack_result').innerHTML = betaValStr;
    };

    const handleMotionEvent = (accX, accY, accZ, accInterval, accTimeStamp) => {
        var accXStr = 'X(m/s^2): ' + accX;
        var accYStr = 'Y(m/s^2): ' + accY;
        var accZStr = 'Z(m/s^2): ' + accZ;
        var accIntervalStr = 'Acc Interval(ms): ' + accInterval;
        var accTimeStampStr= 'Acc Tiemstamp: ' + accTimeStamp;

        document.getElementById('acc_x_result').innerHTML = accXStr;
        document.getElementById('acc_y_result').innerHTML = accYStr;
        document.getElementById('acc_z_result').innerHTML = accZStr;
        document.getElementById('acc_interval_result').innerHTML = accIntervalStr;
        document.getElementById('acc_timestamp_result').innerHTML = accTimeStampStr;
    }
}

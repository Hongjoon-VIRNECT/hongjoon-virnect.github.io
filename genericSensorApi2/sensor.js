function startSensors() {
    let accel = new Accelerometer({ frequency: 1000 });
    accel.addEventListener("reading", () => {
        var accX  = accel.x;
        var accY  = accel.y;
        var accZ  = accel.z;
        //var timeStamp = performance.now();
        var timeStamp = accel.timeStamp;
        var ts = accel.timestamp;
        handleMotionEvent(accX, accY, accZ, timeStamp, ts);
        }, true);
    accel.start();
}

const handleMotionEvent = (accX, accY, accZ, timeStamp, ts) => {
    //var accXStr = 'X(m/s^2): ' + accX;
    //var accYStr = 'Y(m/s^2): ' + accY;
    //var accZStr = 'Z(m/s^2): ' + accZ;
    document.write(timeStamp + ',' + ts + ',' + accX + ',' + accY + ',' + accZ + '<br>');
}

function startSensors() {
    let accel = new Accelerometer({ frequency: 100 });
    accel.addEventListener("reading", () => {
        var accX  = accel.x;
        var accY  = accel.y;
        var accZ  = accel.z;
        //performance.now() and sensor.timeStamp or event.timestamp
        var now = performance.now()
        var ts = accel.timestamp;
        handleMotionEvent(accX, accY, accZ, now, ts);
        }, true);
    accel.start();
}

const handleMotionEvent = (accX, accY, accZ, now, ts) => {
    //var accXStr = 'X(m/s^2): ' + accX;
    //var accYStr = 'Y(m/s^2): ' + accY;
    //var accZStr = 'Z(m/s^2): ' + accZ;
    document.write(ts + ',' + now + ',' + accX + ',' + accY + ',' + accZ + '<br>');
}

function startSensors() {
    let accel = new Accelerometer({ frequency: 1000 });
    accel.addEventListener("reading", () => {
        var accX  = accel.x;
        var accY  = accel.y;
        var accZ  = accel.z;
        //var timeStamp = performance.now();
        var timeStamp = accel.timeStamp;
        handleMotionEvent(accX, accY, accZ, timeStamp);
        }, true);
    accel.start();
}

const handleMotionEvent = (accX, accY, accZ, timeStamp) => {
    //var accXStr = 'X(m/s^2): ' + accX;
    //var accYStr = 'Y(m/s^2): ' + accY;
    //var accZStr = 'Z(m/s^2): ' + accZ;
    document.write(timeStamp + ',' + accX + ',' + accY + ',' + accZ + '<br>');
}

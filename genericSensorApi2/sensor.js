function startSensors() {
    let lastReadingTimestamp;
    let accInterval;
    let accel = new Accelerometer({ frequency: 100 });
    accel.addEventListener("reading", () => {
        if (lastReadingTimestamp) {
            accInterval = Math.round(accel.timestamp - lastReadingTimestamp);
        }
        lastReadingTimestamp = accel.timestamp;
        var accX  = accel.x;
        var accY  = accel.y;
        var accZ  = accel.z;
        handleMotionEvent(accInterval, accX, accY, accZ);
        }, true);
    accel.start();
}

const handleMotionEvent = (accInterval, accX, accY, accZ) => {
    document.write('Freq:100Hz,' + 'interval(ms):' + accInterval + ',' + accX + ',' + accY + ',' + accZ + '<br>');
}

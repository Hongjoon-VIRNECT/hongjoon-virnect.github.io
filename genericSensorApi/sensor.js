function checkSensors(){
    let accelerometer = null;
//    DeviceMotionEvent.requestPermission().then(response => {
//        if (response == 'granted') {
//            alert("DeviceMotionEvent permission granted");
            // Do stuff here
//            if (navigator.userAgent.includes('Chrome') || navigator.userAgent.includes('Safari')) {
//                const accPermission = navigator.permissions.query({ name: 'Accelerometer' });
//                if (accPermission.state === 'granted') {
//                    alert("Accelerometer permission granted")
//                }
//                else {
//                    alert("Accelerometer permission not granted")
//                }
//            }
            try {
                accelerometer = new Accelerometer({ frequency: 200 });
                accelerometer.onerror = (event) => {
                // Handle runtime errors.
                  if (event.error.name === 'NotAllowedError') {
                      alert("Permission to access sensor was denied.");
                      //console.log('Permission to access sensor was denied.');
                  } else if (event.error.name === 'NotReadableError') {
                        alert('Cannot connect to the sensor.');
                        //console.log('Cannot connect to the sensor.');
                  }
                };
                accelerometer.start();
                accelerometer.onreading = () => {
                    //console.log(e);
                    //document.write(e);
                    let x = accelerometer.x;
                    let y = accelerometer.y;
                    let z = accelerometer.z;
                    let interval = accelerometer.interval;
                    document.getElementById("acc_x_result").innerHTML = x;
                    document.getElementById("acc_y_result").innerHTML = y;
                    document.getElementById("acc_z_result").innerHTML = z;
                    document.getElementById("acc_interval_result").innerHTML = interval;

                };
            } catch (error) {
                // Handle construction errors.
                if (error.name === 'SecurityError') {
                    alert('Sensor construction was blocked by the Permissions Policy.');
                    //console.log('Sensor construction was blocked by the Permissions Policy.');
                } else if (error.name === 'ReferenceError') {
                    alert('Sensor is not supported by the User Agent.');
                    //console.log('Sensor is not supported by the User Agent.');
                } else {
                    throw error;
                }
            }
//        }
//    });
}

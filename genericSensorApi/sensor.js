function checkSensors(){
    let accelerometer = null;
    DeviceMotionEvent.requestPermission().then(response => {
        if (response == 'granted') {
            //alert("accelerometer permission granted");
            // Do stuff here
            var userAgent=navigator.userAgent.toLowerCase();
            if (userAgent.indexOf("chrome") != -1 )
            {
                alert('Chrome');
            }
            else if(userAgent.indexOf("safari") != -1)
            {
                alert('Safari');
            } 
            else 
            {
                alert('unknown');
            }
            //if (navigator.userAgent.includes('Chrome')) {
            const accPermission = navigator.permissions.query({ name: 'LinearAccelerationSensor' });
            if (accPermission.state === 'granted') {
                alert("LinearAcceleration permission granted")
            }
            else {
                alert("LinearAcceleration permission not granted")
            }
            //}
            //else {
            //    alert("userAgent check wasn't done")
            //}
            try {
                let hasPermission = false;
                //if (navigator.userAgent.includes('Chrome')) {
                //    const accPermission = navigator.permissions.query({ name: "accelerometer" });
                //    if (accPermission.state === 'granted')
                //        hasPermission = true;
                //}

                accelerometer = new LinearAccelerationSensor({ frequency: 10 });
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
                accelerometer.onreading = (e) => {
                    //console.log(e);
                    document.write(e);
                };
                accelerometer.start();
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
        }
    });
}

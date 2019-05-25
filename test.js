function a() {
    function b() {
        console.log(myVar);
    }
    
    myVar = 2
    b();
}
myVar = 1
a()

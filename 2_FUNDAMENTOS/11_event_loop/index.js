function a() {
  console.log("executing a()");
}

function b() {
  console.log("executing b()");
}

function c() {
  console.log("executing c()");
  a()
  b()
}



c()

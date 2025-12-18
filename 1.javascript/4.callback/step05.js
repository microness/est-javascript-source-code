function a(callback) {
  const aCallback = () => {
    console.log('a() started');
    callback();
  };
  setTimeout(aCallback, 1000);
}
 
function b(callback) {
  const bCallback = () => {
    console.log('b() started');
    callback();
  };
 
  setTimeout(bCallback, 500);
}
 
function c(callback) {
  const cCallback = () => {
    console.log('c() started');
    callback();
  };
 
  setTimeout(cCallback, 1200);
}
 
function aDone() {
  console.log('a() is done!');
}
 
function bDone() {
  console.log('b() is done!');
}
 
function cDone() {
  console.log('c() is done!');
}
 
a(aDone);
b(bDone);
c(cDone);

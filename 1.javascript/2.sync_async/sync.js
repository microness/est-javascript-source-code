function first() {
    console.log('first() called');
};

function someLongWork() {
    // 2초 이상 지연되는 작업
    console.log('Some Long Work Processing..........');    
}

function second() {
    console.log('second() called');
};

first();
someLongWork();
second();
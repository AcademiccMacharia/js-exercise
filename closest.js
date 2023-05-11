function findClosestTo100(value1, value2) {

    const diff1 = Math.abs(value1 - 100);
    const diff2 = Math.abs(value2 - 100);

    if (diff1 < diff2) {
        return value1;
    } else if (diff2 < diff1) {
        return value2;
    }else{
        return "Both are equal";
    }
}

console.log(findClosestTo100(93, 97));

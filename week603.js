const mark = 80;
let message;
if (mark>=80&&mark<= 100) {
    message = `Grade A is ${mark}`;
} else if (mark>=70&&mark<79) {
    message = `Grade B is ${mark}`;
} else if (mark>= 69&&mark<69) {
    massage = `Grade C is ${mark}`;
} else if (mark>= 50&&mark<59) {
    message = `Grade D is ${mark}`;
} else if (mark>=0&&mark<49) {
    message = `Grade F is && ${mark}`;
} else {
    message = `Grade Error is && ${mark}`;
}

console.log(message)

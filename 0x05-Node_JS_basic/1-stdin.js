process.stdin.setEncoding('utf-8');

console.log('Welcome to Holberton School, what is your name?');

if (process.stdin.isTTY) {
  process.stdin.on('data', (chunk) => {
    process.stdout.write(`Your name is: ${chunk}`);
    process.exit();
  });
} else {
  process.stdin.on('data', (chunk) => {
    process.stdout.write(`Your name is: ${chunk}`);
  });
  process.stdin.on('end', () => {
    process.stdout.write('This important software is now closing\n');
  });
}

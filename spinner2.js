const spinner = "|/-\-|\n";

let delay = 500;
for (const char of spinner) {
  setTimeout(() => {
    process.stdout.write("\r"+char);
    // console.log(char);
  }, delay);
  delay += 200;
}

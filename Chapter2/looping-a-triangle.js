// Write a loop that makes seven calls to console.log to output the following
// triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######

function loopTriangle(x) {
  for (let line = "#"; line.length < x; line += "#") console.log(line);
}

loopTriangle(7);

const fs = require("fs");

const input = fs.readFileSync("input.txt", "utf-8").split("\n");

const part1 = (data) => {
    const numbers = data.map(line => line.match(/\d/g)?.map(Number) || [0]);
    console.log(getTotal(numbers))
};

const getTotal = (values) => {
    return values.reduce((sum, current) =>  sum + current.at(0) * 10 + current.at(-1), 0)
}
part1(input);

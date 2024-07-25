import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());


app.get('/', (req: Request, res: Response) => {

    const msg = executeArray();

    //return msg;
    res.send(msg);

});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



interface Person {
    name: string;
    age: number;
    travelPlace: string[];
    expList: number[];

}

function executeArray(): string {

    console.log("[executeArray]");

    // person 1
    const Jack: Person = {
        name: "Jack",
        age: 16,
        travelPlace: ['Thailand', 'Singapore', 'Hongkok'],
        expList: [11, 19, 20]

    }

    // person 2
    const John: Person = {
        name: "John",
        age: 18,
        travelPlace: ['Italy', 'UK', 'Scotland', 'Ireland'],
        expList: [99]
    }

    combineArray(Jack.expList, John.expList);
    combineArray(Jack.travelPlace, John.travelPlace);

    return "test";
}

function combineArray(input1: number[] | string[], input2: number[] | string[]) {
    console.log("[combineArray]");
    console.log(input1, input2);
    let result;

    if (
        Array.isArray(input1) && Array.isArray(input2) &&
        (input1.every(item => typeof item === 'number')) &&
        (input2.every(item => typeof item === 'number'))
    ) {

        // sum all exp
        console.log("sum number");
        const combineNum = [...input1 as number[], ...input2 as number[]];

        result = combineNum.reduce((prev, current) => prev + current, 0);

        console.log(result);


    }
    else if (
        Array.isArray(input1) && Array.isArray(input2) &&
        (input1.every(item => typeof item === 'string')) &&
        (input2.every(item => typeof item === 'string'))
    ) {


        const combineString = [...input1 as string[], ...input2 as string[]];
        // sum all exp
        console.log("combine text");
        result = combineString.join(',') + ',' + input2.join(',');

        console.log(result);

    }
    return result;
}
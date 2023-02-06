import { Expression } from "./Expression";

/**
 * Represent the operation between 2 operands
 */
export abstract class Operation extends Expression {
    private op1: number;
    private op2: number;
    private sign: string;

    constructor(op1: number, op2: number, sign: string) {
        super();
        this.op1 = op1;
        this.op2 = op2;
        this.sign = sign;
    }
}
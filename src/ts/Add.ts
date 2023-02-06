import { Expression } from "./Expression";
import { Operation } from "./Operation";

/**
 * Represent an addition between two operands
 */
export class Add extends Operation {

    constructor(op1: Expression, op2: Expression) {
        super(op1, op2, '+');
    }

    public getRes(): number {
        return this.op1.getRes() + this.op2.getRes();
    }
}
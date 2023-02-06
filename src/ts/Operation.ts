import { Expression } from "./Expression";

/**
 * Represent the operation between 2 operands
 */
export abstract class Operation extends Expression {
    protected op1: Expression;
    protected op2: Expression;
    private sign: string;

    constructor(op1: Expression, op2: Expression, sign: string) {
        super();
        this.op1 = op1;
        this.op2 = op2;
        this.sign = sign;
    }

    public toString(): string {
        return '(' + this.op1.toString() + ') ' + this.sign + ' (' + this.op2.toString()  + ')';
    }
}
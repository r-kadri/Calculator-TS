import { Expression } from "./Expression";

export class Constant extends Expression{
    private constant: number;

    constructor(constant: number) {
        super();
        this.constant = constant;
    }

    public toString(): string {
        return this.constant.toString();
    }

    public getRes(): number {
        return this.constant;
    }
}
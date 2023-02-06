/**
 * Represent an arithmetic expression
 */
export abstract class Expression {

    public abstract getRes(): number;

    public abstract toString(): string;
}
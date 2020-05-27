export default class ASCIIFolder {
    static foldReplacing(str?: string, replacement?: string): string;
    static foldMaintaining(str?: string): string;
    static _fold(str: string, fallback: (str: string) => string): string;
    static mapping: Map<number, string>;
}

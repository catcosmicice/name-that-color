/**
* @author cosmicice <https://cosmicice.cat/>
* @author Chirag Mehta <https://chir.ag/>
* @description Typescript version of Name That Color (http://chir.ag/projects/ntc).
*/
interface ntcOutput {
    color: string;
    name: string;
    isExact: boolean;
}
export declare const ntc: {
    init: () => void;
    name: (color: string) => ntcOutput;
    hsl: (color: string) => Array<number>;
    rgb: (color: string) => Array<number>;
    names: string[][];
};
export {};

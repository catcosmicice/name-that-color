/**
* @author cosmicice <https://cosmicice.cat/>
* @description A Node.js Module based on Name That Color (https://chir.ag/projects/ntc/).
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

/**
* @author cosmicice <https://cosmicice.cat/>
* @author Chirag Mehta <https://chir.ag/>
* @description Typescript version of Name That Color (http://chir.ag/projects/ntc).
*/
export declare const ntc: {
    init: () => void;
    name: (color: string) => Array<string | boolean>;
    hsl: (color: string) => Array<number>;
    rgb: (color: string) => Array<number>;
    names: string[][];
};

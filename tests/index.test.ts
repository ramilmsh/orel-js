import {expect, should, assert} from "chai";

import * as O from "../src/index";

describe("Importing", () => {
    it("UI", () => {
        expect(O.ui.Browser).to.exist;
    });

    it("Utilities", () => {
        expect(O.utils.Logger).to.exist;
        expect(O.utils.Ajax).to.exist;
    });

    it("UIMap", () => {
        expect(O.UIMap).to.exist;
    });
});

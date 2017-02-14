import {expect, should, assert} from "chai";

import Ajax from "../../src/utils/ajax";

describe("utils.Ajax", () => {
    it("Ajax", () => {
        assert.isDefined(Ajax);
        assert.isFunction(Ajax.send);
    });

    describe("Ajax::send()", () => {
        it("parse url", () => {
            Ajax.send({
                url: "",
                success: () => {
                    expect(1).equal(-1);
                }
            });
        });
    });
});

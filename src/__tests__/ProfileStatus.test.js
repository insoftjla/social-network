import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "../components/Profile/ProfileStatus";


describe("ProfileStatus component", () => {
    test("set status in props", () => {
        const component = create(<ProfileStatus status="test status" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("test status");
    });

    test("should be displayed <span>", () => {
        const component = create(<ProfileStatus status="test status" />);
        const instance = component.root;
        let span = instance.findByType("span");
        expect(span.type).toBe("span");
    });

    test("should be displayed <input>", () => {
        const component = create(<ProfileStatus status="test status" />);
        const instance = component.root;
        expect( () => {
            instance.findByType("input")
        }).toThrow();
    });

    test("span value correct ", () => {
        const component = create(<ProfileStatus status="test status" />);
        const instance = component.root;
        let span = instance.findByType("span");
        expect(span.children[0]).toBe("test status");
    });

    let state = {
        editMode: false,
        status: this.props.status
    }

    test("при двойном нажатии на <span> появляется <input>", () => {
        const component = create(<ProfileStatus state={state} status="test status" />);
        const instance = component.root;
        let span = instance.findByType("span");
        span.props.onDoubleClick();
        let input = instance.findByType("input")
        expect(input.type).toBe("input");
    });
});
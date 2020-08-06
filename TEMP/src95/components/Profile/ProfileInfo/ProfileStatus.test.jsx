import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("After creation span should be displayed", () => {
        const component = create(<ProfileStatus status="teststatus" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("teststatus");
    });

    test("After creation span should be displayed with correct length", () => {
        const component = create(<ProfileStatus status="teststatus" />);
        const root = component.root;
        let span = root.findByType("span");
        expect(span).not.toBeNull();
    });

    test("After creation input should not be displayed", () => {
        const component = create(<ProfileStatus status="teststatus" />);
        const root = component.root;
        expect(()=>{
            let input = root.findByType("input");
        }).toThrow();   //throw if no input
    });

    test("After creation span should be displayed with correct status", () => {
        const component = create(<ProfileStatus status="teststatus" />);
        const root = component.root;
        let span = root.findByType("span");
        expect(span.children[0]).toBe("teststatus");
    });

    test("input should be displayed in editMode instead of span", () => {
        const component = create(<ProfileStatus status="teststatus" />);
        const root = component.root;
        let span = root.findByType("span");
        span.props.onDoubleClick();
        let input = root.findByType("input");
        expect(input.props.value).toBe("teststatus");
    });

    test("callback should be called one time", () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status="teststatus" updateStatus={mockCallback}/>);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});

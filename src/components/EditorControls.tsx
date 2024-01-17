import React, {Component} from "react";
import {Tabs} from "@jetbrains/ring-ui-built/components/tabs/tabs";
import Tab from "@jetbrains/ring-ui-built/components/tabs/tab";
import Text from "@jetbrains/ring-ui-built/components/text/text";
import Button from "@jetbrains/ring-ui-built/components/button/button";

type EditorControlsProps = {

}

type EditorControlsState = {

}

class EditorControls extends Component<EditorControlsProps, EditorControlsState> {
    state: EditorControlsState = {

    }

    constructor(props: EditorControlsProps) {
        super(props);
    }

    render() {
        return (
            <div className="ringMod-text ringMod-sidebar-section">
                <Tabs
                    selected={"brush"}
                    autoCollapse>
                    <Tab id="brush" title="Brush">

                    </Tab>
                </Tabs>
            </div>
        );
    }
}

export default EditorControls;
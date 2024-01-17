import React, {Component} from "react";
import {Tabs} from "@jetbrains/ring-ui-built/components/tabs/tabs";
import Tab from "@jetbrains/ring-ui-built/components/tabs/tab";
import Text from "@jetbrains/ring-ui-built/components/text/text";

type NavigationControlsProps = {

}

type NavigationControlsState = {

}

class NavigationControls extends Component<NavigationControlsProps, NavigationControlsState> {
    state: NavigationControlsState = {

    }

    constructor(props: NavigationControlsProps) {
        super(props);
    }

    public render() {
        return (
            <div className="ringMod-text ringMod-sidebar-section">
                <Tabs
                    selected={"player"}
                    autoCollapse>
                    <Tab id="player" title="Player">
                        <Text>Play/Stop/Timestamp</Text>
                    </Tab>
                </Tabs>
            </div>
        );
    }
}

export default NavigationControls;
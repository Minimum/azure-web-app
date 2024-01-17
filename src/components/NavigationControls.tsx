import React, {Component} from "react";
import {Tabs} from "@jetbrains/ring-ui-built/components/tabs/tabs";
import Tab from "@jetbrains/ring-ui-built/components/tabs/tab";

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

    render() {
        return (
            <div className="ringMod-text ringMod-sidebar-section">
                <Tabs
                    selected={"player"}
                    autoCollapse>
                    <Tab id="player" title="Player">

                    </Tab>
                </Tabs>
            </div>
        );
    }
}

export default NavigationControls;
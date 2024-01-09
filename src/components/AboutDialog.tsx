import React from "react";

import Header from '@jetbrains/ring-ui-built/components/header/header';
import Dialog from '@jetbrains/ring-ui-built/components/dialog/dialog';
import {Content} from "@jetbrains/ring-ui-built/components/island/island";
import Theme, {ThemeProvider} from "@jetbrains/ring-ui-built/components/global/theme";

export default function AboutDialog(props: {show : boolean, onClose: any}) {
    const onCloseAttempt = () => {
        props.onClose();
    }

    return (
        <Dialog
            label="About"
            show={props.show}
            onCloseAttempt={onCloseAttempt}
            showCloseButton>
                    <Header>About</Header>
                    <Content>
                        Created by Matt Ross & Rafa
                    </Content>
        </Dialog>
    );
}
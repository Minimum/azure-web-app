import React, {Component} from "react";

import Dialog from '@jetbrains/ring-ui-built/components/dialog/dialog';
import {Content} from "@jetbrains/ring-ui-built/components/island/island";
import Text from "@jetbrains/ring-ui-built/components/text/text";
import Heading from "@jetbrains/ring-ui-built/components/heading/heading";

type AboutDialogProps = {
    show : boolean;
    onClose: any;
}

type AboutDialogState = {
    show: boolean;
}

class AboutDialog extends Component<AboutDialogProps, AboutDialogState> {
    state: AboutDialogState = {
        show: this.props.show
    }

    handleCloseAttempt = () => {
        this.setState({show: false});
        this.props.onClose();
    }

    render() {
        return (
            <Dialog
                label="About"
                show={this.state.show}
                onCloseAttempt={this.handleCloseAttempt}
                showCloseButton>
                <Content>
                    <Heading>About</Heading>
                    <Text size={Text.Size.M}>Created by Matt Ross & Rafa</Text>
                </Content>
            </Dialog>
        );
    }
}

export default AboutDialog;
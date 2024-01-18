import React, {Component} from "react";

import Link from "@jetbrains/ring-ui-built/components/link/link";
import Tray from "@jetbrains/ring-ui-built/components/header/tray";
import TrayIcon from "@jetbrains/ring-ui-built/components/header/tray-icon";
import helpIcon from "@jetbrains/icons/help";
import giftIcon from "@jetbrains/icons/gift";
import settingsIcon from "@jetbrains/icons/settings";
import JBHeader from "@jetbrains/ring-ui-built/components/header/header";
import AboutDialog from "./AboutDialog";

type HeaderProps = {

}

type HeaderState = {
    aboutDialogShow: boolean;
    aboutDialogSeq: number
}

class Header extends Component<HeaderProps, HeaderState> {
    state: HeaderState = {
        aboutDialogShow: false,
        aboutDialogSeq: 0
    }

    constructor(props: HeaderProps) {
        super(props);

        this.handleAboutIconClick = this.handleAboutIconClick.bind(this);
        this.handleAboutDialogClose = this.handleAboutDialogClose.bind(this);
    }

    private handleAboutIconClick(): void {
        this.setState({aboutDialogShow: true, aboutDialogSeq: this.state.aboutDialogSeq + 1});
    }

    private handleAboutDialogClose(): void {
        this.setState({aboutDialogShow: false});
    }

    public render() {
        return (
            <JBHeader className="compactHeader">
                <Link active href="/">Game</Link>
                <Link href="/boards">Boards</Link>
                <Tray>
                    <TrayIcon primary title="Help" icon={helpIcon} />
                    <TrayIcon title="About" icon={giftIcon} onClick={this.handleAboutIconClick} />
                    <TrayIcon title="Settings" icon={settingsIcon} />
                </Tray>
                <AboutDialog key={this.state.aboutDialogSeq} show={this.state.aboutDialogShow} onClose={this.handleAboutDialogClose}/>
            </JBHeader>
        );
    }
}

export default Header;
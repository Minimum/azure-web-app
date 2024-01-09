import React from "react";

import Link from "@jetbrains/ring-ui-built/components/link/link";
import Tray from "@jetbrains/ring-ui-built/components/header/tray";
import TrayIcon from "@jetbrains/ring-ui-built/components/header/tray-icon";
import helpIcon from "@jetbrains/icons/help";
import giftIcon from "@jetbrains/icons/gift";
import settingsIcon from "@jetbrains/icons/settings";
import JBHeader from "@jetbrains/ring-ui-built/components/header/header";
import AboutDialog from "./AboutDialog";

export default function Header() {
    const [showAboutDialog, setShowAboutDialog] = React.useState(false);

    const onAboutIconClick = () => {
        setShowAboutDialog(true);
    };

    const onAboutDialogClose = () => {
        setShowAboutDialog(false);
    };

    return (
        <JBHeader className="compactHeader">
            <Link active href="/">Game</Link>
            <Link href="/boards">Boards</Link>
            <Tray>
                <TrayIcon primary title="Help" icon={helpIcon} />
                <TrayIcon title="About" icon={giftIcon} onClick={onAboutIconClick} />
                <TrayIcon title="Settings" icon={settingsIcon} />
            </Tray>
        <AboutDialog show={showAboutDialog} onClose={onAboutDialogClose}/>
        </JBHeader>
    );
}
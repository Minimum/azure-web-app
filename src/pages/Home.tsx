import React from 'react';
import logo from '../assets/logo.svg';
import '../App.css';

import pencilIcon from '@jetbrains/icons/pencil';

import alertService from "@jetbrains/ring-ui-built/components/alert-service/alert-service";
import Button from "@jetbrains/ring-ui-built/components/button/button";

function Home() {
    return (
    <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <Button icon={pencilIcon} primary={true} onClick={() => alertService.successMessage('Learned')}>
                Learn react :D
            </Button>
            <Button danger={true} onClick={() => alertService.error('Unlearned')}>
                Don't learn react &gt;:D
            </Button>
        </header>
    </div>
);
}

export default Home;

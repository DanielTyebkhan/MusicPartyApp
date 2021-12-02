import React from 'react';

import useCachedResources from './hooks/useCachedResources';
import {HomeScreen} from "./screens/HomeScreen";

const MainAppComponent = () => {
    const isLoadingComplete = useCachedResources();
    if (!isLoadingComplete) {
        return null;
    } else {
        return (
            <HomeScreen />
        );
    }
}

export default MainAppComponent;

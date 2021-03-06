﻿import { useState, useEffect } from 'react';
import { Accuracy, requestPermissionsAsync, watchPositionAsync } from 'expo-location';

export default (shouldTrack, callback) => {

    const [err, setErr] = useState(null);
    const [subscriber, setSubscriber] = useState(null);

    const startWatching = async () => {
        try {
            await requestPermissionsAsync();
            const sub = await watchPositionAsync(
                {
                    accuracy: Accuracy.BestForNavigation,
                    timeInterval: 1000,
                    distanceInterval: 10
                },
                callback
            );
            setSubscriber(sub);
        } catch (e) {
            setErr(e);
        };
    };

    const stopWatching = () => {
        subscriber.remove();
        setSubscriber(null);
    };

    useEffect(() => {
        shouldTrack ? startWatching() : stopWatching();
    }, [shouldTrack]);

    return [err];
}
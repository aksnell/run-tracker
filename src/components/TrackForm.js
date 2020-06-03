import React, { useContext } from 'react';
import { Input, Button } from 'react-native-elements';

import { Context as LocationContext } from '../context/LocationContext';

import Spacer from './Spacer';

import useSaveTrack from '../hooks/useSaveTrack';

const TrackForm = () => {
    
    const { 
        state: { recording, locations }, 
        startRecording, 
        stopRecording, 
        changeName, 
    } = useContext(LocationContext);

    const [saveTrack] = useSaveTrack();

    return (
        <>
            <Spacer>
                <Input 
                    placeholder="Enter Track Name"
                    onChangeText={changeName}
                />
            </Spacer>
            <Spacer>
            {
                recording 
                ? <Button title="Stop" onPress={stopRecording}/> : <Button title="Start Recording" onPress={startRecording}/>
            }
            </Spacer>
            <Spacer>
            {
                !recording && locations.length
                ? <Button title="Save Record" onPress={saveTrack}/> : null
            }
            </Spacer>
        </>
    );
};

export default TrackForm
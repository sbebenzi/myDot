import React, { useEffect, useRef, useState } from 'react';
import { Camera } from 'expo-camera';
import { TouchableOpacity, Text, View, SafeAreaView, Button, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import colors from 'tailwindcss/colors';
import * as MediaLibrary from 'expo-media-library';

export default function CameraComponent(){
  const cameraRef = useRef<Camera>(null);
  const [hasCameraPermission, setHasCameraPermission] = useState<boolean | undefined>(undefined);
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState<boolean | undefined>(undefined);
  const [photo, setPhoto] = useState<{ uri: string, base64: string } | undefined>(undefined);

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === "granted");
      setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
    })();
  }, []);

  if (hasCameraPermission === undefined) {
    return <Text>Requesting permissions...</Text>
  } else if (!hasCameraPermission) {
    return <Text>Permission for camera not granted. Please change this in settings.</Text>
  }

  let takePic = async () => {
    let options = {
      quality: 1,
      base64: true,
      exif: false,
    };

    let newPhoto = await cameraRef.current?.takePictureAsync(options);
    if (newPhoto) {
      setPhoto({ uri: newPhoto.uri, base64: newPhoto.base64! });
    }
  };

  if (photo) {
    let savePhoto = () => {
      MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
        setPhoto(undefined);
      });
    };

    return (
      <SafeAreaView className='flex-1 items-center justify-center'>
        <Image className='flex-1 self-stretch' source={{ uri: "data:image/jpg;base64," + photo.base64 }} />
        {hasMediaLibraryPermission ? 
        <Button title="Save" onPress={savePhoto} /> : undefined}
        <Button title="Discard" onPress={() => setPhoto(undefined)} />
      </SafeAreaView>
    );
  }

  return (
    <Camera className='flex-1 items-center justify-center' ref={cameraRef} ratio="20:9">
      <View className='flex-1 justify-end items-center mb-2'>
        <TouchableOpacity
          activeOpacity={0.7}
          className="h-20 w-20 bg-header rounded-full focus:border-violet-300 items-center flex align-center justify-center"
          onPress={takePic}
        >
          <Feather
            name="aperture"
            color={colors.white}
            size={40}
          />
        </TouchableOpacity>
      </View>
    </Camera>
  );
}
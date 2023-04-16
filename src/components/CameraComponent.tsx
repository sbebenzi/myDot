import React, { useEffect, useRef, useState } from 'react';
import { Camera } from 'expo-camera';
import { TouchableOpacity, Text, View, SafeAreaView, Button, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import colors from 'tailwindcss/colors';
import * as MediaLibrary from 'expo-media-library';
import { useNavigation } from '@react-navigation/native';

export default function CameraComponent() {
  const cameraRef = useRef<Camera>(null);
  const [hasCameraPermission, setHasCameraPermission] = useState<boolean | undefined>(undefined);
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState<boolean | undefined>(undefined);
  const [photo, setPhoto] = useState<{ uri: string, base64: string } | undefined>(undefined);

  const { navigate } = useNavigation();

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === "granted");
      setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
    })();
  }, []);

  if (hasCameraPermission === undefined) {
    return  <View className='flex-1 self-stretch bg-background text-white justify-center items-center'>
    <Text className='text-white w-64'>Requesting permissions...</Text>
    </View>
  } else if (!hasCameraPermission) {
    return <View className='flex-1 self-stretch bg-background text-white justify-center items-center'>
      <View className='flex-row'>
      <Text className='text-white w-64'>Permission for camera not granted. Please change this in settings.</Text>
        <TouchableOpacity
          activeOpacity={0.7}
          className="flex-row h-11 px-4 mr-2 border border-white rounded-lg items-center"
          onPress={() => navigate('home')}
        >
          <Feather
            name="corner-down-left"
            color={colors.white}
            size={20}
          />
        </TouchableOpacity>
      </View>
      </View>
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
        navigate('home');
      });
    };

    return (
      <SafeAreaView className='flex-1 items-center justify-center'>
        <Image className='flex-1 self-stretch' source={{ uri: "data:image/jpg;base64," + photo.base64 }} />
        <View className='flex-row absolute space-x-2.5 justify-end items-end bottom-0 mb-6'>
        {hasMediaLibraryPermission ?
          <TouchableOpacity
            activeOpacity={0.7}
            className="h-16 w-16 bg-header rounded-full focus:border-violet-300 items-center flex align-center justify-center"
            onPress={savePhoto}
          >
            <Feather
              name="save"
              color={colors.white}
              size={40}
            />
          </TouchableOpacity>
          : undefined}
           <TouchableOpacity
            activeOpacity={0.7}
            className="h-16 w-16 bg-header rounded-full focus:border-violet-300 items-center flex align-center justify-center"
            onPress={() => setPhoto(undefined)}
          >
            <Feather
              name="trash"
              color={colors.white}
              size={40}
            />
          </TouchableOpacity>
          </View>
      </SafeAreaView>
    );
  }

  return (
    <Camera className='flex-1 items-center justify-center' ref={cameraRef} ratio="20:9">
      <View className='flex-1 justify-end items-center mb-6'>
        <TouchableOpacity
          activeOpacity={0.7}
          className="h-16 w-16 bg-header rounded-full focus:border-violet-300 items-center flex align-center justify-center"
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
import {
  Modal,
  Pressable,
  View,
  Text,
  TextInput,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from "react-native";
import { FloatingAction } from "react-native-floating-action";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import colors from "tailwindcss/colors";

export function ButtonMenu() {
  const { navigate } = useNavigation();
  const [openModal, setOpenModal] = useState(false);
  const [data, setData] = useState("");

  const actions = [
    {
      icon: require("../../assets/search.png"),
      name: "bt_search",
      color: "#5b21b6",
      position: 2,
    },
    {
      icon: require("../../assets/camera.png"),
      name: "bt_photo",
      color: "#5b21b6",
      position: 1,
    },
  ];

  const renderFloatingAction = () => {
    return (
      <View>
        <FloatingAction
          showBackground={false}
          actions={actions}
          color="#5b21b6"
          onPressItem={(name) => {
            if (name === "bt_search") {
              setOpenModal(true);
            } else if (name == "bt_photo") {
              navigate("camera");
            }
          }}
        />
      </View>
    );
  };

  const handleDigitaData = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    setData(e.nativeEvent.text);
  };

  const renderCloseModal = () => {
    return (
      <View className=" items-end  m-2">
        <View className="items-center border-violet-900 border-2 rounded-[20px] m-2 p-1">
          <Pressable onPress={() => setOpenModal(!openModal)}>
            <Feather name="x" color={colors.white} size={25} />
          </Pressable>
        </View>
      </View>
    );
  };

  const renderButtonConsultar = () => {
    return(
        <View className="items-center border-violet-800 border-2 rounded-[25px] m-2 p-2 bg-violet-800">
          <Pressable onPress={() => {}}>
            <Feather name="search" color={colors.white} size={25} />
          </Pressable>
        </View>
    )
  }

  const renderModal = () => {
    return (
      <View className="">
        <Modal
          animationType="slide"
          transparent={true}
          visible={openModal}
          onRequestClose={() => {
            setOpenModal(!openModal);
          }}
        >
          <View className="w-[80vw] h-[50vh] bg-background  mt-[10vh] ml-[10vw] border-2 border-violet-800 rounded-lg  ">
            {renderCloseModal()}
            <View className="flex-row ml-4">
            <TextInput
              className="h-12 pl-4 rounded-lg bg-zinc-900 text-white focus:border-2 focus:border-violet-800  w-[200px] ml-3 m-2  "
              placeholder="Consulte aqui uma data"
              onChange={handleDigitaData}
              placeholderTextColor={"#f0f2f3"}
            />
            {renderButtonConsultar()}
            </View>
          </View>
        </Modal>
      </View>
    );
  };

  return (
    <View className="absolute right-0 bottom-0">
      {renderFloatingAction()}
      {openModal && renderModal()}
    </View>
  );
}

import {  Text, TextInput, View } from 'react-native';

export default function Login() {

  const renderUserName = () =>{
    return(
      <View>
        <TextInput
        placeholder='UserName'
        />
      </View>
    )
  }
  return (
    <View>
      {renderUserName()}
    </View>
  );
}

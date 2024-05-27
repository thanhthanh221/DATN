import {
  Image,
  ImageStyle,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  GestureResponderEvent,
} from 'react-native';
import React from 'react';

interface CustomButtonProps {
  containerStyle?: ViewStyle;
  icon?: any; // Kiểu dữ liệu của icon có thể là một thành phần React hoặc một hình ảnh (dạng số, đường dẫn hoặc đối tượng require)
  iconStyle?: ImageStyle;
  onPress?: (event: GestureResponderEvent) => void; // Hàm xử lý sự kiện onPress
  disabled?: boolean; // Trạng thái disabled của nút
  network?: boolean; // Đặt true nếu icon là một hình ảnh mạng
}

const IconButton: React.FC<CustomButtonProps> = ({
  containerStyle,
  icon,
  iconStyle,
  onPress,
  disabled,
  network,
}) => {
  return (
    <TouchableOpacity
      style={containerStyle}
      onPress={onPress}
      disabled={disabled}>
      <Image
        style={{
          height: 30,
          width: 30,
          ...iconStyle,
        }}
        source={!network ? icon : {uri: icon}}
      />
    </TouchableOpacity>
  );
};

export default IconButton;

const styles = StyleSheet.create({});

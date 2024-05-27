import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, SIZES, icons} from '../constants/index';

interface HeaderProps {
  leftComponent?: JSX.Element;
  RightComponent?: JSX.Element;
}

const Header: React.FC<HeaderProps> = ({leftComponent, RightComponent}) => {
  return (
    <View
      style={{
        backgroundColor: COLORS.primary,
        height: '22%',
        width: SIZES.width,
        borderBottomLeftRadius: 100,
      }}>
      {/* Icon Screen */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          marginTop: SIZES.base,
        }}>
        {leftComponent}

        {/* Icon App */}
        <View
          style={{
            flexDirection: 'row',
            position: 'absolute',
            left: '32%',
          }}>
          <Image
            source={icons.myfarm}
            style={{
              width: 60,
              height: 60,
              tintColor: COLORS.white2,
            }}
          />
          <Text
            style={{
              marginLeft: SIZES.base,
              textAlign: 'center',
              textAlignVertical: 'center',
              color: COLORS.white,
              fontWeight: '800',
              fontSize: 32,
            }}>
            Hi Farm
          </Text>
        </View>

        {RightComponent}
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});

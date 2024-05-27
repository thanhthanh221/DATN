import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS, constants, icons, SIZES} from '../../constants';
import {Header, IconButton} from '../../components';

type Props = {
  navigation: any;
};

const RemoteControl: React.FC<Props> = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        borderRadius: SIZES.radius,
        backgroundColor:COLORS.lightGray2
      }}>
      <Header
        leftComponent={
          <IconButton
            icon={icons.back}
            iconStyle={{
              height: 33,
              width: 33,
              marginTop: 2,
              tintColor: COLORS.white,
            }}
            onPress={() => navigation.goBack()}
          />
        }
        RightComponent={
          <IconButton
            icon={icons.stack}
            iconStyle={{
              height: 42,
              width: 42,
              marginTop: 10,
              tintColor: COLORS.white,
            }}
            containerStyle={{
              marginLeft: SIZES.width * 0.7,
            }}
          />
        }
      />

      {/* Lable Screen */}
      <View
        style={{
          position: 'absolute',
          marginTop: SIZES.height * 0.1,
          marginLeft: SIZES.width * 0.04,
        }}>
        <Text
          style={{
            color: COLORS.white,
            fontWeight: '800',
            fontSize: 26,
          }}>
          Trung tâm điều khiển
        </Text>
      </View>

      <FlatList
        data={constants.ListRemoteControl}
        keyExtractor={item => item.id.toString()}
        horizontal={false}
        numColumns={3}
        contentContainerStyle={{
          alignItems: 'center',
          flex: 1,
        }}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 70,
                marginHorizontal: item.id % 2 == 1 ? SIZES.width * 0.03 : 0,
              }}>
              <View
                style={{
                  width: SIZES.width * 0.3,
                  height: SIZES.width * 0.23,
                  backgroundColor: COLORS.white,
                  borderRadius: SIZES.radius * 1.2,
                  alignItems: 'center',
                  top: 0,
                }}>
                <View
                  style={{
                    backgroundColor: COLORS.yellow,
                    width: 80,
                    height: 80,
                    borderRadius: 40,
                    borderWidth: 5,
                    borderColor:COLORS.lightGray2,
                    marginTop: -40,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={item.icon}
                    style={{
                      width: 50,
                      height: 50,
                    }}
                  />
                </View>

                {/* Title */}
                <Text
                  style={{
                    marginTop: SIZES.radius,
                    fontWeight: '600',
                    fontSize: 17,
                    color: COLORS.darkBlue,
                  }}>
                  {item.name}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default RemoteControl;

const styles = StyleSheet.create({});

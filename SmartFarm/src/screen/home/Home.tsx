import React from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import {COLORS, SIZES, constants, icons} from '../../constants';
import {Header, IconButton} from '../../components';

const Home: React.FC<Props> = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        borderRadius: SIZES.radius,
      }}>
      <Header
        leftComponent={<View></View>}
        RightComponent={
          <IconButton
            icon={icons.stack}
            iconStyle={{
              height: 47,
              width: 47,
              marginTop: 20,
              tintColor: COLORS.white,
            }}
            containerStyle={{
              marginLeft: SIZES.width * 0.7,
            }}
          />
        }
      />

      <View
        style={{
          position: 'absolute',
          marginTop: '23%',
          marginHorizontal: SIZES.radius * 1.7,
        }}>
        {/* Lable */}
        <View
          style={{
            flexDirection: 'column',
          }}>
          <Text
            style={{
              fontSize: 28,
              fontWeight: '800',
              color: COLORS.white,
            }}>
            Quản lý nông trại của bạn!
          </Text>

          <Text
            style={{
              paddingTop: SIZES.base,
              fontSize: 17,
              fontWeight: '500',
              color: COLORS.white,
            }}>
            Trực tuyến
          </Text>
        </View>

        {/* Features */}
        <FlatList
          data={constants.listFeatureFarm}
          keyExtractor={item => item.id.toString()}
          horizontal={false}
          numColumns={2}
          contentContainerStyle={{
            marginTop: SIZES.radius * 2,
            alignItems: 'center',
            flex: 1,
          }}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                style={{
                  width: SIZES.width * 0.43,
                  height: SIZES.width * 0.43,
                  backgroundColor: COLORS.white,
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                  flexDirection: 'column',
                  borderRadius: SIZES.radius * 2,
                  paddingBottom: 20,
                  marginVertical: SIZES.radius * 1.5,
                  marginHorizontal: SIZES.base,
                }}
                onPress={() => navigation.navigate(item.value)}>
                <Image
                  source={item.imageFeature}
                  style={{
                    width: 80,
                    height: 80,
                    tintColor: COLORS.primary,
                    marginTop: 10,
                  }}
                />
                <View>
                  <Text
                    style={{
                      color: COLORS.primary,
                      fontSize: 22,
                      fontWeight: '400',
                      textAlign: 'center',
                    }}>
                    {item.lableFeature}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Home;

import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {COLORS, icons, SIZES} from '../../constants';
import {Header, IconButton} from '../../components';

type Props = {
  navigation: any; // Thay đổi kiểu tùy thuộc vào cách bạn định nghĩa navigation
};

interface History {
  Id: number;
  Code: string;
  DatimeHistory: Date;
  HistoryData: string;
  Status: boolean;
}

const History: React.FC<Props> = ({navigation}) => {
  const [history, setHistory] = React.useState<History[]>([]);

  useEffect(() => {
    setHistory([
      {
        Id: 1,
        Code: '#11282',
        DatimeHistory: new Date(2024, 10, 17, 20, 15),
        HistoryData: 'Mở vòi bơm, bật quạt mát',
        Status: true,
      },
      {
        Id: 2,
        Code: '#11262',
        DatimeHistory: new Date(2024, 10, 19, 17, 15),
        HistoryData: 'Bật đèn chiếu sáng, tắt mái che',
        Status: true,
      },
      {
        Id: 3,
        Code: '#11265',
        DatimeHistory: new Date(2024, 10, 23, 17, 15),
        HistoryData: 'Mái che, bật bơm nước',
        Status: true,
      },
      {
        Id: 4,
        Code: '#11262',
        DatimeHistory: new Date(2024, 10, 26, 18, 15),
        HistoryData: 'Bật mái che, bật bơm nước',
        Status: false,
      },
    ]);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        borderRadius: SIZES.radius,
      }}>
      <Header
        leftComponent={
          <IconButton
            icon={icons.back}
            iconStyle={{
              height: 35,
              width: 35,
              marginTop: 2,
              tintColor: COLORS.white,
            }}
            onPress={() => navigation.goBack()}
          />
        }
        RightComponent={
          <IconButton
            icon={icons.search}
            iconStyle={{
              height: 35,
              width: 35,
              marginTop: 2,
              tintColor: COLORS.white,
            }}
            containerStyle={{
              marginLeft: SIZES.width * 0.7,
              marginTop: 10,
            }}
          />
        }
      />
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
          LỊCH SỬ
        </Text>
      </View>

      <FlatList
        data={history}
        scrollEnabled={true}
        contentContainerStyle={{
          paddingBottom: 10,
          paddingTop: SIZES.radius,
        }}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                paddingLeft: SIZES.padding,
                marginBottom: 20,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  source={icons.point}
                  style={{
                    tintColor: COLORS.primary,
                    width: 12,
                    height: 12,
                    marginRight: SIZES.radius,
                    marginLeft: -4,
                  }}
                />
                <Text
                  style={{
                    textAlign: 'center',
                    color: COLORS.primary,
                    fontWeight: '800',
                    fontSize: 17,
                  }}>
                  {item.DatimeHistory.getDate()}/
                  {item.DatimeHistory.getMonth() + 1}/
                  {item.DatimeHistory.getFullYear()}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <Image
                  source={icons.dotted_line}
                  style={{
                    tintColor: COLORS.primary,
                    width: 3,
                  }}
                />
                <View
                  style={{
                    backgroundColor: COLORS.white2,
                    width: '90%',
                    marginLeft: SIZES.radius,
                    marginTop: SIZES.base,
                    borderRadius: SIZES.radius * 1.5,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginTop: SIZES.base,
                    }}>
                    <Text
                      style={{
                        color: COLORS.yellow,
                        fontWeight: '900',
                        fontSize: 18,
                        marginLeft: SIZES.radius,
                      }}>
                      {item.Code}
                    </Text>

                    <Text
                      style={{
                        fontWeight: '500',
                        fontSize: 16,
                        marginRight: SIZES.base,
                      }}>
                      {item.DatimeHistory.toTimeString()}
                    </Text>
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: SIZES.radius,
                    }}>
                    <Text
                      style={{
                        marginLeft: SIZES.radius,
                        fontWeight: '500',
                        fontSize: 18,
                        flex: 3,
                      }}>
                      {item.HistoryData}
                    </Text>

                    <Text
                      style={{
                        flex: 1,
                        marginRight: SIZES.base,
                        color: item.Status ? COLORS.green : COLORS.red,
                        fontWeight: '700',
                        fontSize: 16.5,
                      }}>
                      {item.Status ? 'Thành công' : 'Thất bại'}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default History;

const styles = StyleSheet.create({});

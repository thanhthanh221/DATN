import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS, icons, SIZES} from '../../constants';
import {IconButton, TextIconButton} from '../../components';

const AutomationControl: React.FC<Props> = ({navigation}) => {
  const [model, setModel] = React.useState<number>(1);

  const [temperature, setTemperature] = React.useState<number>(0);
  return (
    <View>
      <View
        style={{
          height: SIZES.height * 0.07,
          width: SIZES.width,
          backgroundColor: COLORS.white,
          alignItems: 'center',
          flexDirection: 'row',
          marginBottom: SIZES.radius,
          justifyContent: 'space-between',
        }}>
        {/* Left */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <IconButton
            iconStyle={{
              marginLeft: SIZES.radius,
              marginRight: SIZES.radius * 2,
            }}
            icon={icons.back}
            onPress={() => navigation.goBack()}
          />
          {/* Text header */}
          <Text
            style={{
              fontWeight: '700',
              fontSize: 18,
              color: COLORS.darkGray2,
            }}>
            CHẾ ĐỘ HỆ THỐNG
          </Text>
        </View>
      </View>

      {/* Thông tin thiết lập */}

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: 15,
          marginTop: 10,
        }}>
        {/* Tự động */}
        <TouchableOpacity
          style={{
            width: '37%',
            height: 60,
            backgroundColor: COLORS.primary,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: SIZES.radius * 1.5,
          }}
          onPress={() => setModel(1)}>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: '700',
              fontSize: 20,
              color: COLORS.white,
            }}>
            TỰ ĐỘNG
          </Text>
        </TouchableOpacity>

        {/* Chỉnh tay */}
        <TouchableOpacity
          style={{
            width: '37%',
            height: 60,
            backgroundColor: COLORS.primary,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: SIZES.radius * 1.5,
          }}
          onPress={() => setModel(2)}>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: '700',
              fontSize: 20,
              color: COLORS.white,
            }}>
            CHỈNH TAY
          </Text>
        </TouchableOpacity>
      </View>

      {/* Thiết lập thông số */}

      {model == 1 ? (
        <View
          style={{
            marginTop: 40,
            marginLeft: SIZES.radius,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <Text
              style={{
                width: 100,
                height: 40,
                backgroundColor: COLORS.red,
                textAlign: 'center',
                textAlignVertical: 'center',
                color: COLORS.white,
                borderRadius: SIZES.radius,
                fontWeight: '700',
                fontSize: 15,
              }}>
              Nhiệt độ
            </Text>
            <TextInput
              style={{
                width: 100,
                height: 40,
                backgroundColor: COLORS.green,
                textAlign: 'center',
                textAlignVertical: 'center',
                color: COLORS.white,
                borderRadius: SIZES.radius,
                fontWeight: '700',
                fontSize: 15,
              }}
              keyboardType="numeric"
              value={`${temperature.toString()} °C`}
            />

            <IconButton
              containerStyle={{
                height: 40,
                width: 40,
                backgroundColor: COLORS.lightGray1,
                borderRadius: SIZES.base,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              iconStyle={{
                tintColor: COLORS.green,
              }}
              icon={icons.add}
              onPress={() => setTemperature(temperature + 1)}
            />

            <IconButton
              containerStyle={{
                height: 40,
                width: 40,
                backgroundColor: COLORS.lightGray1,
                borderRadius: SIZES.base,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              iconStyle={{
                tintColor: COLORS.green,
              }}
              icon={icons.minus}
              onPress={() => setTemperature(temperature - 1)}
            />
          </View>

          {/* Độ ẩm */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 20,
            }}>
            <Text
              style={{
                width: 100,
                height: 40,
                backgroundColor: COLORS.blue,
                textAlign: 'center',
                textAlignVertical: 'center',
                color: COLORS.white,
                borderRadius: SIZES.radius,
                fontWeight: '700',
                fontSize: 15,
              }}>
              Độ ẩm
            </Text>

            <TextInput
              style={{
                width: 100,
                height: 40,
                backgroundColor: COLORS.green,
                textAlign: 'center',
                textAlignVertical: 'center',
                color: COLORS.white,
                borderRadius: SIZES.radius,
                fontWeight: '700',
                fontSize: 15,
              }}
              keyboardType="numeric"
              value={`${temperature.toString()} %`}
            />

            <IconButton
              containerStyle={{
                height: 40,
                width: 40,
                backgroundColor: COLORS.lightGray1,
                borderRadius: SIZES.base,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              iconStyle={{
                tintColor: COLORS.green,
              }}
              icon={icons.add}
              onPress={() => setTemperature(temperature + 1)}
            />

            <IconButton
              containerStyle={{
                height: 40,
                width: 40,
                backgroundColor: COLORS.lightGray1,
                borderRadius: SIZES.base,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              iconStyle={{
                tintColor: COLORS.green,
              }}
              icon={icons.minus}
              onPress={() => setTemperature(temperature - 1)}
            />
          </View>

          {/* Độ ẩm đất */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 20,
            }}>
            <Text
              style={{
                width: 100,
                height: 40,
                backgroundColor: COLORS.brown,
                textAlign: 'center',
                textAlignVertical: 'center',
                color: COLORS.white,
                borderRadius: SIZES.radius,
                fontWeight: '700',
                fontSize: 15,
              }}>
              Độ ẩm đất
            </Text>

            <TextInput
              style={{
                width: 100,
                height: 40,
                backgroundColor: COLORS.green,
                textAlign: 'center',
                textAlignVertical: 'center',
                color: COLORS.white,
                borderRadius: SIZES.radius,
                fontWeight: '700',
                fontSize: 15,
              }}
              keyboardType="numeric"
              value={`${temperature.toString()} %`}
            />

            <IconButton
              containerStyle={{
                height: 40,
                width: 40,
                backgroundColor: COLORS.lightGray1,
                borderRadius: SIZES.base,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              iconStyle={{
                tintColor: COLORS.green,
              }}
              icon={icons.add}
              onPress={() => setTemperature(temperature + 1)}
            />

            <IconButton
              containerStyle={{
                height: 40,
                width: 40,
                backgroundColor: COLORS.lightGray1,
                borderRadius: SIZES.base,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              iconStyle={{
                tintColor: COLORS.green,
              }}
              icon={icons.minus}
              onPress={() => setTemperature(temperature - 1)}
            />
          </View>

          {/* Ánh sáng */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 20,
            }}>
            <Text
              style={{
                width: 100,
                height: 40,
                backgroundColor: COLORS.lightGray1,
                textAlign: 'center',
                textAlignVertical: 'center',
                color: COLORS.white,
                borderRadius: SIZES.radius,
                fontWeight: '700',
                fontSize: 15,
              }}>
              Ánh sáng
            </Text>

            <TextInput
              style={{
                width: 100,
                height: 40,
                backgroundColor: COLORS.green,
                textAlign: 'center',
                textAlignVertical: 'center',
                color: COLORS.white,
                borderRadius: SIZES.radius,
                fontWeight: '700',
                fontSize: 15,
              }}
              keyboardType="numeric"
              value={`${temperature.toString()}`}
            />

            <IconButton
              containerStyle={{
                height: 40,
                width: 40,
                backgroundColor: COLORS.lightGray1,
                borderRadius: SIZES.base,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              iconStyle={{
                tintColor: COLORS.green,
              }}
              icon={icons.add}
              onPress={() => setTemperature(temperature + 1)}
            />

            <IconButton
              containerStyle={{
                height: 40,
                width: 40,
                backgroundColor: COLORS.lightGray1,
                borderRadius: SIZES.base,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              iconStyle={{
                tintColor: COLORS.green,
              }}
              icon={icons.minus}
              onPress={() => setTemperature(temperature - 1)}
            />
          </View>

          {/* co2 */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 20,
            }}>
            <Text
              style={{
                width: 100,
                height: 40,
                backgroundColor: COLORS.darkGray2,
                textAlign: 'center',
                textAlignVertical: 'center',
                color: COLORS.white,
                borderRadius: SIZES.radius,
                fontWeight: '700',
                fontSize: 15,
              }}>
              CO2
            </Text>

            <TextInput
              style={{
                width: 100,
                height: 40,
                backgroundColor: COLORS.green,
                textAlign: 'center',
                textAlignVertical: 'center',
                color: COLORS.white,
                borderRadius: SIZES.radius,
                fontWeight: '700',
                fontSize: 15,
              }}
              keyboardType="numeric"
              value={`${temperature.toString()}`}
            />

            <IconButton
              containerStyle={{
                height: 40,
                width: 40,
                backgroundColor: COLORS.lightGray1,
                borderRadius: SIZES.base,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              iconStyle={{
                tintColor: COLORS.green,
              }}
              icon={icons.add}
              onPress={() => setTemperature(temperature + 1)}
            />

            <IconButton
              containerStyle={{
                height: 40,
                width: 40,
                backgroundColor: COLORS.lightGray1,
                borderRadius: SIZES.base,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              iconStyle={{
                tintColor: COLORS.green,
              }}
              icon={icons.minus}
              onPress={() => setTemperature(temperature - 1)}
            />
          </View>

          <TouchableOpacity
            style={{
              marginTop: 35,
              alignItems: 'center',
              width: '100%',
              height: 50,
              backgroundColor: COLORS.green,
              borderRadius: SIZES.radius,
              justifyContent: 'center',
              alignContent: 'center',
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 18,
                fontWeight: '700',
                color: COLORS.white,
              }}>
              GỬI THÔNG SỐ
            </Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
};

export default AutomationControl;

const styles = StyleSheet.create({});

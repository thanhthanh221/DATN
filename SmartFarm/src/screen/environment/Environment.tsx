import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS, icons, SIZES} from '../../constants';
import {Header, IconButton} from '../../components';
import {BaseUri} from '../../utils';

interface EnvStatusData {
  icon: ImageSourcePropType;
  type: string;
  value: string;
}

const Environment: React.FC<Props> = ({navigation}) => {
  const [env, setEnv] = React.useState<Env>({
    SoilHumidity: 0,
    Lux: 0,
    Temperature: 0,
    CO2: 0,
    AirHumidity: 0,
    DatimeUpdate: new Date(),
  });

  React.useEffect(() => {
    BaseUri.get('smartfarm/v1/api/enviroment').then(response => {
      const data = response.data;

      const parsedData: Env = {
        SoilHumidity: data.soilHumidity,
        Lux: data.lux,
        Temperature: data.temperature,
        CO2: data.cO2,
        AirHumidity: data.airHumidity,
        DatimeUpdate: new Date(data.datimeUpdate),
      };
      setEnv(parsedData);

      console.log(data);
    });
  }, []);

  const UpdateDateTimeEnvroment = () => {
    const parsedData: Env = {
      SoilHumidity: env.SoilHumidity,
      Lux: env.Lux,
      Temperature: env.Temperature,
      CO2: env.CO2,
      AirHumidity: env.AirHumidity,
      DatimeUpdate: new Date(),
    };
    setEnv(parsedData);
  };

  const EnvStatus: React.FC<EnvStatusData> = ({icon, type, value}) => {
    return (
      <View
        style={{
          borderWidth: 2,
          borderColor: COLORS.lightGray1,
          borderRadius: SIZES.radius,
          width: '92%',
          height: 43,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: SIZES.radius * 1.5,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            style={{
              width: 33,
              height: 33,
              marginLeft: SIZES.radius,
              marginRight: SIZES.radius * 1.5,
            }}
            source={icon}
          />
          <Text
            style={{
              fontWeight: '500',
              fontSize: 16,
              color: COLORS.darkGray,
            }}>
            {type}
          </Text>
        </View>

        {/* Value */}
        <Text
          style={{
            fontWeight: '700',
            fontSize: 16,
            marginRight: SIZES.radius,
            color: COLORS.green,
          }}>
          {value}
        </Text>
      </View>
    );
  };

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
      {/* Lable */}
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
          MÔI TRƯỜNG
        </Text>
      </View>

      {/* Enviroment */}

      <View
        style={{
          flex: 1,
          marginTop: '10%',
          alignItems: 'center', // căn giữa theo chiều ngang
        }}>
        <View
          style={{
            backgroundColor: COLORS.white,
            width: SIZES.width * 0.88,
            height: SIZES.height * 0.56,
            borderRadius: SIZES.radius * 2,
          }}>
          <View
            style={{
              height: '13%',
              borderBottomWidth: 1,
              borderColor: COLORS.lightGray1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 10,
            }}>
            <Text
              style={{
                color: COLORS.primary,
                fontWeight: '600',
                fontSize: 20,
                marginLeft: 17,
              }}>
              Thông tin môi trường
            </Text>

            {/* Settings */}
            <Image
              source={icons.settings}
              style={{
                width: 28,
                height: 28,
                marginRight: 17,
              }}
            />
          </View>

          {/* Value And Status */}
          <View
            style={{
              alignItems: 'center',
              marginTop: SIZES.radius,
              marginBottom: SIZES.base,
              borderBottomWidth: 1,
              borderColor: COLORS.lightGray1,
            }}>
            <EnvStatus
              icon={icons.treeandsoil}
              type="Độ ẩm đất"
              value={env.SoilHumidity.toString()}
            />
            <EnvStatus
              icon={icons.temperature}
              type="Nhiệt độ"
              value={env.Temperature + ' °C'}
            />
            <EnvStatus
              icon={icons.lux}
              type="Ánh sáng"
              value={env.Lux.toString()}
            />
            <EnvStatus
              icon={icons.CO2}
              type="Nồng độ CO2"
              value={env.CO2.toString()}
            />
            <EnvStatus
              icon={icons.airHumidity}
              type="Độ ẩm không khí"
              value={env.AirHumidity + '%'}
            />
          </View>

          {/* Time và ngày cập nhật */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 4,
            }}>
            {/* Datime Last Update */}
            <Text
              style={{
                marginTop: SIZES.base - 3,
                fontWeight: '500',
                fontSize: 18,
                color: COLORS.darkGray,
              }}>
              {env.DatimeUpdate.getDate()}/{env.DatimeUpdate.getMonth() + 1}/
              {env.DatimeUpdate.getFullYear()} - {env.DatimeUpdate.getHours()}:
              {env.DatimeUpdate.getMinutes()}
            </Text>

            {/* Update now */}
            <TouchableOpacity
              style={{
                backgroundColor: COLORS.yellow,
                width: '30%',
                height: 35,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: SIZES.base,
              }}
              onPress={() => UpdateDateTimeEnvroment()}>
              <Text
                style={{
                  color: COLORS.white,
                  fontSize: 15,
                  fontWeight: '600',
                }}>
                Cập nhật ngay
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Environment;

const styles = StyleSheet.create({});

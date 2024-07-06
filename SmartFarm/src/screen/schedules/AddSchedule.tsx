import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS, icons, SIZES} from '../../constants';
import {IconButton} from '../../components';
import {BaseUri} from '../../utils';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const AddSchedule: React.FC<Props> = ({navigation}) => {
  const [checkBlowerFan, setcheckBlowerFan] = React.useState(false);
  const [checkExhaustFan, setCheckExhaustFan] = React.useState(false);
  const [checkPump, setCheckPump] = React.useState(false);
  const [checkLight, setCheckLight] = React.useState(false);
  const [checkMeshCover, setCheckMeshCover] = React.useState(false);
  const [date, setDate] = React.useState<Date>();

  const [isDatePickerVisible, setDatePickerVisibility] =
    React.useState<boolean>(false);

  const showDatePicker = (): void => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = (): void => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date): void => {
    hideDatePicker();
    setDate(date);

    console.log(date);
  };

  const CreateNewSchedule = () => {
    BaseUri.post('/smartfarm/v1/api/schedule', {
      statusSchedule: 0,
      infomations: [
        {
          infomation: 'QUẠT THỔI',
          status: checkBlowerFan,
        },
        {
          infomation: 'QUẠT HÚT',
          status: checkExhaustFan,
        },
        {
          infomation: 'BƠM NƯỚC',
          status: checkPump,
        },
        {
          infomation: 'ĐÈN ĐIỆN',
          status: checkLight,
        },
        {
          infomation: 'LƯỚI CHE',
          status: checkMeshCover,
        },
      ],
      dateTimeAction: date,
    });
  };

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
            THÊM SCRPIT
          </Text>
        </View>

        <TouchableOpacity
          style={{
            marginLeft: SIZES.radius,
            marginRight: SIZES.radius * 2,
          }}
          onPress={() => navigation.navigate('addschedule')}>
          <TouchableOpacity onPress={() => CreateNewSchedule()}>
            <Text
              style={{
                fontWeight: '700',
                fontSize: 18,
                color: COLORS.primary,
              }}>
              SAVE
            </Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>

      {/* Infomation */}
      <View
        style={{
          marginTop: 20,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: COLORS.primary,
            width: SIZES.width * 0.9,
            marginLeft: SIZES.radius,
            height: 50,
            marginBottom: 30,
            borderRadius: SIZES.radius,
            justifyContent: 'center',
          }}
          onPress={showDatePicker}>
          <Text
            style={{
              color: COLORS.white,

              textAlign: 'center',
              fontWeight: '700',
              fontSize: 18,
            }}>
            {date ? date.toDateString(): "THỜI GIAN"}
          </Text>
        </TouchableOpacity>

        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
        {/* Quạt thổi */}
        <View
          style={{
            height: 60,
            width: SIZES.width * 0.9,
            backgroundColor: COLORS.white,
            marginLeft: SIZES.radius,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderRadius: SIZES.radius,
          }}>
          <Text
            style={{
              color: COLORS.primary,
              fontWeight: '600',
              fontSize: 20,
              marginLeft: 20,
            }}>
            QUẠT THỔI
          </Text>
          <TouchableOpacity
            style={{
              width: 35,
              height: 35,
              borderWidth: 2,
              borderColor: COLORS.primary,
              borderRadius: SIZES.base,
              marginRight: 20,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: checkBlowerFan ? COLORS.primary : COLORS.white,
            }}
            onPress={() => setcheckBlowerFan(!checkBlowerFan)}>
            {checkBlowerFan ? (
              <Image
                source={icons.checkTrue}
                style={{
                  width: 25,
                  height: 25,
                  tintColor: COLORS.white,
                }}
              />
            ) : null}
          </TouchableOpacity>
        </View>
        {/* QUẠT HÚT */}
        <View
          style={{
            height: 60,
            width: SIZES.width * 0.9,
            backgroundColor: COLORS.white,
            marginLeft: SIZES.radius,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderRadius: SIZES.radius,
            marginTop: 40,
          }}>
          <Text
            style={{
              color: COLORS.primary,
              fontWeight: '600',
              fontSize: 20,
              marginLeft: 20,
            }}>
            QUẠT HÚT
          </Text>
          <TouchableOpacity
            style={{
              width: 35,
              height: 35,
              borderWidth: 2,
              borderColor: COLORS.primary,
              borderRadius: SIZES.base,
              marginRight: 20,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: checkExhaustFan ? COLORS.primary : COLORS.white,
            }}
            onPress={() => setCheckExhaustFan(!checkExhaustFan)}>
            {checkExhaustFan ? (
              <Image
                source={icons.checkTrue}
                style={{
                  width: 25,
                  height: 25,
                  tintColor: COLORS.white,
                }}
              />
            ) : null}
          </TouchableOpacity>
        </View>
        {/* Bơm */}
        <View
          style={{
            height: 60,
            width: SIZES.width * 0.9,
            backgroundColor: COLORS.white,
            marginLeft: SIZES.radius,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderRadius: SIZES.radius,
            marginTop: 40,
          }}>
          <Text
            style={{
              color: COLORS.primary,
              fontWeight: '600',
              fontSize: 20,
              marginLeft: 20,
            }}>
            BƠM NƯỚC
          </Text>
          <TouchableOpacity
            style={{
              width: 35,
              height: 35,
              borderWidth: 2,
              borderColor: COLORS.primary,
              borderRadius: SIZES.base,
              marginRight: 20,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: checkPump ? COLORS.primary : COLORS.white,
            }}
            onPress={() => setCheckPump(!checkPump)}>
            {checkPump ? (
              <Image
                source={icons.checkTrue}
                style={{
                  width: 25,
                  height: 25,
                  tintColor: COLORS.white,
                }}
              />
            ) : null}
          </TouchableOpacity>
        </View>
        {/* Đèn */}
        <View
          style={{
            height: 60,
            width: SIZES.width * 0.9,
            backgroundColor: COLORS.white,
            marginLeft: SIZES.radius,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderRadius: SIZES.radius,
            marginTop: 40,
          }}>
          <Text
            style={{
              color: COLORS.primary,
              fontWeight: '600',
              fontSize: 20,
              marginLeft: 20,
            }}>
            ĐÈN ĐIỆN
          </Text>
          <TouchableOpacity
            style={{
              width: 35,
              height: 35,
              borderWidth: 2,
              borderColor: COLORS.primary,
              borderRadius: SIZES.base,
              marginRight: 20,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: checkLight ? COLORS.primary : COLORS.white,
            }}
            onPress={() => setCheckLight(!checkLight)}>
            {checkLight ? (
              <Image
                source={icons.checkTrue}
                style={{
                  width: 25,
                  height: 25,
                  tintColor: COLORS.white,
                }}
              />
            ) : null}
          </TouchableOpacity>
        </View>
        {/* Lưới che */}
        <View
          style={{
            height: 60,
            width: SIZES.width * 0.9,
            backgroundColor: COLORS.white,
            marginLeft: SIZES.radius,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderRadius: SIZES.radius,
            marginTop: 40,
          }}>
          <Text
            style={{
              color: COLORS.primary,
              fontWeight: '600',
              fontSize: 20,
              marginLeft: 20,
            }}>
            LƯỚI CHE
          </Text>
          <TouchableOpacity
            style={{
              width: 35,
              height: 35,
              borderWidth: 2,
              borderColor: COLORS.primary,
              borderRadius: SIZES.base,
              marginRight: 20,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: checkMeshCover ? COLORS.primary : COLORS.white,
            }}
            onPress={() => setCheckMeshCover(!checkMeshCover)}>
            {checkMeshCover ? (
              <Image
                source={icons.checkTrue}
                style={{
                  width: 25,
                  height: 25,
                  tintColor: COLORS.white,
                }}
              />
            ) : null}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AddSchedule;

const styles = StyleSheet.create({});

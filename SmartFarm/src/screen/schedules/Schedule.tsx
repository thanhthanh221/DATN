import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, icons, SIZES} from '../../constants';
import {IconButton} from '../../components';

type Props = {
  navigation: any;
};
export interface ScheduleSmartFarm {
  id: number;
  statusSchedule: number;
  infomations: Action[];
  dateTimeAction: Date;
  status: boolean;
}
export interface Action {
  infomation: string;
  status: boolean;
}

const Schedule: React.FC<Props> = ({navigation}) => {
  const scheduleAll: ScheduleSmartFarm[] = [
    {
      id: 1,
      statusSchedule: 1,
      infomations: [
        {
          infomation: 'Bật máy bơm nước',
          status: true,
        },
        {
          infomation: 'Bật máy bơm nước',
          status: true,
        },
      ],
      dateTimeAction: new Date(2024, 11, 28, 11, 30),
      status: true,
    },
    {
      id: 2,
      statusSchedule: 2,
      infomations: [
        {
          infomation: 'Bật máy bơm nước',
          status: true,
        },
        {
          infomation: 'Bật máy bơm nước',
          status: true,
        },
      ],
      dateTimeAction: new Date(2024, 11, 28, 11, 30),
      status: true,
    },
    {
      id: 3,
      statusSchedule: 2,
      infomations: [
        {
          infomation: 'Bật máy bơm nước',
          status: true,
        },
        {
          infomation: 'Bật máy bơm nước',
          status: true,
        },
      ],
      dateTimeAction: new Date(2024, 11, 28, 11, 30),
      status: true,
    },
    {
      id: 4,
      statusSchedule: 2,
      infomations: [
        {
          infomation: 'Bật máy bơm nước',
          status: true,
        },
        {
          infomation: 'Bật máy bơm nước',
          status: true,
        },
      ],
      dateTimeAction: new Date(2024, 11, 28, 11, 30),
      status: true,
    },
  ];
  const [schedulePage, setSchedule] =
    React.useState<ScheduleSmartFarm[]>(scheduleAll);

  return (
    <View>
      {/* Header */}
      <View
        style={{
          height: SIZES.height * 0.07,
          width: SIZES.width,
          backgroundColor: COLORS.white,
          alignItems: 'center',
          flexDirection: 'row',
          marginBottom: SIZES.radius,
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
          LỊCH TRÌNH
        </Text>
      </View>

      {/* Schedule */}
      <View
        style={{
          marginLeft: SIZES.radius,
        }}>
        <View
          style={{
            backgroundColor: COLORS.primary,
            width: SIZES.width * 0.5,
            height: 40,
            borderTopRightRadius: 20,
            borderBottomRightRadius: 20,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              marginLeft: SIZES.radius,
              color: COLORS.white,
              fontWeight: '600',
              fontSize: 16,
            }}>
            05/5/2024 - 10:30:00
          </Text>
        </View>

        {/* Bot */}
        <View
          style={{
            flexDirection: 'row',
          }}>
          {/* Line */}
          <View
            style={{
              height: 400,
              width: 1,
              backgroundColor: COLORS.primary,
            }}
          />
          {/* Status */}
          <View
            style={{
              width: SIZES.width * 0.87,
              height: 300,
              backgroundColor: COLORS.white,
              marginTop: SIZES.radius * 2,
              marginLeft: SIZES.radius * 2,
              borderRadius: SIZES.radius * 2,
            }}>
            <Image
              source={icons.schedule}
              style={{
                width: 45,
                height: 45,
                tintColor: COLORS.primary,
                marginRight: SIZES.radius,
                left: '80%',
                top: 20,
              }}
            />

            {/* Thông tin lịch */}
            <Text
              style={{
                marginLeft: SIZES.radius * 1.4,
                fontSize: 15,
              }}>
              Thông tin:
            </Text>

            <View
              style={{
                top: '44%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginHorizontal: SIZES.radius * 2,
              }}>
              <View>
                <Text
                  style={{
                    color: COLORS.primary,
                    fontWeight: '700',
                    fontSize: 16,
                  }}>
                  Đang chạy !
                </Text>
              </View>

              {/* Cancel */}

              <TouchableOpacity
                style={{
                  backgroundColor: COLORS.yellow,
                  width: 100,
                  height: 45,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: SIZES.radius,
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '800',
                    color: COLORS.lightGray2,
                  }}>
                  Hủy
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View
          style={{
            backgroundColor: COLORS.primary,
            width: SIZES.width * 0.5,
            height: 40,
            borderTopRightRadius: 20,
            borderBottomRightRadius: 20,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              marginLeft: SIZES.radius,
              color: COLORS.white,
              fontWeight: '600',
              fontSize: 16,
            }}>
            05/5/2024 - 10:30:00
          </Text>
        </View>

        {/* Line */}
        <View
          style={{
            height: 400,
            width: 1,
            backgroundColor: COLORS.primary,
          }}
        />
      </View>
    </View>
  );
};

export default Schedule;

const styles = StyleSheet.create({});

import {
  FlatList,
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
import {Loading} from '../../utils/utils';

const Schedule: React.FC<Props> = ({navigation}) => {
  const [schedulePage, setSchedule] = React.useState<ScheduleSmartFarm[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    BaseUri.get('smartfarm/v1/api/schedule?take=20&skip=0').then(response => {
      const data = response.data;

      // Convert to ScheduleSmartFarm objects and save to user state
      const schedules: ScheduleSmartFarm[] = data.map((item: any) => ({
        id: item.id, // Ensure this is a number
        statusSchedule: item.statusSchedule || 0, // Default value or ensure this is a number
        infomations: item.infomations.map((info: any) => ({
          infomation: info.infomation,
          status: info.status,
        })),
        dateTimeAction: new Date(item.dateTimeAction),
        status: item.status || false, // Default value or ensure this is a boolean
      }));

      setIsLoading(false);
      setSchedule(schedules);
    });
  }, [schedulePage]);

  if (isLoading) {
    return <Loading />;
  }

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
            LỊCH TRÌNH
          </Text>
        </View>

        <IconButton
          iconStyle={{
            marginLeft: SIZES.radius,
            marginRight: SIZES.radius * 2,
          }}
          icon={icons.add}
          onPress={() => navigation.navigate('addschedule')}
        />
      </View>

      {/* Schedule */}
      <FlatList
        data={schedulePage}
        keyExtractor={item => item.id}
        contentContainerStyle={{
          marginTop: SIZES.base,
          paddingBottom: 200,
        }}
        renderItem={({item}) => {
          return (
            <View>
              <View
                style={{
                  backgroundColor: COLORS.primary,
                  width: SIZES.width * 0.5,
                  height: 45,
                  borderTopRightRadius: 20,
                  borderBottomRightRadius: 20,
                  justifyContent: 'center',
                  marginLeft: SIZES.base,
                }}>
                <Text
                  style={{
                    marginLeft: SIZES.radius,
                    color: COLORS.white,
                    fontWeight: '600',
                    fontSize: 16,
                  }}>
                  {`${item.dateTimeAction.getDate()}/${item.dateTimeAction.getMonth()}/${item.dateTimeAction.getFullYear()} - ${item.dateTimeAction.getHours()}:${item.dateTimeAction.getMinutes()}:${item.dateTimeAction.getSeconds()}`}
                </Text>
              </View>

              {/* Status */}
              <View
                style={{
                  width: SIZES.width * 0.87,
                  backgroundColor: COLORS.white,
                  marginTop: SIZES.radius * 2,
                  marginLeft: SIZES.radius * 2,
                  borderRadius: SIZES.radius * 2,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  minHeight: 130,
                  height: 170,
                  borderWidth: 1,
                }}>
                <View>
                  {item.infomations.map((i, index) => {
                    return (
                      <View
                        key={`check-${index}`}
                        style={{
                          flexDirection: 'row',
                          marginLeft: SIZES.radius * 2,
                          alignItems: 'center',
                          marginVertical: 5,
                        }}>
                        <Text
                          style={{
                            fontSize: 18,
                            fontWeight: '600',
                            marginRight: 10,
                          }}>
                          {i.infomation} :
                        </Text>
                        <Text
                          style={{
                            color: i.status ? COLORS.primary : COLORS.red,
                            fontSize: 18,
                            fontWeight: '700',
                          }}>
                          {i.status ? 'BẬT' : 'TẮT'}
                        </Text>
                      </View>
                    );
                  })}
                </View>

                <Image
                  source={icons.schedule}
                  style={{
                    width: 45,
                    height: 45,
                    tintColor: COLORS.primary,
                    marginRight: SIZES.radius,
                  }}
                />
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginHorizontal: SIZES.radius * 2,
                  marginTop: 10,
                  marginBottom: 20,
                }}>
                <Text
                  style={{
                    color:
                      item.statusSchedule == 0
                        ? COLORS.primary
                        : item.statusSchedule == 1
                        ? COLORS.orange
                        : item.statusSchedule == 2
                        ? COLORS.red
                        : item.statusSchedule == 3
                        ? COLORS.primary
                        : COLORS.primary,
                    fontWeight: '700',
                    fontSize: 18,
                  }}>
                  {item.statusSchedule == 0
                    ? 'Đang chạy !'
                    : item.statusSchedule == 1
                    ? 'Đang chờ !'
                    : item.statusSchedule == 2
                    ? 'Đã hủy !'
                    : item.statusSchedule == 3
                    ? 'Hoàn thành !'
                    : 'Trạng thái không xác định !'}
                </Text>

                {/* Cancel */}

                <TouchableOpacity
                  style={{
                    backgroundColor:
                      item.statusSchedule === 1
                        ? COLORS.yellow
                        : COLORS.lightGray2,
                    width: 100,
                    height: 45,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: SIZES.radius,
                  }}
                  disabled={item.statusSchedule !== 1}>
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
          );
        }}
      />
    </View>
  );
};

export default Schedule;

const styles = StyleSheet.create({});

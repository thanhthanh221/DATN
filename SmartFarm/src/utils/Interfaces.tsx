type Props = {
  navigation: any; // Thay đổi kiểu tùy thuộc vào cách bạn định nghĩa navigation
};

interface ScheduleSmartFarm {
  id: string;
  statusSchedule: number;
  infomations: Action[];
  dateTimeAction: Date;
}
interface Action {
  infomation: string;
  status: boolean;
}

interface Env {
  SoilHumidity: number;
  Temperature: number;
  Lux: number;
  CO2: number;
  AirHumidity: number;
  DatimeUpdate: Date;
}

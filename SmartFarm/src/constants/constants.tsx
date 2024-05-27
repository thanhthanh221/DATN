import icons from './icons';

const listFeatureFarm = [
  {
    id: 0,
    value: 'remoteControl',
    imageFeature: icons.home,
    lableFeature: 'Điều Khiển',
  },
  {
    id: 1,
    value: 'environment',
    imageFeature: icons.environmentstatus,
    lableFeature: 'Trạng thái môi trường',
  },
  {
    id: 2,
    value: 'schedule',
    imageFeature: icons.schedule,
    lableFeature: 'Lập lịch',
  },
  {
    id: 3,
    value: 'history',
    imageFeature: icons.history,
    lableFeature: 'Lịch sử',
  },
  {
    id: 4,
    value: 'script',
    imageFeature: icons.script,
    lableFeature: 'Lịch trình',
  },
  {
    id: 5,
    value: 'technique',
    imageFeature: icons.technique,
    lableFeature: 'Kĩ thuật',
  },
];

const ListRemoteControl = [
  {
    id: 1,
    name: 'Tự động',
    icon: icons.integration,
  },
  {
    id: 2,
    name: 'Fan',
    icon: icons.fan,
  },
  {
    id: 3,
    name: 'Điều chỉnh PH',
    icon: icons.ph,
  },
  {
    id: 4,
    name: 'Lập lịch',
    icon: icons.schedule,
  },
  {
    id: 5,
    name: 'Trạng thái',
    icon: icons.settings,
  },
  {
    id: 6,
    name: 'Quá trình',
    icon: icons.script,
  },
  {
    id: 7,
    name: 'integration',
    icon: icons.treeandsoil,
  },
  {
    id: 8,
    name: 'integration',
    icon: icons.treeandsoil,
  },
  {
    id: 9,
    name: 'integration',
    icon: icons.treeandsoil,
  },
];

export default {
  listFeatureFarm,
  ListRemoteControl,
};

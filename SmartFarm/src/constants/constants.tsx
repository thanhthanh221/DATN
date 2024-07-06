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
    navigation: "automationcontrol"
  },
  {
    id: 2,
    name: 'Fan',
    icon: icons.fan,
    navigation: "AutomationControl"
  },
  {
    id: 3,
    name: 'Điều chỉnh PH',
    icon: icons.ph,
    navigation: "AutomationControl"

  },
  {
    id: 4,
    name: 'Lập lịch',
    icon: icons.schedule,
    navigation: "AutomationControl"

  },
  {
    id: 5,
    name: 'Trạng thái',
    icon: icons.settings,
    navigation: "AutomationControl"

  },
  {
    id: 6,
    name: 'Quá trình',
    icon: icons.script,
    navigation: "AutomationControl"

  },
  {
    id: 7,
    name: 'integration',
    icon: icons.treeandsoil,
    navigation: "AutomationControl"
  },
  {
    id: 8,
    name: 'integration',
    icon: icons.treeandsoil,
    navigation: "AutomationControl"

  },
  {
    id: 9,
    name: 'integration',
    icon: icons.treeandsoil,
    navigation: "AutomationControl"
  },
];

const ListCheckSchedule = [
  {
    id: 1,
    name: 'QUẠT GIÓ',
    check: false,
  },
  {
    id: 2,
    name: 'BƠM NƯỚC',
    check: false,
  },
  {
    id: 3,
    name: 'ĐÈN',
    check: false,
  },
];

export default {
  listFeatureFarm,
  ListRemoteControl,
  ListCheckSchedule,
};

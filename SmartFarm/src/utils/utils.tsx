import axios from 'axios';
import {ActivityIndicator, View} from 'react-native';
import {COLORS} from '../constants';

const BaseUri = axios.create({
  baseURL: 'http://10.0.2.2:5116/',
});

const Loading: React.FC = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ActivityIndicator size="large" color={COLORS.primary} />
    </View>
  );
};

export default BaseUri;

export {Loading};

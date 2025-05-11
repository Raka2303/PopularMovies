import {Dimensions, PixelRatio} from 'react-native';

export const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} =
  Dimensions.get('window');

const wscale: number = SCREEN_WIDTH / 430;

export default function normalize(size: number) {
  const newSize = size * wscale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

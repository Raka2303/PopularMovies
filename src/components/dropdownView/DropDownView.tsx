import React, {FC} from 'react';
import {View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {useStyles} from '@customHooks/useStyles';
import DropDownViewStyle from './DropDownViewStyle';
import {IDropDown} from './types';
import CText from '@components/cText/CText';
import CTextStyles from '@components/cText/CTextStyles';
import { useTheme } from '@customHooks/useTheme';

interface IDropDownViewProps {
  dropDownTitle: string;
  dropDownData: IDropDown[];
  selectedOption: string;
  setSelectedOption: (value: string) => void;
}

const DropDownView: FC<IDropDownViewProps> = ({
  dropDownTitle,
  dropDownData,
  selectedOption,
  setSelectedOption,
}) => {
  const dropDownStyles = useStyles(DropDownViewStyle);
  const fontStyles = useStyles(CTextStyles);
  //   const [selectedOption, setSelectedOption] = useState('option1');

  return (
    <View style={dropDownStyles.container}>
      <CText.SubHeaderText style={dropDownStyles.label}>{dropDownTitle}</CText.SubHeaderText>
      <View style={dropDownStyles.pickerWrapper}>
      <Picker
        selectedValue={selectedOption}
        onValueChange={optionValue => setSelectedOption(optionValue)}
        style={dropDownStyles.picker}
        dropdownIconColor={useTheme().text}
        >
        {dropDownData.map(option => (
          <Picker.Item  key={option.key} label={option.label} value={option.value} style={[fontStyles.subHeaderText,{backgroundColor:'red'}]} />
        ))}
      </Picker>
      </View>
    </View>
  );
};

export default DropDownView;

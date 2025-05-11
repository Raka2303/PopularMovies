import { ThemeType } from '@customHooks/useTheme';
import normalize from '@utils/utilities';
import { StyleSheet } from 'react-native';

export default (theme:ThemeType) => {
    return StyleSheet.create({
      headerText:{
       fontSize:normalize(26),
       fontWeight:'700',
       color:theme.text,
      },
      subHeaderText:{
        fontSize:normalize(14),
        fontWeight:'500',
        color:theme.text,
       },
       paraText:{
        fontSize:normalize(12),
        fontWeight:'400',
        color:theme.text,
       },
       smallText:{
        fontSize:normalize(10),
        fontWeight:'400',
        color:theme.text,
       },
       inputText:{
        fontSize:normalize(14),
        fontWeight:'400',
        color:theme.text,
       },
    });
  };

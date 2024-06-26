import { sixtyFivePercentWidth } from '@configs/constants';
import { colors } from '@configs/globalStyles';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors['mwr/white'],
  },
  XGeoShape: {
    left: sixtyFivePercentWidth,
  },
  appTitleView: {
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: 33,
    alignItems: 'center',
  },
  logo: {
    marginTop: 35,
    alignSelf: 'center',
  },
  shortText: {
    width: 193,
    marginTop: 15,
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 20,
  },
  bookmark: {
    marginLeft: 9,
  },
  appNameText: {
    fontSize: 24,
  },
  sideGeoShapes: {
    left: 2,
    bottom: 4,
    position: 'absolute',
  },
  inputStyle: {
    backgroundColor: "#ffff",
    marginRight: 6,
    borderWidth: 1,
    padding: 3,
    width: "70%",
    borderRadius: 20,
    textAlign: "center",
  },
  button: {
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'skyblue',
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 30
  },
  btnTxt: {color: 'white', paddingHorizontal: 8, paddingVertical: 12}
});

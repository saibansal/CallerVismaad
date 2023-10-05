import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  pageHeadingRow: {
    width: '100%',
    paddingRight: 0,
    paddingLeft: 0,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  pageHeading: {
    width: '100%',
    height: '100%',
    padding: 20,
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    color: '#B6488D',
    fontSize: 23,
  },

  saferView: {
    height: '100%',
    backgroundColor: '#fff',
  },
  eventCounting: {
    color: '#202B37',
  },
  eventRow: {
    padding: 25,
    borderRadius: 20,
    marginBottom: 15,
    backgroundColor: '#D9EFFF',
  },
  eventLeft: {
    width: '80%',
  },
  eventLeftHeading: {
    color: '#B6488D',
    fontSize: 20,
    marginBottom: 5,
    fontWeight: '600',
  },
  eventSubDetail: {
    color: '#262B35',
    fontSize: 15,
    lineHeight: 20,
  },
});

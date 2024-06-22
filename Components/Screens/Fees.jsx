import React from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import TransportCard from './Transport.jsx';
import {useNavigation} from '@react-navigation/native';

const FeesScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.header}>Fees</Text>
      </View>
      <View style={styles.tabContainer}>
        <Text style={[styles.tab, styles.selectedTab]}>Fees</Text>
        <Text style={[styles.tab, styles.unselectedTab]}>Payment History</Text>
      </View>
      <View style={styles.summary}>
        <View style={styles.summaryRow}>
          <Text style={[styles.summaryText, styles.amount]}>
            Total payable Fee
          </Text>
          <Text style={[styles.amount]}>20,000 INR</Text>
        </View>
        <View style={styles.separator} />
        <Text style={styles.payNow}>Pay Now →</Text>
      </View>
      <View>
        <Text style={[styles.summaryText, styles.feeTypes]}>Fee Types</Text>
      </View>
      <TransportCard />
      <TransportCard />
      <TransportCard />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  headerContainer: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  backButton: {
    position: 'absolute',
    left: 0,
  },
  backButtonText: {
    fontSize: 24,
    color: '#000',
    fontFamily: 'Poppins-Bold',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  tab: {
    marginRight: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontFamily: 'Poppins-Bold',
  },
  selectedTab: {
    color: '#fff',
    backgroundColor: '#2F50C6',
    borderRadius: 10,
  },
  unselectedTab: {
    color: '#000',
    backgroundColor: '#fff',
    borderRadius: 10,
    fontWeight: 'normal',
  },
  summary: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  summaryText: {
    fontWeight: 'bold',
    color: '#000',
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
  },
  amount: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000',
    fontFamily: 'Poppins-Bold',
  },

  separator: {
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  payNow: {
    color: '#2F50C6',
    textAlign: 'right',
    marginTop: 10,
    fontFamily: 'Poppins',
  },
  feeTypes: {
    marginLeft: 10,
    color: '#555555',
  },
});

export default FeesScreen;

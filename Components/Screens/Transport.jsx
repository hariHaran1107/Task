import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Svg, {Circle, Path} from 'react-native-svg';

const TransportIcon = () => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Circle cx="12" cy="12" r="12" fill="#E6E6FA" />
    <Path
      d="M12 4.5C8.3625 4.5 5.25 4.94737 5.25 8.07895V13.5263C5.25 14.3137 5.59125 15.0205 6.125 15.5126V17.1053C6.125 17.5974 6.51875 18 7 18H7.875C8.35625 18 8.75 17.5974 8.75 17.1053V16.2105H15.75V17.1053C15.75 17.5974 16.1438 18 16.625 18H17.5C17.9812 18 18.375 17.5974 18.375 17.1053V15.5126C18.9087 15.0205 19.25 14.3137 19.25 13.5263V8.07895C19.25 4.94737 16.1375 4.5 12 4.5ZM16.2025 6.67526H7.7975C8.27875 6.20105 9.52125 5.78947 12 5.78947C14.4788 5.78947 15.7212 6.20105 16.2025 6.67526ZM17.5 8.46474V11.1579H6.5V8.46474H17.5ZM16.2025 14.1795L15.9488 14.4211H8.05125L7.7975 14.1795C7.70497 14.0988 7.63051 13.9987 7.57917 13.886C7.52784 13.7733 7.50084 13.6506 7.5 13.5263V9.94737H17.5V13.5263C17.5 13.8574 17.3162 14.0811 17.2025 14.1795Z"
      fill="#2F50C6"
    />
  </Svg>
);

const TransportCard = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <View style={styles.card}>
      <View style={styles.statusContainer}>
        <Text style={[styles.status, styles.overdue]}>Overdue</Text>
        <Text style={[styles.status, styles.paid]}>Paid</Text>
        <Text style={[styles.status, styles.lateFee]}>Late fee fine</Text>
      </View>
      <TouchableOpacity onPress={() => setExpanded(!expanded)}>
        <View style={styles.header}>
          <TransportIcon />
          <View style={styles.headerText}>
            <Text style={styles.title}>Transport Fees</Text>
            <Text style={styles.description}>Description of the fee type.</Text>
            <Text style={styles.amount}>4,000 INR</Text>
          </View>
          <View style={styles.amountContainer}>
            <Text style={styles.datesText}>Due Date - June 12 2022</Text>
            <Text style={styles.datesText}>Invoice Date - June 12 2022</Text>
            <Text style={styles.payNow}>Pay Now →</Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.separator} />
      <TouchableOpacity onPress={() => setExpanded(!expanded)}>
        <Text style={styles.expandIcon}>{expanded ? '^' : '⌄'}</Text>
      </TouchableOpacity>
      {expanded && (
        <View style={styles.details}>
          <View style={styles.detailsHeader}>
            <Text style={[styles.detailTitle, styles.installment]}>
              Installments
            </Text>
            <Text style={[styles.detailTitle, styles.fine]}>Fine</Text>
            <Text style={[styles.detailTitle, styles.concessions]}>
              Concessions
            </Text>
          </View>
          <View style={styles.separator} />
          <View style={styles.detailRow}>
            <Text style={[styles.detailText, styles.installment]}>
              Installment 1
            </Text>
            <Text style={[styles.detailText, styles.detailAmount]}>
              1,000/-
            </Text>
            <Text style={[styles.detailText, styles.fine]}>200/-</Text>
            <Text style={[styles.detailText, styles.concessions]}>-</Text>
          </View>
          <View style={styles.separator} />
          <View style={styles.detailRow}>
            <Text style={[styles.detailText, styles.installment]}>
              Installment 2
            </Text>
            <Text style={[styles.detailText, styles.detailAmount]}>
              1,000/-
            </Text>
            <Text style={[styles.detailText, styles.fine]}>-</Text>
            <Text style={[styles.detailText, styles.concessions]}>-</Text>
          </View>
          <View style={styles.separator} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    margin: 10,
    padding: 10,
    backgroundColor: '#fff',
  },
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 10,
  },
  status: {
    fontWeight: 'bold',
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 5,
    overflow: 'hidden',
    fontSize: 12,
    fontFamily: 'Poppins-Bold',
    marginLeft: 5,
  },
  overdue: {
    backgroundColor: '#E2E2E2',
    color: '#535353',
  },
  paid: {
    backgroundColor: '#ECFFEC',
    color: '#4EFC4A',
  },
  lateFee: {
    backgroundColor: '#FFECEC',
    color: '#FC4A4A',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    marginLeft: 10,
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    color: '#000',
    fontFamily: 'Poppins-Bold',
  },
  description: {
    color: '#777',
  },
  amountContainer: {
    alignItems: 'flex-end',
  },
  amount: {
    fontSize: 16,
    color: '#000',
    fontFamily: 'Poppins',
  },
  payNow: {
    color: '#2F50C6',
    marginTop: 5,
    fontFamily: 'Poppins',
  },
  datesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  datesText: {
    fontSize: 12,
    color: '#777',
  },
  separator: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 10,
  },
  expandIcon: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    fontFamily: 'Poppins-Bold',
  },
  details: {
    marginTop: 10,
  },
  detailsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
  detailTitle: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
  },
  installment: {
    flex: 2,
    textAlign: 'left',
    color: '#000',
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    marginTop: 5,
  },
  detailText: {
    flex: 1,
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
  },
  detailAmount: {
    flex: 1,
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
    marginLeft: -70,
  },
  fine: {
    color: 'red',
    flex: 1,
  },
  concessions: {
    color: '#0DCC20',
    flex: 1,
  },
});

export default TransportCard;

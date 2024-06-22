import React from 'react';
import {View, ScrollView, StyleSheet, Text} from 'react-native';
import {Card} from 'react-native-paper';
import CircularProgress from '../atoms/Progressbar.jsx';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Today's Motivation</Text>
        <Text style={styles.subHeaderText}>
          You are on the right track, keep working hard you will reach your goal
          soon.
        </Text>
      </View>
      <Text style={styles.sectionTitle}>Time Table</Text>
      <View style={styles.timetable}>
        <View style={styles.cardContainer}>
          <Card style={styles.card}>
            <Card.Content>
              <Text style={styles.cardTitle}>Maths</Text>
              <Text style={styles.cardSubtitle}>Ms. Sangita Verma</Text>
              <View style={styles.row}>
                <Text style={styles.classSection}>Class- 1</Text>
                <Text style={styles.classSection}>Section- A</Text>
              </View>
            </Card.Content>
            <View style={styles.cardFooter}>
              <Text style={styles.cardFooterText}>09-10 AM</Text>
            </View>
          </Card>
        </View>
        <View style={styles.cardContainer}>
          <Card style={styles.card}>
            <Card.Content>
              <Text style={styles.cardTitle}>Maths</Text>
              <Text style={styles.cardSubtitle}>Ms. Sangita Verma</Text>
              <View style={styles.row}>
                <Text style={styles.classSection}>Class- 1</Text>
                <Text style={styles.classSection}>Section- A</Text>
              </View>
            </Card.Content>
            <View style={styles.cardFooter}>
              <Text style={styles.cardFooterText}>09-10 AM</Text>
            </View>
          </Card>
        </View>
      </View>
      <Text style={styles.sectionTitle}>Student Dashboard</Text>
      <View style={styles.dashboard}>
        <Card style={styles.dashboardCard}>
          <Card.Content>
            <CircularProgress
              size={100}
              strokeWidth={10}
              percentage={94}
              color="#2F50C6"
            />
            <Text style={styles.dashboardTitle}>Attendance</Text>
          </Card.Content>
        </Card>
        <Card style={styles.dashboardCard}>
          <Card.Content>
            <Text style={styles.dashboardTitle}>Report Card</Text>
            <Text style={styles.dashboardValue}>94%</Text>
            <Text style={styles.dashboardSubtitle}>Top 5 Among others</Text>
            <Text style={[styles.dashboardLink, {color: '#2F50C6'}]}>
              View detailed score card
            </Text>
          </Card.Content>
        </Card>
      </View>
      <Text style={styles.sectionTitle}>Announcements</Text>
      <View style={styles.announcements}>
        <View style={styles.announcementItem}>
          <Text style={styles.announcementBullet}>{'>'}</Text>
          <Text style={styles.announcementText}>Class 8th Result Declared</Text>
          <Text style={styles.announcementDate}>12 Mar 2022</Text>
        </View>
        <View style={styles.announcementItem}>
          <Text style={styles.announcementBullet}>{'>'}</Text>
          <Text style={styles.announcementText}>
            Admission open for new batch
          </Text>
          <Text style={styles.announcementDate}>12 Mar 2022</Text>
        </View>
        <View style={styles.announcementItem}>
          <Text style={styles.announcementBullet}>{'>'}</Text>
          <Text style={styles.announcementText}>List of merit students</Text>
          <Text style={styles.announcementDate}>12 Mar 2022</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
  },
  header: {
    padding: 20,
    paddingHorizontal: 0,
    backgroundColor: '#FFFFFF',
  },
  headerText: {
    fontFamily: 'Poppins',
    fontSize: 30,
    fontWeight: '700',
    lineHeight: 30,
    textAlign: 'left',
    color: '#303030',
  },
  subHeaderText: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  sectionTitle: {
    fontSize: 16, 
    fontWeight: 'bold',
    color: '#000', 
    marginTop: 20,
  },
  timetable: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  cardContainer: {
    flex: 1,
    marginHorizontal: 5,
  },
  card: {
    flex: 1,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#FFFFFF',
  },
  cardTitle: {
    fontSize: 16, 
    fontWeight: 'bold',
    color: '#000', 
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  classSection: {
    fontSize: 14,
    color: '#2F50C6',
  },
  cardFooter: {
    backgroundColor: '#2F50C6',
    alignItems: 'center',
    padding: 5,
  },
  cardFooterText: {
    fontSize: 16,
    color: '#fff',
  },
  dashboard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  dashboardCard: {
    flex: 1,
    marginHorizontal: 5,
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  dashboardTitle: {
    fontSize: 16, 
    fontWeight: 'bold',
    color: '#000', 
    marginTop: 10,
  },
  dashboardValue: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2F50C6',
    marginTop: 10,
  },
  dashboardSubtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  dashboardLink: {
    fontSize: 14,
    color: '#2F50C6',
    textDecorationLine: 'underline',
    marginTop: 10,
  },
  announcements: {
    paddingVertical: 20,
    backgroundColor: '#FFFFFF',
  },
  announcementTitle: {
    fontSize: 16, 
    fontWeight: 'bold',
    color: '#000', 
    marginBottom: 10,
  },
  announcementItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  announcementBullet: {
    color: '#000',
    fontSize: 16,
    marginRight: 10,
  },
  announcementText: {
    flex: 1,
    fontSize: 14,
    color: '#666',
  },
  announcementDate: {
    fontSize: 14,
    color: '#666',
  },
});

export default HomeScreen;

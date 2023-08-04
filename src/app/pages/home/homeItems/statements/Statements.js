import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

// Dummy data for transaction statements (Replace this with your actual data)
const STATEMENTS_DATA = [
  {
    id: '1',
    date: 'August 1, 2023',
    amount: -250.0,
    type: 'Debit',
    balance: 1000.0,
  },
  {
    id: '2',
    date: 'August 5, 2023',
    amount: 500.0,
    type: 'Credit',
    balance: 1500.0,
  },
  // Add more statements if needed
];

const StatementsPage = () => {
  // Render each statement item
  const renderStatementItem = ({ item }) => (
    <View style={styles.statementItem}>
      <Text style={styles.dateText}>{item.date}</Text>
      <Text style={[styles.amountText, item.amount < 0 ? styles.debitText : styles.creditText]}>
        {item.amount < 0 ? '-' : '+'}${Math.abs(item.amount).toFixed(2)}
      </Text>
      <Text style={styles.typeText}>{item.type}</Text>
      <Text style={styles.balanceText}>Balance: ${item.balance.toFixed(2)}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={STATEMENTS_DATA}
        renderItem={renderStatementItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    padding: 16,
  },
  listContainer: {
    paddingBottom: 16,
  },
  statementItem: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  dateText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  amountText: {
    fontSize: 18,
  },
  creditText: {
    color: 'green',
  },
  debitText: {
    color: 'red',
  },
  typeText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  balanceText: {
    fontSize: 16,
  },
});

export default StatementsPage;

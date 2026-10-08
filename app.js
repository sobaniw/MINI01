import { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  const [points, setPoints] = useState(0);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Profile</Text>
      </View>

      {/* Avatar */}
      <View style={styles.avatarWrapper}>
        <View style={styles.avatarCircle}>
          <Image
            source={{ uri: 'https://i.pravatar.cc/200' }}
            style={styles.avatar}
          />
        </View>
        <Ionicons
          name="checkmark"
          size={36}
          color="#00e000"
          style={styles.checkBadge}
        />
      </View>

      <View style={styles.divider} />

      {/* Details */}
      <View style={styles.details}>
        <Text style={styles.label}>Name</Text>
        <Text style={styles.value}>Diluka</Text>

        <Text style={styles.label}>Email</Text>
        <View style={styles.row}>
          <Ionicons name="mail" size={16} color="#000" />
          <Text style={[styles.value, styles.rowText]}>diluka.w@nsbm.ac.lk</Text>
        </View>

        <Text style={styles.label}>Points</Text>
        <View style={styles.row}>
          <Ionicons name="star" size={16} color="#000" />
          <Text style={[styles.value, styles.rowText]}>{points}</Text>
        </View>
      </View>

      {/* Floating action button: adds 1 point */}
      <TouchableOpacity
        style={styles.fab}
        onPress={() => setPoints(points + 1)}
        activeOpacity={0.8}
      >
        <Ionicons name="add" size={28} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },

  header: {
    backgroundColor: '#000',
    paddingTop: 48,
    paddingBottom: 14,
    alignItems: 'center',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },

  avatarWrapper: {
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  avatarCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e8a0a0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 108,
    height: 108,
    borderRadius: 54,
  },
  checkBadge: {
    position: 'absolute',
    right: 4,
    bottom: 4,
  },

  divider: {
    height: 2,
    backgroundColor: '#000',
    marginHorizontal: 16,
  },

  details: {
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 14,
  },
  value: {
    fontSize: 15,
    color: '#222',
    marginTop: 4,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  rowText: {
    marginTop: 0,
    marginLeft: 8,
  },

  fab: {
    position: 'absolute',
    right: 20,
    bottom: 30,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
  },
});
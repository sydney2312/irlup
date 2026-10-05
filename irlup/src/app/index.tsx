import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <View>
          <Text style={styles.smallText}>WELCOME BACK</Text>
          <Text style={styles.title}>IRLUP</Text>
        </View>

        <View style={styles.levelBadge}>
          <Text style={styles.levelText}>LVL 1</Text>
        </View>
      </View>

      <View style={styles.hero}>
        <Text style={styles.greeting}>Ready for today's run?</Text>

        <Text style={styles.xpText}>120 / 500 XP</Text>

        <View style={styles.xpBar}>
          <View style={styles.xpProgress} />
        </View>

        <Text style={styles.xpLabel}>380 XP until Level 2</Text>
      </View>

      <Text style={styles.sectionTitle}>TODAY'S QUESTS</Text>

      <Pressable style={styles.quest}>
        <View style={styles.questIcon}>
          <Text>📚</Text>
        </View>

        <View style={styles.questInfo}>
          <Text style={styles.questTitle}>Knowledge Run</Text>
          <Text style={styles.questDescription}>
            Study for 30 minutes
          </Text>
        </View>

        <Text style={styles.questXP}>+50</Text>
      </Pressable>

      <Pressable style={styles.quest}>
        <View style={styles.questIcon}>
          <Text>⚡</Text>
        </View>

        <View style={styles.questInfo}>
          <Text style={styles.questTitle}>Body Check</Text>
          <Text style={styles.questDescription}>
            Exercise for 20 minutes
          </Text>
        </View>

        <Text style={styles.questXP}>+40</Text>
      </Pressable>

      <Pressable style={styles.quest}>
        <View style={styles.questIcon}>
          <Text>🎨</Text>
        </View>

        <View style={styles.questInfo}>
          <Text style={styles.questTitle}>Creative Mode</Text>
          <Text style={styles.questDescription}>
            Create something for 20 minutes
          </Text>
        </View>

        <Text style={styles.questXP}>+30</Text>
      </Pressable>

      <View style={styles.bottom}>
        <Text style={styles.bottomItem}>⌂</Text>
        <Text style={styles.bottomItem}>⚔</Text>
        <Text style={styles.bottomItem}>◈</Text>
        <Text style={styles.bottomItem}>●</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#100B18',
    paddingHorizontal: 24,
    paddingTop: 65,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  smallText: {
    color: '#8D8498',
    fontSize: 11,
    letterSpacing: 2,
    fontWeight: '600',
  },

  title: {
    color: '#F5EFF8',
    fontSize: 34,
    fontWeight: '800',
    letterSpacing: 1,
    marginTop: 3,
  },

  levelBadge: {
    backgroundColor: '#241735',
    borderWidth: 1,
    borderColor: '#7048A0',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
  },

  levelText: {
    color: '#C59CFF',
    fontSize: 12,
    fontWeight: '700',
  },

  hero: {
    backgroundColor: '#191123',
    borderRadius: 24,
    padding: 22,
    marginTop: 32,
    borderWidth: 1,
    borderColor: '#2D203B',
  },

  greeting: {
    color: '#F5EFF8',
    fontSize: 21,
    fontWeight: '700',
  },

  xpText: {
    color: '#C59CFF',
    fontSize: 13,
    marginTop: 20,
    fontWeight: '600',
  },

  xpBar: {
    height: 8,
    backgroundColor: '#2A2034',
    borderRadius: 10,
    marginTop: 9,
    overflow: 'hidden',
  },

  xpProgress: {
    width: '30%',
    height: '100%',
    backgroundColor: '#9B5CFF',
    borderRadius: 10,
  },

  xpLabel: {
    color: '#777080',
    fontSize: 11,
    marginTop: 9,
  },

  sectionTitle: {
    color: '#8D8498',
    fontSize: 11,
    letterSpacing: 2,
    fontWeight: '700',
    marginTop: 30,
    marginBottom: 12,
  },

  quest: {
    backgroundColor: '#191123',
    borderRadius: 18,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#2D203B',
  },

  questIcon: {
    width: 46,
    height: 46,
    borderRadius: 14,
    backgroundColor: '#241735',
    justifyContent: 'center',
    alignItems: 'center',
  },

  questInfo: {
    flex: 1,
    marginLeft: 14,
  },

  questTitle: {
    color: '#F5EFF8',
    fontSize: 15,
    fontWeight: '700',
  },

  questDescription: {
    color: '#777080',
    fontSize: 12,
    marginTop: 4,
  },

  questXP: {
    color: '#C59CFF',
    fontSize: 13,
    fontWeight: '700',
  },

  bottom: {
    position: 'absolute',
    bottom: 25,
    left: 24,
    right: 24,
    height: 65,
    backgroundColor: '#191123',
    borderRadius: 22,
    borderWidth: 1,
    borderColor: '#2D203B',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  bottomItem: {
    color: '#8D8498',
    fontSize: 22,
  },
});
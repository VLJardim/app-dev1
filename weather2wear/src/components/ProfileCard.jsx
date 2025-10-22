import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

/* 
  ProfileCard viser profilbillede, brugernavn og statistik
  (antal Items og Outfits). 
*/
const ProfileCard = () => {
  // 👇 Midlertidig dummy data (kan hentes fra backend senere)
  const username = "Sophia";
  const handle = "@sophmirjuno";
  const items = "";
  const outfits = "";

  return (
    <View style={styles.card}>
      {/* Profilbillede */}
      <View style={styles.leftSection}>
        <Image
          source={{ uri: "https://via.placeholder.com/80" }} // skift til lokal fil hvis ønsket
          style={styles.profileImage}
        />
      </View>

      {/* Info og statistik */}
      <View style={styles.rightSection}>
        <Text style={styles.username}>{username}</Text>
        <Text style={styles.handle}>{handle}</Text>

        {/* Statistik - Items og Outfits */}
        <View style={styles.statsRow}>
          <View style={styles.statBlock}>
            <Text style={styles.statNumber}>{items}</Text>
            <Text style={styles.statLabel}>Items</Text>
          </View>

          <View style={styles.statBlock}>
            <Text style={styles.statNumber}>{outfits}</Text>
            <Text style={styles.statLabel}>Outfits</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProfileCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",              // billede til venstre, info til højre
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  leftSection: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40, // rund
  },
  rightSection: {
    flex: 1,
    justifyContent: "center",
  },
  username: {
    fontSize: 18,
    fontWeight: "bold",
  },
  handle: {
    fontSize: 14,
    color: "#666",
    marginBottom: 12,
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",  // gør det jævnt fordelt
  },
  statBlock: {
    alignItems: "center",
  },
  statNumber: {
    fontSize: 16,
    fontWeight: "bold",
  },
  statLabel: {
    fontSize: 12,
    color: "#666",
  },
});

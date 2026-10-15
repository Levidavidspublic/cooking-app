import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>📱 Mobile App Template</Text>
        <Text style={styles.subtitle}>Expo + React Native + Convex</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>✨ Features</Text>
        <Text style={styles.feature}>✅ React Native with Expo</Text>
        <Text style={styles.feature}>✅ TypeScript Support</Text>
        <Text style={styles.feature}>✅ Convex Backend</Text>
        <Text style={styles.feature}>✅ RevenueCat Payments</Text>
        <Text style={styles.feature}>✅ RTL/Hebrew Support</Text>
        <Text style={styles.feature}>✅ NativeWind Styling</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🚀 Tech Stack</Text>
        <Text style={styles.tech}>• Framework: Expo</Text>
        <Text style={styles.tech}>• Language: TypeScript</Text>
        <Text style={styles.tech}>• Backend: Convex</Text>
        <Text style={styles.tech}>• Styling: NativeWind (Tailwind)</Text>
        <Text style={styles.tech}>• Auth: Convex Auth</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>📚 Documentation</Text>
        <Text style={styles.doc}>• Setup Guide: docs/setup.md</Text>
        <Text style={styles.doc}>
          • New Project: docs/NEW_PROJECT_INSTRUCTIONS.md
        </Text>
        <Text style={styles.doc}>• Payments: docs/REVENUECAT_SETUP.md</Text>
        <Text style={styles.doc}>• Deployment: docs/deployment.md</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>⚠️ Note</Text>
        <Text style={styles.note}>
          This is a demo running in Expo Snack (cloud-based).
        </Text>
        <Text style={styles.note}>
          Full backend features require local development on macOS/Linux.
        </Text>
        <Text style={styles.note}>
          For Windows: Use WSL2, Snack, or EAS Build.
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.secondaryButton]}>
          <Text style={styles.secondaryButtonText}>Learn More</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.footer}>Your app template is ready! 🎉</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#6366f1',
    padding: 24,
    paddingTop: 40,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#e0e7ff',
  },
  section: {
    backgroundColor: '#fff',
    margin: 16,
    padding: 16,
    borderRadius: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
    color: '#1f2937',
  },
  feature: {
    fontSize: 14,
    marginBottom: 8,
    color: '#374151',
  },
  tech: {
    fontSize: 14,
    marginBottom: 8,
    color: '#374151',
  },
  doc: {
    fontSize: 14,
    marginBottom: 8,
    color: '#374151',
  },
  note: {
    fontSize: 13,
    marginBottom: 8,
    color: '#ea580c',
    fontStyle: 'italic',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
    marginVertical: 24,
    paddingHorizontal: 16,
  },
  button: {
    backgroundColor: '#6366f1',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    flex: 1,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryButton: {
    backgroundColor: '#e0e7ff',
  },
  secondaryButtonText: {
    color: '#6366f1',
    fontSize: 16,
    fontWeight: '600',
  },
  footer: {
    textAlign: 'center',
    marginVertical: 20,
    fontSize: 16,
    color: '#6b7280',
  },
});

/**
 * Expo Snack Demo - Full Navigation Flow
 * Shows all screens with navigation between them
 */

import {
  CreditCard,
  FileSpreadsheet,
  FileText,
  Home,
  LogIn,
  Settings,
  UserPlus,
} from 'lucide-react-native';
import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type Screen =
  | 'home'
  | 'page1'
  | 'page2'
  | 'settings'
  | 'signin'
  | 'signup'
  | 'paywall';

export default function NavigationDemo() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const screens = {
    home: {
      title: 'בית',
      icon: Home,
      content: 'ברוכים הבאים! זהו מסך הבית של התבנית.',
    },
    page1: {
      title: 'עמוד 1',
      icon: FileText,
      content: 'זהו עמוד דוגמה מספר 1.',
    },
    page2: {
      title: 'עמוד 2',
      icon: FileSpreadsheet,
      content: 'זהו עמוד דוגמה מספר 2.',
    },
    settings: {
      title: 'הגדרות',
      icon: Settings,
      content: 'מסך הגדרות - כאן תוכלו לנהל את החשבון שלכם.',
    },
    signin: {
      title: 'התחברות',
      icon: LogIn,
      content: 'מסך התחברות - הזינו אימייל וסיסמה.',
    },
    signup: {
      title: 'הרשמה',
      icon: UserPlus,
      content: 'מסך הרשמה - צרו חשבון חדש.',
    },
    paywall: {
      title: 'תשלום',
      icon: CreditCard,
      content: 'מסך תשלום - בחרו תוכנית מנוי.',
    },
  };

  const currentScreenData = screens[currentScreen];
  const CurrentIcon = currentScreenData.icon;

  const handleAuthToggle = () => {
    setIsAuthenticated(!isAuthenticated);
    setCurrentScreen('home');
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <CurrentIcon size={24} color="#4fc3f7" />
          <Text style={styles.headerTitle}>{currentScreenData.title}</Text>
        </View>
        <TouchableOpacity onPress={handleAuthToggle} style={styles.authButton}>
          <Text style={styles.authButtonText}>
            {isAuthenticated ? 'התנתק' : 'התחבר'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
      <ScrollView style={styles.content}>
        <View style={styles.contentInner}>
          <Text style={styles.contentText}>{currentScreenData.content}</Text>
          <Text style={styles.statusText}>
            סטטוס: {isAuthenticated ? 'מחובר' : 'לא מחובר'}
          </Text>
        </View>
      </ScrollView>

      {/* Navigation Tabs (Authenticated) */}
      {isAuthenticated && (
        <View style={styles.tabBar}>
          {(['home', 'page1', 'page2', 'settings'] as Screen[]).map(
            (screen) => {
              const screenData = screens[screen];
              const Icon = screenData.icon;
              const isActive = currentScreen === screen;

              return (
                <TouchableOpacity
                  key={screen}
                  onPress={() => setCurrentScreen(screen)}
                  style={styles.tab}
                >
                  <Icon size={20} color={isActive ? '#4fc3f7' : '#71717a'} />
                  <Text
                    style={[
                      styles.tabLabel,
                      { color: isActive ? '#4fc3f7' : '#71717a' },
                    ]}
                  >
                    {screenData.title}
                  </Text>
                </TouchableOpacity>
              );
            }
          )}
        </View>
      )}

      {/* Auth Navigation (Not Authenticated) */}
      {!isAuthenticated && (
        <View style={styles.authNav}>
          <TouchableOpacity
            onPress={() => setCurrentScreen('signin')}
            style={[
              styles.authNavButton,
              currentScreen === 'signin' && styles.authNavButtonActive,
            ]}
          >
            <Text
              style={[
                styles.authNavButtonText,
                currentScreen === 'signin' && styles.authNavButtonTextActive,
              ]}
            >
              התחברות
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setCurrentScreen('signup')}
            style={[
              styles.authNavButton,
              currentScreen === 'signup' && styles.authNavButtonActive,
            ]}
          >
            <Text
              style={[
                styles.authNavButtonText,
                currentScreen === 'signup' && styles.authNavButtonTextActive,
              ]}
            >
              הרשמה
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setCurrentScreen('paywall')}
            style={[
              styles.authNavButton,
              currentScreen === 'paywall' && styles.authNavButtonActive,
            ]}
          >
            <Text
              style={[
                styles.authNavButtonText,
                currentScreen === 'paywall' && styles.authNavButtonTextActive,
              ]}
            >
              תשלום
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#27272a',
    backgroundColor: '#09090b',
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  headerTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
  authButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    backgroundColor: '#4fc3f7',
  },
  authButtonText: {
    color: '#0a0a0a',
    fontSize: 14,
    fontWeight: '600',
  },
  content: {
    flex: 1,
  },
  contentInner: {
    padding: 24,
  },
  contentText: {
    color: '#ededed',
    fontSize: 18,
    textAlign: 'right',
    marginBottom: 16,
  },
  statusText: {
    color: '#4fc3f7',
    fontSize: 14,
    textAlign: 'right',
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#09090b',
    borderTopWidth: 1,
    borderTopColor: '#27272a',
    paddingVertical: 8,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    gap: 4,
    paddingVertical: 8,
  },
  tabLabel: {
    fontSize: 12,
    fontWeight: '500',
  },
  authNav: {
    flexDirection: 'row',
    backgroundColor: '#09090b',
    borderTopWidth: 1,
    borderTopColor: '#27272a',
    padding: 12,
    gap: 8,
  },
  authNavButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: '#18181b',
    alignItems: 'center',
  },
  authNavButtonActive: {
    backgroundColor: '#4fc3f7',
  },
  authNavButtonText: {
    color: '#71717a',
    fontSize: 14,
    fontWeight: '600',
  },
  authNavButtonTextActive: {
    color: '#0a0a0a',
  },
});

/**
 * Expo Snack Demo - Settings Screen
 * Simplified version without backend for Snack preview
 */

import { ChevronLeft, LogOut, Trash2 } from 'lucide-react-native';
import React from 'react';
import { Alert, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SettingsScreen() {
  const handleSignOut = () => {
    Alert.alert('התנתקות', 'האם אתה בטוח שברצונך להתנתק?', [
      { text: 'ביטול', style: 'cancel' },
      {
        text: 'התנתק',
        style: 'destructive',
        onPress: () => Alert.alert('הצלחה', 'התנתקת בהצלחה! (דמו)'),
      },
    ]);
  };

  const handleDeleteAccount = () => {
    Alert.alert('⚠️ מחיקת חשבון', 'האם אתה בטוח שברצונך למחוק את החשבון שלך?', [
      { text: 'ביטול', style: 'cancel' },
      {
        text: 'מחק',
        style: 'destructive',
        onPress: () => Alert.alert('הצלחה', 'החשבון נמחק! (דמו)'),
      },
    ]);
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: '#0a0a0a' }}
      edges={['top']}
    >
      <ScrollView style={{ flex: 1 }}>
        {/* Header */}
        <View
          style={{ paddingHorizontal: 24, paddingTop: 24, paddingBottom: 16 }}
        >
          <Text
            style={{
              color: '#ededed',
              fontSize: 28,
              fontWeight: 'bold',
              textAlign: 'right',
            }}
          >
            הגדרות
          </Text>
        </View>

        {/* Subscription Status */}
        <View
          style={{
            marginHorizontal: 16,
            marginBottom: 16,
            padding: 16,
            borderRadius: 12,
            backgroundColor: '#18181b',
            borderWidth: 1,
            borderColor: '#27272a',
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <View
              style={{
                paddingHorizontal: 12,
                paddingVertical: 4,
                borderRadius: 999,
                backgroundColor: '#4fc3f7',
                opacity: 0.2,
              }}
            >
              <Text
                style={{ color: '#4fc3f7', fontSize: 14, fontWeight: '500' }}
              >
                פרימיום
              </Text>
            </View>
            <Text
              style={{
                color: '#ffffff',
                fontSize: 16,
                fontWeight: '500',
                textAlign: 'right',
              }}
            >
              סטטוס מנוי
            </Text>
          </View>
        </View>

        {/* Sign Out Button */}
        <View style={{ marginHorizontal: 16, marginBottom: 16 }}>
          <TouchableOpacity
            onPress={handleSignOut}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 12,
              padding: 16,
              borderRadius: 12,
              backgroundColor: '#18181b',
              borderWidth: 1,
              borderColor: '#27272a',
            }}
          >
            <ChevronLeft size={20} color="#71717a" />
            <Text
              style={{
                flex: 1,
                color: '#f87171',
                fontSize: 16,
                textAlign: 'right',
              }}
            >
              התנתקות
            </Text>
            <LogOut size={20} color="#f87171" />
          </TouchableOpacity>
        </View>

        {/* Delete Account Button */}
        <View style={{ marginHorizontal: 16, marginBottom: 16 }}>
          <TouchableOpacity
            onPress={handleDeleteAccount}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 12,
              padding: 16,
              borderRadius: 12,
              backgroundColor: 'rgba(127, 29, 29, 0.3)',
              borderWidth: 2,
              borderColor: '#991b1b',
            }}
          >
            <ChevronLeft size={20} color="#991b1b" />
            <Text
              style={{
                flex: 1,
                color: '#ef4444',
                fontSize: 16,
                fontWeight: 'bold',
                textAlign: 'right',
              }}
            >
              מחיקת חשבון
            </Text>
            <Trash2 size={20} color="#ef4444" />
          </TouchableOpacity>
        </View>

        {/* Info Section */}
        <View
          style={{
            marginHorizontal: 16,
            marginBottom: 24,
            padding: 16,
            borderRadius: 12,
            backgroundColor: '#18181b',
            borderWidth: 1,
            borderColor: '#27272a',
          }}
        >
          <Text
            style={{
              color: '#4fc3f7',
              fontSize: 18,
              fontWeight: '600',
              marginBottom: 12,
              textAlign: 'right',
            }}
          >
            ℹ️ מידע
          </Text>
          <Text
            style={{
              color: '#a1a1aa',
              fontSize: 14,
              textAlign: 'right',
              marginBottom: 8,
            }}
          >
            • גרסה: 1.0.0
          </Text>
          <Text
            style={{
              color: '#a1a1aa',
              fontSize: 14,
              textAlign: 'right',
              marginBottom: 8,
            }}
          >
            • תבנית: Mobile Template
          </Text>
          <Text style={{ color: '#a1a1aa', fontSize: 14, textAlign: 'right' }}>
            • מצב: דמו (Snack Preview)
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

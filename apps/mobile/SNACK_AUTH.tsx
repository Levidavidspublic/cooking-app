/**
 * Expo Snack Demo - Sign In Screen
 * Simplified version without Convex backend for Snack preview
 */

import { Eye, EyeOff } from 'lucide-react-native';
import React, { useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SignInScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const onSignInPress = async () => {
    if (!email || !password) {
      Alert.alert('שגיאה', 'אנא מלא את כל השדות');
      return;
    }

    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      Alert.alert('הצלחה', 'התחברות מוצלחת! (דמו)');
    }, 1000);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#000000' }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'center',
            paddingHorizontal: 24,
          }}
        >
          <View style={{ width: '100%' }}>
            <Text
              style={{
                color: '#ffffff',
                fontSize: 32,
                fontWeight: 'bold',
                marginBottom: 8,
                textAlign: 'right',
              }}
            >
              התחבר לחשבון
            </Text>
            <Text
              style={{
                color: '#a1a1aa',
                fontSize: 16,
                marginBottom: 32,
                textAlign: 'right',
              }}
            >
              ברוך שובך! אנא התחבר כדי להמשיך
            </Text>

            {/* Email Field */}
            <View style={{ marginBottom: 20 }}>
              <Text
                style={{
                  color: '#ffffff',
                  fontSize: 14,
                  fontWeight: '500',
                  marginBottom: 8,
                  textAlign: 'right',
                }}
              >
                כתובת אימייל
              </Text>
              <TextInput
                style={{
                  backgroundColor: '#18181b',
                  borderWidth: 1,
                  borderColor: '#27272a',
                  borderRadius: 12,
                  padding: 16,
                  color: '#ffffff',
                  fontSize: 16,
                  textAlign: 'right',
                }}
                value={email}
                onChangeText={setEmail}
                placeholder="example@gmail.com"
                placeholderTextColor="#52525b"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                editable={!loading}
              />
            </View>

            {/* Password Field */}
            <View style={{ marginBottom: 20 }}>
              <Text
                style={{
                  color: '#ffffff',
                  fontSize: 14,
                  fontWeight: '500',
                  marginBottom: 8,
                  textAlign: 'right',
                }}
              >
                סיסמה
              </Text>
              <View style={{ position: 'relative' }}>
                <TextInput
                  style={{
                    backgroundColor: '#18181b',
                    borderWidth: 1,
                    borderColor: '#27272a',
                    borderRadius: 12,
                    padding: 16,
                    paddingRight: 48,
                    color: '#ffffff',
                    fontSize: 16,
                    textAlign: 'right',
                  }}
                  value={password}
                  onChangeText={setPassword}
                  placeholder="הזן סיסמה"
                  placeholderTextColor="#52525b"
                  secureTextEntry={!showPassword}
                  editable={!loading}
                />
                <Pressable
                  onPress={() => setShowPassword(!showPassword)}
                  style={{
                    position: 'absolute',
                    left: 12,
                    top: '50%',
                    transform: [{ translateY: -10 }],
                  }}
                  hitSlop={8}
                >
                  {showPassword ? (
                    <EyeOff size={20} color="#71717a" />
                  ) : (
                    <Eye size={20} color="#71717a" />
                  )}
                </Pressable>
              </View>
            </View>

            {/* Remember Me */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 24,
              }}
            >
              <Pressable
                onPress={() => setRememberMe(!rememberMe)}
                style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}
                disabled={loading}
              >
                <Text style={{ color: '#d4d4d8', fontSize: 14 }}>
                  זכור אותי
                </Text>
                <View
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 4,
                    borderWidth: 2,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: rememberMe ? '#4fc3f7' : 'transparent',
                    borderColor: rememberMe ? '#4fc3f7' : '#52525b',
                  }}
                >
                  {rememberMe && (
                    <Text
                      style={{
                        color: '#ffffff',
                        fontSize: 12,
                        fontWeight: 'bold',
                      }}
                    >
                      ✓
                    </Text>
                  )}
                </View>
              </Pressable>
            </View>

            {/* Sign In Button */}
            <TouchableOpacity
              style={{
                backgroundColor: '#4fc3f7',
                borderRadius: 12,
                paddingVertical: 16,
                alignItems: 'center',
                opacity: loading ? 0.6 : 1,
              }}
              onPress={onSignInPress}
              disabled={loading}
            >
              {loading ? (
                <ActivityIndicator color="#ffffff" />
              ) : (
                <Text
                  style={{ color: '#ffffff', fontSize: 18, fontWeight: 'bold' }}
                >
                  התחבר
                </Text>
              )}
            </TouchableOpacity>

            {/* Sign Up Link */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                gap: 8,
                marginTop: 24,
              }}
            >
              <Text style={{ color: '#71717a', fontSize: 16 }}>
                עדיין אין לך חשבון?
              </Text>
              <TouchableOpacity>
                <Text
                  style={{ color: '#4fc3f7', fontSize: 16, fontWeight: '600' }}
                >
                  הירשם כאן
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

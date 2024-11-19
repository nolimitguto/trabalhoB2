import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState('');

  const handleResetPassword = () => {
    // Implementar lógica para redefinir a senha
    console.log('Email para reset:', email);
  };

  return (
    <View>
      <Text>Digite seu email para recuperar a senha</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Digite seu email"
      />
      <Button title="Recuperar Senha" onPress={handleResetPassword} />
    </View>
  );
};

export default ForgotPasswordScreen;

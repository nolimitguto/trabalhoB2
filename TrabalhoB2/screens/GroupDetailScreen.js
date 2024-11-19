import React from 'react';
import { View, Text } from 'react-native';

const GroupDetailScreen = ({ route }) => {
  const { groupId } = route.params;

  return (
    <View>
      <Text>Detalhes do Grupo {groupId}</Text>
      {/* Aqui você pode buscar mais informações do grupo, usando o `groupId` */}
    </View>
  );
};

export default GroupDetailScreen;

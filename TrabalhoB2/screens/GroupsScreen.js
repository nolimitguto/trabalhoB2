import React from 'react';
import { View, Text, Button } from 'react-native';

const GroupsScreen = ({ navigation }) => {
  const groups = [
    { id: 1, name: 'Grupo 1' },
    { id: 2, name: 'Grupo 2' },
    { id: 3, name: 'Grupo 3' },
  ];

  return (
    <View>
      <Text>Lista de Grupos</Text>
      {groups.map((group) => (
        <Button
          key={group.id}
          title={group.name}
          onPress={() => navigation.navigate('GroupDetail', { groupId: group.id })}
        />
      ))}
    </View>
  );
};

export default GroupsScreen;

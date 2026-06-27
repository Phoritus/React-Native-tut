import React, { useState, useMemo } from "react";
import { View, Text, TextInput, FlatList, Keyboard, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import { styled } from "nativewind";
import SubscriptionCard from "@/components/SubscriptionCard";
import { useSubscriptions } from "@/context/SubscriptionContext";
import { Feather } from "@expo/vector-icons";

const SafeAreaView = styled(RNSafeAreaView);

const Subscription = () => {
  const { subscriptions } = useSubscriptions();
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedSubscriptionId, setExpandedSubscriptionId] = useState<string | null>(null);

  const filteredSubscriptions = useMemo(() => {
    if (!searchQuery) return subscriptions;
    const lowerQuery = searchQuery.toLowerCase();
    return subscriptions.filter((sub) => {
      return (
        sub.name.toLowerCase().includes(lowerQuery) ||
        (sub.plan && sub.plan.toLowerCase().includes(lowerQuery)) ||
        (sub.category && sub.category.toLowerCase().includes(lowerQuery))
      );
    });
  }, [searchQuery, subscriptions]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView className="flex-1 bg-background p-5">
        <View className="mb-6 mt-2">
          <Text className="text-3xl font-sans-bold text-primary mb-4">Subscriptions</Text>
          <View className="flex-row items-center rounded-xl border border-border bg-card px-3 py-2">
            <Feather name="search" size={18} color="rgba(0,0,0,0.4)" className="mr-1" />
            <TextInput
              className="flex-1 text-sm font-sans-medium text-primary ml-1"
              placeholder="Search subscriptions..."
              placeholderTextColor="rgba(0, 0, 0, 0.4)"
              value={searchQuery}
              onChangeText={setSearchQuery}
              autoCorrect={false}
            />
            {searchQuery.length > 0 && (
              <TouchableOpacity onPress={() => setSearchQuery("")} className="p-1">
                <Feather name="x-circle" size={16} color="rgba(0,0,0,0.4)" />
              </TouchableOpacity>
            )}
          </View>
        </View>
        
        <FlatList
          data={filteredSubscriptions}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <SubscriptionCard
              {...item}
              expanded={expandedSubscriptionId === item.id}
              onPress={() => setExpandedSubscriptionId((currentId) => (currentId === item.id ? null : item.id))}
            />
          )}
          ItemSeparatorComponent={() => <View className="h-4" />}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          onScrollBeginDrag={() => Keyboard.dismiss()}
          ListEmptyComponent={
            <Text className="text-center py-4 text-base font-sans-medium text-black/60">
              No subscriptions found.
            </Text>
          }
          contentContainerClassName="pb-30"
        />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default Subscription;

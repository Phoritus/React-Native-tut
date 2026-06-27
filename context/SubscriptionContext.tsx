import React, { createContext, useContext, useState } from 'react';
import { HOME_SUBSCRIPTIONS } from '@/constants/data';
import { Subscription } from '@/type';

interface SubscriptionContextType {
  subscriptions: Subscription[];
  addSubscription: (sub: Subscription) => void;
}

const SubscriptionContext = createContext<SubscriptionContextType | undefined>(undefined);

export function SubscriptionProvider({ children }: { children: React.ReactNode }) {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>(HOME_SUBSCRIPTIONS);

  const addSubscription = (sub: Subscription) => {
    setSubscriptions((prev) => [sub, ...prev]);
  };

  return (
    <SubscriptionContext.Provider value={{ subscriptions, addSubscription }}>
      {children}
    </SubscriptionContext.Provider>
  );
}

export function useSubscriptions() {
  const context = useContext(SubscriptionContext);
  if (context === undefined) {
    throw new Error('useSubscriptions must be used within a SubscriptionProvider');
  }
  return context;
}

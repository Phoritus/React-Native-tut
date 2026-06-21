import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import dayjs from "dayjs";
import { formatCurrency, formatSubscriptionDateTime, formatStatusLabel } from "@/libs/utils";

const SubscriptionCard = ({
  name,
  plan,
  category,
  paymentMethod,
  status,
  startDate,
  price,
  currency,
  billing,
  renewalDate,
  color,
  icon,
  expanded,
  onPress,
  onCancelPress,
  isCancelling = false,
}: SubscriptionCardProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      className={`sub-card ${expanded ? "sub-card-expanded" : ""}`}
      style={!expanded && color ? { backgroundColor: color + "15", borderColor: color + "30" } : undefined}
    >
      {/* Header Info */}
      <View className="sub-head">
        <View className="sub-main">
          <Image source={icon} className="sub-icon" resizeMode="contain" />
          <View className="sub-copy">
            <Text className="sub-title" numberOfLines={1}>
              {name}
            </Text>
            <Text className="sub-meta" numberOfLines={1}>
              {plan || category || "No Plan"}
            </Text>
          </View>
        </View>
        <View className="sub-price-box">
          <Text className="sub-price">{formatCurrency(price, currency)}</Text>
          <Text className="sub-billing">/{billing}</Text>
        </View>
      </View>

      {/* Expanded Details */}
      {expanded && (
        <View className="sub-body">
          <View className="sub-details">
            {category && (
              <View className="sub-row">
                <Text className="sub-label">Category</Text>
                <Text className="sub-value" numberOfLines={1}>
                  {category}
                </Text>
              </View>
            )}
            {paymentMethod && (
              <View className="sub-row">
                <Text className="sub-label">Payment Method</Text>
                <Text className="sub-value" numberOfLines={1}>
                  {paymentMethod}
                </Text>
              </View>
            )}
            {startDate && (
              <View className="sub-row">
                <Text className="sub-label">Start Date</Text>
                <Text className="sub-value" numberOfLines={1}>
                  {formatSubscriptionDateTime(startDate)}
                </Text>
              </View>
            )}
            {renewalDate && (
              <View className="sub-row">
                <Text className="sub-label">Renewal Date</Text>
                <Text className="sub-value" numberOfLines={1}>
                  {formatSubscriptionDateTime(renewalDate)}
                </Text>
              </View>
            )}
            <View className="sub-row">
              <Text className="sub-label">Status</Text>
              <Text className="sub-value capitalize" numberOfLines={1}>
                {formatStatusLabel(status)}
              </Text>
            </View>
          </View>

          {onCancelPress && status === "active" && (
            <TouchableOpacity
              className={`sub-cancel ${isCancelling ? "sub-cancel-disabled" : ""}`}
              onPress={onCancelPress}
              disabled={isCancelling}
            >
              <Text className="sub-cancel-text">
                {isCancelling ? "Cancelling..." : "Cancel Subscription"}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      )}
    </TouchableOpacity>
  );
};

export default SubscriptionCard;

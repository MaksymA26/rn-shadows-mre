import { View, Animated, Pressable, StyleSheet } from "react-native";
import { useCallback, useRef } from "react";

// change these values to see the difference
// Default values
// isFullShadow: true
// hasBorderRadius: false

const isFullShadow = true;
const hasBorderRadius = false;

export default function Index() {
  const isExpanded = useRef(false);
  const heightAnim = useRef(new Animated.Value(defaultHeight)).current;

  const toggleHeight = useCallback(() => {
    Animated.timing(heightAnim, {
      toValue: isExpanded.current ? defaultHeight : 100,
      duration: 300,
      useNativeDriver: false,
    }).start();
    isExpanded.current = !isExpanded.current;
  }, []);

  return (
    <View style={styles.container}>
      <Pressable onPress={toggleHeight}>
        <Animated.View
          style={[
            styles.box,
            {
              height: heightAnim,
              backgroundColor: "red",
            },
          ]}
        />
      </Pressable>
      <View
        style={[
          styles.box,
          {
            height: defaultHeight,
            backgroundColor: "blue",
          },
        ]}
      />
    </View>
  );
}

const defaultHeight = 300;

const fullShadow = "rgb(0, 0, 0)";
const alphaShadow = "rgba(0, 0, 0, 0.12)";

const boxShadow = `0px 4px 24px 0px ${isFullShadow ? fullShadow : alphaShadow}`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    rowGap: 16,
    backgroundColor: "white",
  },
  box: {
    boxShadow,
    borderRadius: hasBorderRadius ? 16 : 0,
  },
});

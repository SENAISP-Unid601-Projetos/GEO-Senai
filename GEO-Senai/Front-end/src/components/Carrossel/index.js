import React, { useState, useEffect, useRef } from "react";
import {
  View,
  ScrollView,
  Image,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";

const { width } = Dimensions.get("window");

const Carrossel = ({ onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollViewRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex < 2) {
        scrollViewRef.current.scrollTo({
          x: width * (currentIndex + 1),
          animated: true,
        });
        setCurrentIndex(currentIndex + 1);
      } else {
        scrollViewRef.current.scrollTo({ x: 0, animated: true });
        setCurrentIndex(0);
      }
    }, 4000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <TouchableWithoutFeedback onPress={onClose}>
      <View style={styles.container}>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewContent}
          ref={scrollViewRef}
          onScroll={(event) => {
            const xOffset = event.nativeEvent.contentOffset.x;
            const index = Math.round(xOffset / width);
            setCurrentIndex(index);
          }}
        >
          <Image
            source={require("./../../../assets/carrossel1.jpg")}
            style={styles.image}
          />
          <Image
            source={require("./../../../assets/carrossel2.jpg")}
            style={styles.image}
          />
          <Image
            source={require("./../../../assets/carrossel3.jpeg")}
            style={styles.image}
          />
          {/* Adicione quantas imagens desejar */}
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "black",
    zIndex: 999,
  },
  scrollViewContent: {
    width: width * 3, // Multiplica a largura da tela pelo número de imagens
    flexDirection: "row",
  },
  image: {
    width,
    height: "100%",
    resizeMode: "cover",
  },
});

export default Carrossel;

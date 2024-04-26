import React, { useState, useEffect } from "react";
import { StyleSheet, View, Image } from "react-native";
import { ReactNativeZoomableView } from "@openspacelabs/react-native-zoomable-view";

const Mapa = ({ mapaSelecionado }) => {
  const [mapa, setMapa] = useState(
    require("./../../../assets/Foto_Area_1_andar_1.png")
  );

  useEffect(() => {
    if (mapaSelecionado === "2") {
      console.log(mapaSelecionado);
      setMapa(require("./../../../assets/Foto_Area_1_andar_1.png"));
    } else if (mapaSelecionado === "1") {
      console.log(mapaSelecionado);
      setMapa(require("./../../../assets/Foto_Area_1_andar_2.png"));
    } else if (mapaSelecionado === "3") {
      setMapa(require("./../../../assets/Foto_Area_2.png"));
    } else {
      setMapa(require("./../../../assets/Foto_Area_1_andar_1.png"));
    }
  }, [mapaSelecionado]);

  return (
    <View style={styles.container}>
      <View style={{ flexShrink: 1, height: 1000, width: 1700 }}>
        <ReactNativeZoomableView
          maxZoom={2}
          contentWidth={800}
          contentHeight={400}
        >
          <Image
            style={{ width: "100%", height: "100%", resizeMode: "contain" }}
            source={mapa}
          />
        </ReactNativeZoomableView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});

export default Mapa;

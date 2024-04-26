import React, { useState } from "react";
import { View, TextInput, Button, Text, Alert } from "react-native";

const ApiCognitiveScreen = () => {
  const [text, setText] = useState("");
  const [detectedLanguage, setDetectedLanguage] = useState("");

  const detectLanguage = async () => {
    try {
      const apiKey = "2b56b830cf2b42a5a676054b82dc8f0a"; // Substitua pela sua chave de assinatura
      const requestBody = JSON.stringify({
        documents: [
          {
            id: "1",
            text: text,
          },
        ],
      });

      const response = await fetch(
        "https://brazilsouth.api.cognitive.microsoft.com/text/analytics/v3.1-preview.1/languages",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Ocp-Apim-Subscription-Key": apiKey,
            "Ocp-Apim-Subscription-Region": "brazilsouth",
          },
          body: requestBody,
        }
      );

      if (!response.ok) {
        throw new Error("Erro ao detectar idioma");
      }

      const data = await response.json();
      if (data && data.documents && data.documents.length > 0) {
        const detectedLanguageCode =
          data.documents[0].detectedLanguages[0].iso6391Name;
        setDetectedLanguage(detectedLanguageCode);
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "Ocorreu um erro ao detectar o idioma do texto.");
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TextInput
        style={{
          height: 100,
          width: "80%",
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 20,
          padding: 10,
        }}
        onChangeText={setText}
        value={text}
        placeholder="Digite o texto aqui"
        multiline
      />
      <Button
        title="Detectar Idioma"
        onPress={detectLanguage}
        disabled={text === ""}
      />
      {detectedLanguage !== "" && (
        <Text style={{ marginTop: 20 }}>
          Idioma Detectado: {detectedLanguage}
        </Text>
      )}
    </View>
  );
};

export default ApiCognitiveScreen;

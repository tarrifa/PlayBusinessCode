import { View, Text, ScrollView, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Card } from "@rneui/base";
import { Slider } from "@rneui/themed";
import { Dropdown } from "react-native-element-dropdown";
import Payment from "../components/Payment";

export default function NewInvestment() {
  const [investment, setInvestment] = useState(0);
  const [points, setPoints] = useState(0);
  const [payment, setPayment] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.title}>Nueva inversión</Text>
        <Card containerStyle={styles.card}>
          <Text style={styles.text}>
            Selecciona el monto que deseas invertir:
          </Text>
          <View style={styles.table}>
            <Text style={styles.subtitle}>Inversión</Text>
            <Text style={styles.text}>
              ${Intl.NumberFormat("en-US").format(investment)}
            </Text>
          </View>
          <Slider
            value={investment}
            onValueChange={setInvestment}
            maximumValue={100000}
            minimumValue={0}
            step={10000}
            allowTouchTrack
            minimumTrackTintColor="#C9C9C9"
            maximumTrackTintColor="#C9C9C9"
            trackStyle={{ height: 1, backgroundColor: "#c9c9c9" }}
            thumbStyle={{
              width: 20,
              height: 20,
              backgroundColor: "white",
              borderWidth: 1,
              borderColor: "#A5D239",
              justifyContent: "center",
              alignItems: "center",
              shadowColor: "#A5D239",
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.9,
              shadowRadius: 4,
            }}
            thumbProps={{
              children: (
                <View
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: 6,
                    backgroundColor: "#A5D239",
                  }}
                />
              ),
            }}
          />

          <View style={styles.table}>
            <Text style={styles.subtitle}>Puntos Play</Text>
            <Text style={styles.text}>
              ${Intl.NumberFormat("en-US").format(points)}
            </Text>
          </View>
          <Slider
            value={points}
            onValueChange={setPoints}
            maximumValue={investment*.5}
            minimumValue={0}
            step={1000}
            allowTouchTrack
            minimumTrackTintColor="#C9C9C9"
            maximumTrackTintColor="#C9C9C9"
            trackStyle={{ height: 1, backgroundColor: "#A5D239" }}
            thumbStyle={{
              width: 20,
              height: 20,
              backgroundColor: "white",
              borderWidth: 1,
              borderColor: "#A5D239",
              justifyContent: "center",
              alignItems: "center",
              shadowColor: "#A5D239",
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.9,
              shadowRadius: 4,
            }}
            thumbProps={{
              children: (
                <View
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: 6,
                    backgroundColor: "#A5D239",
                  }}
                />
              ),
            }}
          />
          <Text style={styles.subtitle}>Métodos de pago</Text>
          <Dropdown
            style={[styles.dropdown, isFocus && { borderColor: "grey" }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            data={[
              { label: "Transferencia bancaria (SPEI)", value: "(SPEI)" },
              { label: "Tarjeta de débito", value: "debito" },
            ]}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? "Seleccione un método de pago" : "..."}
            searchPlaceholder="Seleccione un método de pago"
            value={payment}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item) => {
              setPayment(item.value);
              setIsFocus(false);
            }}
          />
        </Card>
      </View>
      <Text style={styles.title}>Pago</Text>
      <Payment investment= {investment} points={points} payment={payment}/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 18,
    marginRight: 18,
  },
  title: {
    fontFamily: "Rubik",
    fontWeight: 500,
    fontSize: 25,
    lineHeight: 30,
    marginTop: 30,
  },
  text: {
    fontFamily: "Lato",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
  },
  table: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 14,
  },
  subtitle: {
    fontFamily: "Rubik",
    fontWeight: 600,
    fontSize: 16,
    lineHeight: 19,
  },
  card: {
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 10,
    shadowColor: "#0D2A30",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    borderColor:"transparent",
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 2,
  },
  dropdown: {
    height: 46,
    borderColor: "#333333",
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 16,
    marginTop: 15,
  },
});

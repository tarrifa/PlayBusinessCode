import { View, Text, ScrollView, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { Card } from "@rneui/base";

export default function Payment(props) {
  const [comission, setComission] = useState(0);
  const [bank, setBank] = useState(0);
  const [taxes, setTaxes] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Calculate commission
    const commission = props.investment * 0.05;
    setComission(commission);

    // Calculate bank fee

    let bankFee = 0;
    if (props.payment !== "(SPEI)") {
      bankFee = (commission - props.points + props.investment) * 0.024;
    }
    setBank(bankFee);

    // Calculate taxes
    const taxRate = 0.16;
    const taxAmount = commission + bankFee;
    const taxes = taxAmount * taxRate;
    setTaxes(taxes);

    // Calculate total
    const totalAmount =
      props.investment - props.points + commission + taxes + bankFee;
    setTotal(totalAmount);
  }, [props.investment, props.points, props.payment]);
  return (
    <Card containerStyle={styles.card}>
      <View style={styles.cardContainer}>
        <View style={{ backgroundColor: "#fff", flex: 1 }}>
          <View style={styles.table}>
            <Text style={styles.subtitle}>Inversión</Text>
            <Text style={styles.text}>
              ${Intl.NumberFormat("en-US").format(props.investment)}
            </Text>
          </View>
          <View style={styles.table}>
            <Text style={styles.subtitle}>Descuentos Puntos Play</Text>
            <Text style={styles.text}>
              ${Intl.NumberFormat("en-US").format(props.points)}
            </Text>
          </View>
          <View style={styles.table}>
            <Text style={styles.subtitle}>Comisión Play Business</Text>
            <Text style={styles.text}>
              ${Intl.NumberFormat("en-US").format(props.investment * 0.05)}
            </Text>
          </View>
          <View style={styles.table}>
            <Text style={styles.subtitle}>Comisión bancaria</Text>
            <Text style={styles.text}>
              ${Intl.NumberFormat("en-US").format(bank)}
            </Text>
          </View>
          <View style={styles.table}>
            <Text style={styles.subtitle}>I.V.A.</Text>
            <Text style={styles.text}>
              ${Intl.NumberFormat("en-US").format(taxes)}
            </Text>
          </View>
        </View>
        <View style={styles.last}>
          <Text
            style={{
              fontWeight: 500,
              fontSize: 14,
              lineHeight: 17,
              color: "#ffffff",
            }}
          >
            Total a pagar
          </Text>
          <Text
            style={{
              fontWeight: 600,
              fontSize: 16,
              lineHeight: 19,
              color: "#ffffff",
            }}
          >
            ${Intl.NumberFormat("en-US").format(total)}
          </Text>
        </View>
      </View>
    </Card>
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
    fontWeight: 500,
    fontSize: 14,
    lineHeight: 17,
    color: "#757582",
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
    borderColor: "transparent",
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 2,
  },

  last: {
    backgroundColor: "#243D42",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 14,
    flex: 1,
    height: 45,
    padding: 11,
  },
  cardContainer: {
    borderRadius: 10,
    overflow: "hidden",
  },
});

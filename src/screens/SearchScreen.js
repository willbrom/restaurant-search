import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultList from "../components/ResultList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, errorMessage, searchApi] = useResults();

  const filterResultByPrice = (price) =>
    results.filter((v) => v.price === price);

  return (
    <View style={styles.containerStyle}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? (
        <Text>{errorMessage}</Text>
      ) : (
        <ScrollView style={styles.listStyle}>
          <ResultList
            title="Cost Effective"
            results={filterResultByPrice("$")}
          />
          <ResultList title="Bit Pricer" results={filterResultByPrice("$$")} />
          <ResultList
            title="Big Spender!"
            results={filterResultByPrice("$$$")}
          />
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  listStyle: {
    marginLeft: 15,
  },
});

export default SearchScreen;

import { SafeAreaView, StyleSheet, Text } from "react-native";
import Button from "../../components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../types/types";
import { increment, decrement } from "../../store/slices/countSlice/countSlice";
import { fetchTodos } from "../../store/slices/fetchSlice/fetchSlice";
import { useEffect } from "react";

export default function ReduxScreen() {
  const dispatch = useDispatch<AppDispatch>();
  const countValue = useSelector((state: RootState) => state.count.value);
  const { todos, status } = useSelector((state: RootState) => state.fetch);

  const handleFetch = () => {
    dispatch(fetchTodos());
  };

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <Text style={styles.text}>{countValue}</Text>
      {status === "loading" && <Text style={styles.text}>Loading...</Text>}
      {status === "success" && (
        <>
          <Text style={{ fontSize: 40 }}>Redux Thunk:</Text>
          {todos.slice(0, 2).map((todos) => (
            <Text
              key={todos.id}
              style={{ fontSize: 20, marginBottom: 10 }}
            >{`${todos.id}. ${todos.title}`}</Text>
          ))}
        </>
      )}
      <Button
        buttonText="Increase"
        buttonStyle={styles.buttonStyle}
        buttonTextStyle={styles.buttonTextStyle}
        onClick={() => {
          handleIncrement();
        }}
      />
      <Button
        buttonText="Decrease"
        buttonStyle={styles.buttonStyle}
        buttonTextStyle={styles.buttonTextStyle}
        onClick={() => {
          handleDecrement();
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    width: 120,
    height: 60,
    backgroundColor: "#a3ffbc",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  buttonTextStyle: { fontSize: 20, fontWeight: "700", color: "white" },
  text: {
    fontSize: 50,
    marginBottom: 20,
  },
});

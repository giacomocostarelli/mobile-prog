import React, { useState } from "react";
import GoalItem from "./components/GoalItem";
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	Button,
	ScrollView,
	FlatList,
} from "react-native";

export default function App() {
	const [enteredGoal, setEnteredGoal] = useState("");
	const [courseGoals, setCourseGoals] = useState([
		{ key: "1", value: "a" },
		{ key: "2", value: "b" },
		{ key: "3", value: "c" },
		{ key: "4", value: "d" },
		{ key: "5", value: "e" },
		{ key: "6", value: "f" },
		{ key: "7", value: "g" },
		{ key: "8", value: "h" },
		{ key: "9", value: "i" },
		{ key: "10", value: "j" },
	]);

	const goalInputHandler = (enteredText) => {
		setEnteredGoal(enteredText);
	};

	const addGoalHandler = () => {
		setCourseGoals(() => [
			...courseGoals,
			{ key: Math.random().toString(), value: enteredGoal },
		]);
	};

	return (
		<View style={styles.screen}>
			<View style={styles.inputContainer}>
				<TextInput
					placeholder="Course Goals "
					style={styles.input}
					onChangeText={goalInputHandler}
					value={enteredGoal}
				/>
				<Button title="ADD" onPress={addGoalHandler} />
			</View>
			<FlatList
				keyExtractor={(item, index) => item.key}
				data={courseGoals}
				renderItem={(itemData) => <GoalItem title={itemData.item.value} />}
			></FlatList>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		padding: 50,
	},
	inputContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	input: {
		width: "80%",
		borderColor: "black",
		borderWidth: 1,
		padding: 10,
	},
});

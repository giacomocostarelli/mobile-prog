import React, { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StyleSheet, View, FlatList, Button } from "react-native";

export default function App() {
	const [isAddMode, setIsAddMode] = useState(false);
	const [courseGoals, setCourseGoals] = useState([
		{ id: "1", value: "a" },
		{ id: "2", value: "b" },
		{ id: "3", value: "c" },
		{ id: "4", value: "d" },
		{ id: "5", value: "e" },
		{ id: "6", value: "f" },
		{ id: "7", value: "g" },
		{ id: "8", value: "h" },
		{ id: "9", value: "i" },
		{ id: "10", value: "j" },
	]);

	const addGoalHandler = (goalTitle) => {
		setCourseGoals(() => [
			...courseGoals,
			{ id: Math.random().toString(), value: goalTitle },
		]);
		setIsAddMode(false);
	};

	const removeGoalHandler = (goalId) => {
		setCourseGoals((currentGoals) => {
			return currentGoals.filter((goal) => goalId !== goal.id);
		});
	};

	const cancelGoalAddittionHandler = () => {
		setIsAddMode(false);
	};

	return (
		<View style={styles.screen}>
			<Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
			<GoalInput
				visible={isAddMode}
				onAddGoal={addGoalHandler}
				onCancel={cancelGoalAddittionHandler}
			/>
			<FlatList
				keyExtractor={(item, index) => item.id}
				data={courseGoals}
				renderItem={(itemData) => (
					<GoalItem
						id={itemData.item.id}
						onDelete={removeGoalHandler}
						title={itemData.item.value}
					/>
				)}
			></FlatList>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		padding: 50,
	},
});

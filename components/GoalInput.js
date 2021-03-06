import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button, Modal } from "react-native";

const GoalInput = (props) => {
	const [enteredGoal, setEnteredGoal] = useState("");

	const goalInputHandler = (enteredText) => {
		setEnteredGoal(enteredText);
	};

	const addGoalHandler = () => {
		props.onAddGoal(enteredGoal);
		setEnteredGoal("");
	};

	return (
		<Modal visible={props.visible} animationType={"slide"}>
			<View style={styles.inputContainer}>
				<TextInput
					placeholder="Course Goals "
					style={styles.input}
					onChangeText={goalInputHandler}
					value={enteredGoal}
				/>
				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button color="green" title="ADD" onPress={addGoalHandler} />
					</View>
					<View style={styles.button}>
						<Button color="red" title="CANCEL" onPress={props.onCancel} />
					</View>
				</View>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},

	input: {
		width: "80%",
		borderColor: "black",
		borderWidth: 1,
		padding: 10,
		marginBottom: 10,
	},

	buttonContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		width: "60%",
	},
	button: {
		width: "45%",
	},
});

export default GoalInput;

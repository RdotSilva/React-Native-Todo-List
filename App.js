import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';

const Todo = props => (
	<View>
		<Button onPress={props.onDelete} title="delete" />
		<Text>{props.todo.text}</Text>
	</View>
);

export default class App extends React.Component {
	constructor() {
		super();
		this.state = {
			todos: []
		};
	}

	render() {
		return (
			<View>
				<Text>Todo count: {this.state.todos.length}</Text>
				<Text>
					Unchecked todo count:{' '}
					{this.state.todos.filter(todo => !todo.checked).length}
				</Text>
				<Button onPress={() => this.addTodo()} tlte="Add TODO" />
				<ScrollView>
					{this.state.todos.map(todo => (
						<Todo
							onToggle={() => this.toggleTodo(todo.id)}
							onDelete={() => this.removeTodo(todo.id)}
							todo={todo}
						/>
					))}
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});

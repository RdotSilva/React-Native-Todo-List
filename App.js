import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { Constants } from 'expo';

let id = 0;

const Todo = props => (
	<View style={{ flexDirection: 'row', alignItems: 'center' }}>
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

	addTodo() {
		id++;
		const text = `TODO number ${id}`;
		this.setState({
			todos: [
				...this.state.todos,
				{ id: id++, text: text, checked: false }
			]
		});
	}

	render() {
		return (
			<View style={{ paddingTop: Constants.statusBarHeight }}>
				<Text>Todo count: {this.state.todos.length}</Text>
				<Text>
					Unchecked todo count:{' '}
					{this.state.todos.filter(todo => !todo.checked).length}
				</Text>
				<Button onPress={() => this.addTodo()} title="Add TODO" />
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

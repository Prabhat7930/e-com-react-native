import type React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface CategoryProps {
	item: string;
	selectedCategory: string | null;
	setSelectedCategory: React.Dispatch<React.SetStateAction<string | null>>;
}

export const Category: React.FC<CategoryProps> = ({
	item,
	selectedCategory,
	setSelectedCategory
}) => {
	return (
		<TouchableOpacity onPress={() => setSelectedCategory(item)}>
			<Text
				style={[
					styles.categoryText,
					selectedCategory === item && {
						color: "#FFFFFF",
						backgroundColor: "#E96E6E"
					}
				]}
			>
				{item}
			</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	categoryText: {
		fontSize: 16.0,
		fontWeight: "semibold",
		textAlign: "center",
		color: "#938F8F",
		backgroundColor: "#DFDCDC",
		borderRadius: 12.0,
		paddingVertical: 12,
		paddingHorizontal: 20,
		marginHorizontal: 8,
		marginVertical: 12
	},
	selectedCategoryText: {
		fontSize: 16.0,
		fontWeight: "semibold",
		textAlign: "center",
		color: "#FFFFFF",
		backgroundColor: "#E96E6E",
		borderRadius: 12.0,
		paddingVertical: 12,
		paddingHorizontal: 20,
		marginHorizontal: 8,
		marginVertical: 12
	}
});

import React from "react";

const MealsContext = React.createContext();

const todaysMeals = ["Baked Beans", "Baked Sweet Potatoes", "Baked Potatoes"];

const MealsProvider = ({ children }) => {
	const [meals, setMealsList] = React.useState(todaysMeals);

	return (
		<MealsContext.Provider value={{ meals }}>{children}</MealsContext.Provider>
	);
};

export const useMealsListContext = () => {
	const context = React.useContext(MealsContext);
	if (!context) {
		throw new Error("useMealsListContext must be used within a MealsProvider");
	}
	return context;
};

export default MealsProvider;
